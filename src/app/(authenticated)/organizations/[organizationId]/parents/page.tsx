'use client'

import { Prisma } from '@prisma/client'
import { Typography, Button, Row, Col, Card } from 'antd'
import { MessageOutlined, CalendarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ParentandGuardianEngagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: userData, isLoading: isUserLoading } =
    Api.user.findUnique.useQuery({
      where: { id: user?.id },
      include: {
        organizationRoles: { include: { organization: true } },
        students: { include: { organization: true, fees: true } },
        teachers: { include: { organization: true } },
      },
    })

  const handleCommunication = () => {
    enqueueSnackbar('Navigating to communication page...', { variant: 'info' })
    router.push(`/organizations/${params.organizationId}/notifications`)
  }

  const handleScheduleMeeting = () => {
    enqueueSnackbar('Navigating to schedule meeting page...', {
      variant: 'info',
    })
    router.push(`/organizations/${params.organizationId}/events`)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={22} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Parent and Guardian Engagement Portal</Title>
          <Paragraph>
            Welcome to the Parent and Guardian Engagement Portal. Here you can
            communicate with teachers and, if you are an admin, schedule
            parent-teacher meetings.
          </Paragraph>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Button
                  type="primary"
                  icon={<MessageOutlined />}
                  onClick={handleCommunication}
                  block
                >
                  Communicate with Teachers
                </Button>
              </Col>
              {checkOrganizationRole('admin') && (
                <Col span={24}>
                  <Button
                    type="primary"
                    icon={<CalendarOutlined />}
                    onClick={handleScheduleMeeting}
                    block
                  >
                    Schedule Parent-Teacher Meetings
                  </Button>
                </Col>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
