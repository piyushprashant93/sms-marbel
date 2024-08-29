'use client'

import { Typography, Row, Col, Card, Space } from 'antd'
import { useEffect, useState } from 'react'
import {
  ScheduleOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  SafetyOutlined,
  SettingOutlined,
  UserOutlined,
  BarChartOutlined,
  CalendarOutlined,
  FileSearchOutlined,
  FileDoneOutlined,
  TeamOutlined,
  HistoryOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExaminationManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [exams, setExams] = useState<Api.Exam[]>([])
  const {
    data: examsData,
    isLoading: examsLoading,
    refetch: refetchExams,
  } = Api.exam.findMany.useQuery({ include: { course: true } })

  useEffect(() => {
    if (examsData) {
      setExams(examsData)
    }
  }, [examsData])

  const isAdmin = checkOrganizationRole('admin')
  const isTeacher = checkOrganizationRole('teacher')
  const isStudent = checkOrganizationRole('student')

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Examination Management</Title>
      <Paragraph>
        Manage and schedule exams, assessments, and related activities.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {isAdmin && (
          <>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/schedule`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <ScheduleOutlined style={{ fontSize: '2rem' }} />
                  <Text>Schedule Exams</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/policies`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <SafetyOutlined style={{ fontSize: '2rem' }} />
                  <Text>Manage Exam Policies</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/proctors`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <UserOutlined style={{ fontSize: '2rem' }} />
                  <Text>Assign Exam Proctors</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/schedules`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <CalendarOutlined style={{ fontSize: '2rem' }} />
                  <Text>Generate Exam Schedules</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/materials`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <FileTextOutlined style={{ fontSize: '2rem' }} />
                  <Text>Manage Exam Materials</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/analysis`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <BarChartOutlined style={{ fontSize: '2rem' }} />
                  <Text>Analyze Exam Results</Text>
                </Space>
              </Card>
            </Col>
          </>
        )}
        {isTeacher && (
          <>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/create`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <SettingOutlined style={{ fontSize: '2rem' }} />
                  <Text>Create and Manage Assessments</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/grade`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <CheckCircleOutlined style={{ fontSize: '2rem' }} />
                  <Text>Grade Exams and Generate Report Cards</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/feedback`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <FileDoneOutlined style={{ fontSize: '2rem' }} />
                  <Text>Provide Feedback on Exam Performance</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/attendance`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <TeamOutlined style={{ fontSize: '2rem' }} />
                  <Text>Track Student Attendance</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/exams/review`,
                  )
                }
              >
                <Space direction="vertical" align="center">
                  <FileSearchOutlined style={{ fontSize: '2rem' }} />
                  <Text>Review Previous Exam Questions</Text>
                </Space>
              </Card>
            </Col>
          </>
        )}
        {isStudent && (
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              onClick={() =>
                router.push(
                  `/organizations/${params.organizationId}/exams/results`,
                )
              }
            >
              <Space direction="vertical" align="center">
                <HistoryOutlined style={{ fontSize: '2rem' }} />
                <Text>View Exam Schedules and Results</Text>
              </Space>
            </Card>
          </Col>
        )}
      </Row>
    </PageLayout>
  )
}
