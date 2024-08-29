'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  Upload,
  Tabs,
  List,
  Card,
  Modal,
  Row,
  Col,
} from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  LockOutlined,
  FileTextOutlined,
  HistoryOutlined,
  SolutionOutlined,
  FileAddOutlined,
  SaveOutlined,
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

export default function StudentProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isAdmin, setIsAdmin] = useState(false)
  const [student, setStudent] =
    useState<
      Prisma.StudentGetPayload<{
        include: { user: true; organization: true; fees: true }
      }>
    >()
  const [loading, setLoading] = useState(true)
  const [uploadModalVisible, setUploadModalVisible] = useState(false)
  const [documentFile, setDocumentFile] = useState<File | null>(null)

  const studentId = params.studentId
  const organizationId = params.organizationId

  const { data: studentData, refetch } = Api.student.findUnique.useQuery({
    where: { id: studentId },
    include: { user: true, organization: true, fees: true },
  })

  const { mutateAsync: updateStudent } = Api.student.update.useMutation()
  const { mutateAsync: uploadDocument } = useUploadPublic()

  useEffect(() => {
    if (studentData) {
      setStudent(studentData)
      setLoading(false)
    }
  }, [studentData])

  useEffect(() => {
    setIsAdmin(checkOrganizationRole('admin'))
  }, [checkOrganizationRole])

  const handleUpdateStudent = async (
    values: Partial<Prisma.StudentUpdateInput>,
  ) => {
    try {
      await updateStudent({ where: { id: studentId }, data: values })
      enqueueSnackbar('Student details updated successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update student details', { variant: 'error' })
    }
  }

  const handleUploadDocument = async () => {
    if (documentFile) {
      try {
        const { url } = await uploadDocument({ file: documentFile })
        // Save document URL to student record (implementation depends on API)
        enqueueSnackbar('Document uploaded successfully', {
          variant: 'success',
        })
        setUploadModalVisible(false)
      } catch (error) {
        enqueueSnackbar('Failed to upload document', { variant: 'error' })
      }
    }
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Student Profile</Title>
      <Paragraph>View and manage student details</Paragraph>
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={18} xl={16}>
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
              <Card loading={loading}>
                <Form
                  layout="vertical"
                  initialValues={student?.user}
                  onFinish={handleUpdateStudent}
                >
                  <Form.Item label="Name" name="name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Email" name="email">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Grade Level" name="gradeLevel">
                    <Input />
                  </Form.Item>
                  {isAdmin && (
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SaveOutlined />}
                      >
                        Update
                      </Button>
                    </Form.Item>
                  )}
                </Form>
              </Card>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <LockOutlined />
                  Change Password
                </span>
              }
              key="2"
            >
              <Card>
                <Form layout="vertical">
                  <Form.Item label="New Password" name="password">
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SaveOutlined />}
                    >
                      Change Password
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <FileTextOutlined />
                  Documents
                </span>
              }
              key="3"
            >
              <Card>
                {isAdmin && (
                  <Button
                    type="primary"
                    icon={<FileAddOutlined />}
                    onClick={() => setUploadModalVisible(true)}
                  >
                    Upload Document
                  </Button>
                )}
                <List
                  dataSource={student?.fees}
                  renderItem={fee => (
                    <List.Item>
                      <List.Item.Meta
                        title={fee?.amount?.toString() || 'N/A'}
                        description={dayjs(fee?.dueDate).format('YYYY-MM-DD')}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <HistoryOutlined />
                  Enrollment History
                </span>
              }
              key="4"
            >
              <Card>
                <List
                  dataSource={student?.fees}
                  renderItem={fee => (
                    <List.Item>
                      <List.Item.Meta
                        title={fee?.amount?.toString() || 'N/A'}
                        description={dayjs(fee?.dueDate).format('YYYY-MM-DD')}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <SolutionOutlined />
                  Personal Notes
                </span>
              }
              key="5"
            >
              <Card>
                <Form layout="vertical">
                  <Form.Item label="Notes" name="notes">
                    <Input.TextArea rows={4} />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SaveOutlined />}
                    >
                      Save Notes
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Modal
        title="Upload Document"
        visible={uploadModalVisible}
        onCancel={() => setUploadModalVisible(false)}
        onOk={handleUploadDocument}
        okText="Upload"
      >
        <Upload
          beforeUpload={file => {
            setDocumentFile(file)
            return false
          }}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </Modal>
    </PageLayout>
  )
}
