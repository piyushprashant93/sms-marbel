'use client'

import { Typography, Row, Col, Card, Button, Spin } from 'antd'
import {
  DollarCircleOutlined,
  FileTextOutlined,
  NotificationOutlined,
  SettingOutlined,
  BookOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function FeeandFinancialManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: fees, isLoading: isLoadingFees } = Api.fee.findMany.useQuery({
    where: { student: { organizationId: params.organizationId } },
  })
  const { data: exams, isLoading: isLoadingExams } = Api.exam.findMany.useQuery(
    { where: { course: { class: { organizationId: params.organizationId } } } },
  )

  const isAdmin = checkOrganizationRole('admin')
  const isTeacher = checkOrganizationRole('teacher')

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Fee and Financial Management</Title>
      <Paragraph>
        Manage fee collection, generate financial reports, and handle
        exam-related tasks.
      </Paragraph>
      <Spin spinning={isLoadingFees || isLoadingExams}>
        <Row gutter={[16, 16]} justify="center">
          {isAdmin && (
            <>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Manage Fee Collection"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<DollarCircleOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/finance/fees`,
                        )
                      }
                    >
                      Manage
                    </Button>,
                  ]}
                >
                  <Text>As an admin, you can manage fee collection.</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Generate Financial Reports"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<FileTextOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/finance/reports`,
                        )
                      }
                    >
                      Generate
                    </Button>,
                  ]}
                >
                  <Text>As an admin, you can generate financial reports.</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Define Exam Formats and Types"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/formats`,
                        )
                      }
                    >
                      Define
                    </Button>,
                  ]}
                >
                  <Text>
                    As an admin, you can define exam formats and types.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Manage Exam Locations"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/locations`,
                        )
                      }
                    >
                      Manage
                    </Button>,
                  ]}
                >
                  <Text>As an admin, you can manage exam locations.</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Track and Manage Exam Materials"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<BookOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/materials`,
                        )
                      }
                    >
                      Track
                    </Button>,
                  ]}
                >
                  <Text>
                    As an admin, you can track and manage exam materials.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Set Up Exam Notifications"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<NotificationOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/notifications`,
                        )
                      }
                    >
                      Set Up
                    </Button>,
                  ]}
                >
                  <Text>
                    As an admin, you can set up notifications for upcoming
                    exams.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Establish and Enforce Exam Policies"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/policies`,
                        )
                      }
                    >
                      Establish
                    </Button>,
                  ]}
                >
                  <Text>
                    As an admin, you can establish and enforce exam policies.
                  </Text>
                </Card>
              </Col>
            </>
          )}
          {isTeacher && (
            <>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Set Time Limits for Exams"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/timelimits`,
                        )
                      }
                    >
                      Set
                    </Button>,
                  ]}
                >
                  <Text>
                    As a teacher, you can set time limits for each exam.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Add or Modify Exam Questions"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/questions`,
                        )
                      }
                    >
                      Add/Modify
                    </Button>,
                  ]}
                >
                  <Text>
                    As a teacher, you can add or modify exam questions and
                    answer choices.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Generate Student Performance Reports"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<BarChartOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/reports`,
                        )
                      }
                    >
                      Generate
                    </Button>,
                  ]}
                >
                  <Text>
                    As a teacher, you can generate detailed reports on student
                    performance per exam.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Create and Manage Grading Rubrics"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/rubrics`,
                        )
                      }
                    >
                      Create/Manage
                    </Button>,
                  ]}
                >
                  <Text>
                    As a teacher, you can create and manage rubrics for grading.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="Review and Adjust Grades"
                  bordered={false}
                  actions={[
                    <Button
                      type="primary"
                      icon={<SettingOutlined />}
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/exams/grades`,
                        )
                      }
                    >
                      Review/Adjust
                    </Button>,
                  ]}
                >
                  <Text>
                    As a teacher, you can review and adjust grades after
                    feedback sessions.
                  </Text>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Spin>
    </PageLayout>
  )
}
