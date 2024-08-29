'use client'

import { Typography, Row, Col, Card, Button, Spin } from 'antd'
import {
  UserAddOutlined,
  IdcardOutlined,
  BookOutlined,
  SettingOutlined,
  NotificationOutlined,
  TeamOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function StudentManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: students,
    isLoading: isLoadingStudents,
    refetch: refetchStudents,
  } = Api.student.findMany.useQuery({
    include: { user: true, organization: true },
  })

  if (isLoadingStudents) {
    return <Spin />
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Student Management</Title>
      <Paragraph>
        Manage student registrations, attendance, ID cards, grades, assignments,
        announcements, and more.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Register a New Student"
            actions={[
              <Button
                type="primary"
                icon={<UserAddOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/register`,
                  )
                }
              >
                Register
              </Button>,
            ]}
          >
            <Text>As an admin, you can register a new student.</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Track Student Attendance"
            actions={[
              <Button
                type="primary"
                icon={<IdcardOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/attendance`,
                  )
                }
              >
                Track
              </Button>,
            ]}
          >
            <Text>As an admin, you can track student attendance.</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Generate Student ID Cards"
            actions={[
              <Button
                type="primary"
                icon={<IdcardOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/id-cards`,
                  )
                }
              >
                Generate
              </Button>,
            ]}
          >
            <Text>As an admin, you can generate student ID cards.</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Student Grades, Assignments, and Announcements"
            actions={[
              <Button
                type="primary"
                icon={<BookOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/grades`,
                  )
                }
              >
                Access
              </Button>,
            ]}
          >
            <Text>
              As a student, you can access your grades, assignments, and
              announcements.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Academic Probation Policies"
            actions={[
              <Button
                type="primary"
                icon={<SettingOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/probation`,
                  )
                }
              >
                Implement
              </Button>,
            ]}
          >
            <Text>
              As an admin, you can implement academic probation policies for
              students who fall below a certain performance threshold.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Communication with Parents"
            actions={[
              <Button
                type="primary"
                icon={<NotificationOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/communication`,
                  )
                }
              >
                Facilitate
              </Button>,
            ]}
          >
            <Text>
              As an admin, you can facilitate communication with parents by
              sending automated updates and reports on student progress.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Track Extracurricular Activities"
            actions={[
              <Button
                type="primary"
                icon={<TeamOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/extracurricular`,
                  )
                }
              >
                Track
              </Button>,
            ]}
          >
            <Text>
              As an admin, you can track and manage extracurricular activities
              and student participation.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Access Digital Resources"
            actions={[
              <Button
                type="primary"
                icon={<BookOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/resources`,
                  )
                }
              >
                Access
              </Button>,
            ]}
          >
            <Text>
              As a student, you can access a library of digital resources,
              including e-books and research materials.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Configure Data Privacy Settings"
            actions={[
              <Button
                type="primary"
                icon={<SafetyOutlined />}
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/students/privacy`,
                  )
                }
              >
                Configure
              </Button>,
            ]}
          >
            <Text>
              As an admin, you can configure data privacy settings to ensure
              compliance with regulations and protect sensitive student
              information.
            </Text>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
