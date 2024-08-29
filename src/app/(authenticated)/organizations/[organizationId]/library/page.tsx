'use client'

import { Typography, Row, Col, Card, Button, Spin } from 'antd'
import {
  BookOutlined,
  FileSearchOutlined,
  StockOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function LibraryandInventoryManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: books,
    isLoading: isLoadingBooks,
    refetch: refetchBooks,
  } = Api.book.findMany.useQuery({})
  const {
    data: issuances,
    isLoading: isLoadingIssuances,
    refetch: refetchIssuances,
  } = Api.issuance.findMany.useQuery({})
  const {
    data: inventories,
    isLoading: isLoadingInventories,
    refetch: refetchInventories,
  } = Api.inventory.findMany.useQuery({})

  const [isRefetching, setIsRefetching] = useState(false)

  const handleRefetch = async () => {
    setIsRefetching(true)
    await Promise.all([
      refetchBooks(),
      refetchIssuances(),
      refetchInventories(),
    ])
    setIsRefetching(false)
    enqueueSnackbar('Data refreshed successfully', { variant: 'success' })
  }

  if (
    isLoadingBooks ||
    isLoadingIssuances ||
    isLoadingInventories ||
    isRefetching
  ) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Library and Inventory Management</Title>
      <Text>
        As an admin, you can catalog books, track book issuance, and manage
        stock inventory.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} md={12} lg={8}>
          <Card
            title="Catalog Books"
            bordered={false}
            actions={[
              <Button
                type="primary"
                icon={<BookOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/library/catalog`,
                  )
                }
              >
                Manage
              </Button>,
            ]}
          >
            <Text>Total Books: {books?.length.toString()}</Text>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            title="Track Book Issuance"
            bordered={false}
            actions={[
              <Button
                type="primary"
                icon={<FileSearchOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/library/issuance`,
                  )
                }
              >
                Manage
              </Button>,
            ]}
          >
            <Text>Total Issuances: {issuances?.length.toString()}</Text>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            title="Manage Stock Inventory"
            bordered={false}
            actions={[
              <Button
                type="primary"
                icon={<StockOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/library/inventory`,
                  )
                }
              >
                Manage
              </Button>,
            ]}
          >
            <Text>Total Inventory Items: {inventories?.length.toString()}</Text>
          </Card>
        </Col>
      </Row>
      <Button
        type="default"
        onClick={handleRefetch}
        style={{ marginTop: '20px' }}
      >
        Refresh Data
      </Button>
    </PageLayout>
  )
}
