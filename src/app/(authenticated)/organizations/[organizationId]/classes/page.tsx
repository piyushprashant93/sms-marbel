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
  Row,
  Col,
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

export default function ClassandCourseManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // State management
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedClass, setSelectedClass] =
    useState<Prisma.ClassDataGetPayload<{ include: { courses: true } }> | null>(
      null,
    )
  const [form] = Form.useForm()

  // Fetching data
  const {
    data: classes,
    isLoading: isLoadingClasses,
    refetch: refetchClasses,
  } = Api.classData.findMany.useQuery({
    where: { organizationId: organization?.id },
    include: { courses: true },
  })

  const { mutateAsync: createClass } = Api.classData.create.useMutation()
  const { mutateAsync: updateClass } = Api.classData.update.useMutation()
  const { mutateAsync: deleteClass } = Api.classData.delete.useMutation()

  // Handlers
  const handleCreateOrUpdateClass = async (values: any) => {
    try {
      if (selectedClass) {
        await updateClass({ where: { id: selectedClass.id }, data: values })
        enqueueSnackbar('Class updated successfully', { variant: 'success' })
      } else {
        await createClass({
          data: { ...values, organizationId: organization?.id },
        })
        enqueueSnackbar('Class created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      refetchClasses()
    } catch (error) {
      enqueueSnackbar('Error while saving class', { variant: 'error' })
    }
  }

  const handleDeleteClass = async (id: string) => {
    try {
      await deleteClass({ where: { id } })
      enqueueSnackbar('Class deleted successfully', { variant: 'success' })
      refetchClasses()
    } catch (error) {
      enqueueSnackbar('Error while deleting class', { variant: 'error' })
    }
  }

  const showModal = (
    classData: Prisma.ClassDataGetPayload<{
      include: { courses: true }
    }> | null = null,
  ) => {
    setSelectedClass(classData)
    setIsModalVisible(true)
    if (classData) {
      form.setFieldsValue(classData)
    } else {
      form.resetFields()
    }
  }

  const columns = [
    {
      title: 'Class Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Timetable',
      dataIndex: 'timetable',
      key: 'timetable',
    },
    {
      title: 'Courses',
      dataIndex: 'courses',
      key: 'courses',
      render: (courses: Prisma.Course[]) =>
        courses?.map(course => course.name).join(', '),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (
        text: any,
        record: Prisma.ClassDataGetPayload<{ include: { courses: true } }>,
      ) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteClass(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Class and Course Management</Title>
      <Text>Manage your classes and courses efficiently.</Text>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showModal()}
          >
            Create Class
          </Button>
          <Table
            dataSource={classes}
            columns={columns}
            rowKey="id"
            loading={isLoadingClasses}
            style={{ marginTop: 20 }}
          />
        </Col>
      </Row>
      <Modal
        title={selectedClass ? 'Edit Class' : 'Create Class'}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateOrUpdateClass}
        >
          <Form.Item
            name="name"
            label="Class Name"
            rules={[
              { required: true, message: 'Please input the class name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="timetable"
            label="Timetable"
            rules={[{ required: true, message: 'Please input the timetable!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {selectedClass ? 'Update Class' : 'Create Class'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
