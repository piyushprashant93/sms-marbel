'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Button,
  Form,
  Input,
  Select,
  Table,
  Space,
  Modal,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TeacherandStaffManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: teachers,
    isLoading: teachersLoading,
    refetch: refetchTeachers,
  } = Api.teacher.findMany.useQuery({ include: { user: true } })
  const {
    data: staff,
    isLoading: staffLoading,
    refetch: refetchStaff,
  } = Api.user.findMany.useQuery({ where: { status: 'staff' } })

  const { mutateAsync: createTeacher } = Api.teacher.create.useMutation()
  const { mutateAsync: updateTeacher } = Api.teacher.update.useMutation()
  const { mutateAsync: deleteTeacher } = Api.teacher.delete.useMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingTeacher, setEditingTeacher] =
    useState<Prisma.TeacherGetPayload<{ include: { user: true } }> | null>(null)

  const handleCreateOrUpdate = async (values: any) => {
    try {
      if (editingTeacher) {
        await updateTeacher({ where: { id: editingTeacher.id }, data: values })
        enqueueSnackbar('Teacher updated successfully', { variant: 'success' })
      } else {
        await createTeacher({ data: values })
        enqueueSnackbar('Teacher created successfully', { variant: 'success' })
      }
      refetchTeachers()
      setIsModalVisible(false)
      setEditingTeacher(null)
    } catch (error) {
      enqueueSnackbar('Error saving teacher', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteTeacher({ where: { id } })
      enqueueSnackbar('Teacher deleted successfully', { variant: 'success' })
      refetchTeachers()
    } catch (error) {
      enqueueSnackbar('Error deleting teacher', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: ['user', 'name'],
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: ['user', 'email'],
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (
        _: any,
        record: Prisma.TeacherGetPayload<{ include: { user: true } }>,
      ) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditingTeacher(record)
              setIsModalVisible(true)
            }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Teacher and Staff Management</Title>
      <Text>
        Manage teacher and staff profiles, attendance, tasks, payroll,
        schedules, performance, training, and more.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalVisible(true)}
        style={{ margin: '20px 0' }}
      >
        Add Teacher
      </Button>
      <Table
        loading={teachersLoading || staffLoading}
        dataSource={teachers}
        columns={columns}
        rowKey="id"
      />
      <Modal
        title={editingTeacher ? 'Edit Teacher' : 'Add Teacher'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
          setEditingTeacher(null)
        }}
        footer={null}
      >
        <Form
          initialValues={
            editingTeacher
              ? { ...editingTeacher, userId: editingTeacher.user.id }
              : {}
          }
          onFinish={handleCreateOrUpdate}
        >
          <Form.Item name="userId" label="User" rules={[{ required: true }]}>
            <Select placeholder="Select a user">
              {staff?.map((user: Prisma.User) => (
                <Option key={user.id} value={user.id}>
                  {user.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="subjectSpecialization"
            label="Subject Specialization"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="payrollDetails"
            label="Payroll Details"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingTeacher ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
