'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Spin, Row, Col } from 'antd'
import { EditOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExamDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const examId = params.examId
  const {
    data: exam,
    isLoading,
    refetch,
  } = Api.exam.findUnique.useQuery({
    where: { id: examId },
    include: { course: true },
  })
  const { mutateAsync: updateExam } = Api.exam.update.useMutation()

  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (exam) {
      form.setFieldsValue({
        schedule: dayjs(exam.schedule).format('YYYY-MM-DD'),
        type: exam.type,
        course: exam.course?.name,
      })
    }
  }, [exam, form])

  const handleSave = async (values: any) => {
    try {
      await updateExam({
        where: { id: examId },
        data: { schedule: values.schedule, type: values.type },
      })
      enqueueSnackbar('Exam details updated successfully', {
        variant: 'success',
      })
      setIsEditing(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update exam details', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <Spin size="large" />
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Exam Details</Title>
          <Paragraph>
            Manage the details of the exam and update them as necessary.
          </Paragraph>
          <Form form={form} layout="vertical" onFinish={handleSave}>
            <Form.Item
              label="Schedule"
              name="schedule"
              rules={[{ required: true, message: 'Please enter the schedule' }]}
            >
              <Input disabled={!isEditing} />
            </Form.Item>
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: 'Please enter the type' }]}
            >
              <Input disabled={!isEditing} />
            </Form.Item>
            <Form.Item label="Course" name="course">
              <Input disabled />
            </Form.Item>
            {isEditing ? (
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SaveOutlined />}
                >
                  Save
                </Button>
                <Button
                  style={{ marginLeft: '10px' }}
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </Form.Item>
            ) : (
              <Form.Item>
                <Button
                  type="default"
                  onClick={() => setIsEditing(true)}
                  icon={<EditOutlined />}
                >
                  Edit
                </Button>
              </Form.Item>
            )}
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
