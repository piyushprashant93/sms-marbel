'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Upload,
  Select,
  DatePicker,
  Table,
  Tabs,
  Row,
  Col,
} from 'antd'
import {
  UploadOutlined,
  FileTextOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TeacherandStaffProfilePage() {
  const router = useRouter()
  const params = useParams()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [isAdmin, setIsAdmin] = useState(false)
  const [profile, setProfile] =
    useState<Prisma.TeacherGetPayload<{ include: { user: true } }>>()
  const [documents, setDocuments] = useState([])
  const [roles, setRoles] = useState([])
  const [performanceHistory, setPerformanceHistory] = useState([])
  const [availability, setAvailability] = useState([])
  const [tasks, setTasks] = useState([])
  const [trainingRecords, setTrainingRecords] = useState([])

  const { data: teacherData, isLoading: isLoadingTeacher } =
    Api.teacher.findUnique.useQuery({
      where: { id: params.staffId },
      include: { user: true },
    })

  const { mutateAsync: updateTeacher } = Api.teacher.update.useMutation()

  useEffect(() => {
    if (teacherData) {
      setProfile(teacherData)
      form.setFieldsValue({
        name: teacherData.user.name,
        email: teacherData.user.email,
        contact: teacherData.user.contact,
        specialization: teacherData.subjectSpecialization,
        payroll: teacherData.payrollDetails,
      })
    }
  }, [teacherData])

  useEffect(() => {
    setIsAdmin(checkOrganizationRole('admin'))
  }, [user])

  const handleUpdateProfile = async values => {
    try {
      await updateTeacher({
        where: { id: params.staffId },
        data: {
          user: {
            update: {
              name: values.name,
              email: values.email,
              contact: values.contact,
            },
          },
          subjectSpecialization: values.specialization,
          payrollDetails: values.payroll,
        },
      })
      enqueueSnackbar('Profile updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update profile', { variant: 'error' })
    }
  }

  const handleUpload = async ({ file }) => {
    // Upload logic here
  }

  const columns = [
    {
      title: 'Document Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Uploaded At',
      dataIndex: 'uploadedAt',
      key: 'uploadedAt',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button type="link" icon={<FileTextOutlined />}>
          View
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} md={20} lg={16}>
          <Title level={2}>Teacher and Staff Profile</Title>
          <Paragraph>
            Manage and update your profile information and documents.
          </Paragraph>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <UserOutlined />
                  Profile
                </span>
              }
              key="1"
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleUpdateProfile}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: 'Please enter your name' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="contact" label="Contact">
                  <Input />
                </Form.Item>
                <Form.Item name="specialization" label="Subject Specialization">
                  <Input />
                </Form.Item>
                <Form.Item name="payroll" label="Payroll Details">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Update Profile
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <UploadOutlined />
                  Documents
                </span>
              }
              key="2"
            >
              <Upload customRequest={handleUpload}>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload>
              <Table columns={columns} dataSource={documents} rowKey="id" />
            </TabPane>
            {isAdmin && (
              <TabPane
                tab={
                  <span>
                    <SettingOutlined />
                    Admin
                  </span>
                }
                key="3"
              >
                {/* Admin functionalities like role assignment, availability management, etc. */}
              </TabPane>
            )}
          </Tabs>
        </Col>
      </Row>
    </PageLayout>
  )
}
