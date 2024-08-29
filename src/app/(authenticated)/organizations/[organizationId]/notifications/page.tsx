'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Input, Button, List, Spin, Row, Col } from 'antd'
import { NotificationOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CommunicationandNotificationsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [announcement, setAnnouncement] = useState<string>('')
  const organizationId = params.organizationId

  const {
    data: announcements,
    isLoading,
    refetch,
  } = Api.announcement.findMany.useQuery({
    where: { organizationId },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: createAnnouncement } =
    Api.announcement.create.useMutation()

  const handleCreateAnnouncement = async () => {
    if (!announcement.trim()) {
      enqueueSnackbar('Announcement cannot be empty', { variant: 'error' })
      return
    }

    try {
      await createAnnouncement({
        data: { content: announcement, organizationId },
      })
      setAnnouncement('')
      enqueueSnackbar('Announcement created successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create announcement', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>
            <NotificationOutlined /> Announcements & Notifications
          </Title>
          <Text>
            Stay updated with the latest announcements and notifications
          </Text>
        </Col>
      </Row>
      {checkOrganizationRole('admin') && (
        <Row justify="center" style={{ marginBottom: '20px' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Input.TextArea
              value={announcement}
              onChange={e => setAnnouncement(e.target.value)}
              placeholder="Write your announcement here..."
              rows={4}
              style={{ marginBottom: '10px' }}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleCreateAnnouncement}
            >
              Create Announcement
            </Button>
          </Col>
        </Row>
      )}
      <Row justify="center">
        <Col span={24}>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <List
              bordered
              dataSource={announcements}
              renderItem={item => (
                <List.Item>
                  <Text>{item.content}</Text>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
