'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Button,
  Form,
  Input,
  DatePicker,
  List,
  Card,
  Row,
  Col,
} from 'antd'
import { PlusOutlined, CalendarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExtracurricularandEventManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [events, setEvents] = useState<
    Prisma.EventGetPayload<{ include: { organization: true } }>[]
  >([])
  const [loading, setLoading] = useState(true)

  const { data, isLoading, refetch } = Api.event.findMany.useQuery({
    include: { organization: true },
  })
  const { mutateAsync: createEvent } = Api.event.create.useMutation()

  useEffect(() => {
    if (data) {
      setEvents(data)
      setLoading(isLoading)
    }
  }, [data, isLoading])

  const handleCreateEvent = async (values: any) => {
    try {
      await createEvent({
        data: { ...values, organizationId: params.organizationId },
      })
      enqueueSnackbar('Event created successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create event', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Extracurricular and Event Management</Title>
          <Paragraph>
            As an admin, you can schedule activities and events. As a user, you
            can view upcoming activities and events.
          </Paragraph>

          {checkOrganizationRole('admin') && (
            <Card title="Schedule a New Event" style={{ marginBottom: '20px' }}>
              <Form layout="vertical" onFinish={handleCreateEvent}>
                <Form.Item
                  name="name"
                  label="Event Name"
                  rules={[
                    { required: true, message: 'Please input the event name!' },
                  ]}
                >
                  <Input placeholder="Enter event name" />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the event description!',
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Enter event description"
                  />
                </Form.Item>
                <Form.Item
                  name="date"
                  label="Event Date"
                  rules={[
                    {
                      required: true,
                      message: 'Please select the event date!',
                    },
                  ]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                  >
                    Schedule Event
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}

          <Card title="Upcoming Events">
            <List
              loading={loading}
              itemLayout="horizontal"
              dataSource={events}
              renderItem={event => (
                <List.Item>
                  <List.Item.Meta
                    title={event.name}
                    description={
                      <>
                        <Text>{event.description}</Text>
                        <br />
                        <Text type="secondary">
                          {dayjs(event.date).format('MMMM D, YYYY')}
                        </Text>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
