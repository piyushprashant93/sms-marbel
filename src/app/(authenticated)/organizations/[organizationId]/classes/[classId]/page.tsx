'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Table,
  Space,
  Modal,
  Select,
  InputNumber,
  Row,
  Col,
  Card,
} from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ClassDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const classId = params.classId
  const organizationId = params.organizationId

  const isAdmin = checkOrganizationRole('admin')
  const isTeacher = checkOrganizationRole('teacher')

  const {
    data: classData,
    isLoading: classLoading,
    refetch: refetchClass,
  } = Api.classData.findUnique.useQuery({
    where: { id: classId },
    include: { courses: true, organization: true },
  })

  const {
    data: students,
    isLoading: studentsLoading,
    refetch: refetchStudents,
  } = Api.student.findMany.useQuery({
    where: { organizationId },
  })

  const { mutateAsync: updateClass } = Api.classData.update.useMutation()
  const { mutateAsync: createStudent } = Api.student.create.useMutation()
  const { mutateAsync: deleteStudent } = Api.student.delete.useMutation()

  const [editMode, setEditMode] = useState(false)
  const [classForm] = Form.useForm()
  const [studentForm] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    if (classData) {
      classForm.setFieldsValue({
        name: classData.name,
        timetable: classData.timetable,
        location: classData.location,
        capacity: classData.capacity,
        description: classData.description,
        objectives: classData.objectives,
      })
    }
  }, [classData])

  const handleUpdateClass = async (values: any) => {
    try {
      await updateClass({ where: { id: classId }, data: values })
      enqueueSnackbar('Class updated successfully', { variant: 'success' })
      setEditMode(false)
      refetchClass()
    } catch (error) {
      enqueueSnackbar('Failed to update class', { variant: 'error' })
    }
  }

  const handleAddStudent = async (values: any) => {
    try {
      await createStudent({ data: { ...values, organizationId } })
      enqueueSnackbar('Student added successfully', { variant: 'success' })
      setIsModalVisible(false)
      refetchStudents()
    } catch (error) {
      enqueueSnackbar('Failed to add student', { variant: 'error' })
    }
  }

  const handleDeleteStudent = async (studentId: string) => {
    try {
      await deleteStudent({ where: { id: studentId } })
      enqueueSnackbar('Student removed successfully', { variant: 'success' })
      refetchStudents()
    } catch (error) {
      enqueueSnackbar('Failed to remove student', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'studentIdCard',
      key: 'studentIdCard',
    },
    {
      title: 'Name',
      dataIndex: 'user',
      key: 'user',
      render: (user: Prisma.User) => user.name,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.Student) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteStudent(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} md={20} lg={16}>
          <Card>
            <Title level={2}>Class Details</Title>
            <Paragraph>Manage class details, students, and more.</Paragraph>
            <Form
              form={classForm}
              layout="vertical"
              onFinish={handleUpdateClass}
            >
              <Form.Item name="name" label="Class Name">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="timetable" label="Timetable">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="location" label="Location">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="capacity" label="Capacity">
                <InputNumber disabled={!editMode} />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea disabled={!editMode} />
              </Form.Item>
              <Form.Item name="objectives" label="Objectives">
                <Input.TextArea disabled={!editMode} />
              </Form.Item>
              {isAdmin && (
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SaveOutlined />}
                    disabled={!editMode}
                  >
                    Save
                  </Button>
                  <Button
                    type="default"
                    onClick={() => setEditMode(!editMode)}
                    style={{ marginLeft: '10px' }}
                  >
                    {editMode ? 'Cancel' : 'Edit'}
                  </Button>
                </Form.Item>
              )}
            </Form>
          </Card>

          <Card style={{ marginTop: '20px' }}>
            <Title level={3}>Class Roster</Title>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
              style={{ marginBottom: '10px' }}
            >
              Add Student
            </Button>
            <Table
              dataSource={students}
              columns={columns}
              rowKey="id"
              loading={studentsLoading}
            />
          </Card>

          <Modal
            title="Add Student"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <Form
              form={studentForm}
              layout="vertical"
              onFinish={handleAddStudent}
            >
              <Form.Item
                name="studentIdCard"
                label="Student ID"
                rules={[
                  { required: true, message: 'Please input the student ID' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="userId"
                label="User"
                rules={[{ required: true, message: 'Please select a user' }]}
              >
                <Select>
                  {students?.map((student: Prisma.Student) => (
                    <Option key={student.user.id} value={student.user.id}>
                      {student.user.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  )
}
