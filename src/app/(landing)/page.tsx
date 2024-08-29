'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  TeamOutlined,
  BookOutlined,
  CalendarOutlined,
  DollarOutlined,
  BellOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Comprehensive Student Management',
      description:
        'Effortlessly manage student registration, attendance, and academic records all in one place.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Efficient Teacher & Staff Management',
      description:
        'Streamline teacher and staff schedules, assignments, and communication.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Organized Class & Course Management',
      description:
        'Create and manage timetables, courses, and class schedules with ease.',
      icon: <BookOutlined />,
    },
    {
      heading: 'Seamless Examination Management',
      description: 'Automate exam scheduling, grading, and result publication.',
      icon: <CalendarOutlined />,
    },
    {
      heading: 'Financial & Fee Management',
      description:
        'Simplify fee collection, financial tracking, and reporting.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Enhanced Communication & Notifications',
      description:
        'Keep parents and guardians informed with real-time updates and notifications.',
      icon: <BellOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'School Administrator',
      content:
        'This system has revolutionized our administrative processes, saving us countless hours each week.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Teacher',
      content:
        'I can now focus more on teaching and less on paperwork. It’s a game-changer!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'Parent',
      content:
        'Staying informed about my child’s progress has never been easier. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Student',
      content:
        'Accessing my academic information and resources is so convenient now.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Chris Lee',
      designation: 'Teacher',
      content:
        'The streamlined processes have significantly reduced my administrative workload.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sarah Wilson',
      designation: 'Parent',
      content:
        'I love how I can stay updated on school events and my child’s performance.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features for small institutions.',
      monthly: 9,
      yearly: 69,
      features: ['Student Management', 'Teacher Management'],
    },
    {
      title: 'Pro',
      description: 'Advanced features for growing institutions.',
      monthly: 29,
      yearly: 249,
      features: [
        'All Basic Features',
        'Examination Management',
        'Financial Management',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Comprehensive features for large institutions.',
      monthly: 49,
      yearly: 399,
      features: ['All Pro Features', 'Library Management', 'Event Management'],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the system help in managing students?',
      answer:
        'The system allows for easy registration, attendance tracking, and academic record management.',
    },
    {
      question: 'Can teachers communicate with parents through the system?',
      answer:
        'Yes, the system includes features for real-time communication and notifications.',
    },
    {
      question: 'Is the system secure?',
      answer:
        'Absolutely, we prioritize data security and ensure all information is protected.',
    },
    {
      question: 'What kind of support is available?',
      answer:
        'We offer 24/7 customer support to assist with any issues or questions.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account and set up your institution’s profile.',
    },
    {
      heading: 'Customize',
      description:
        'Tailor the system to fit your institution’s specific needs.',
    },
    {
      heading: 'Manage',
      description: 'Effortlessly handle administrative and academic tasks.',
    },
    {
      heading: 'Engage',
      description:
        'Improve communication and engagement with parents and students.',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Overwhelming Administrative Tasks',
    },
    {
      emoji: '📉',
      title: 'Inefficient Processes',
    },
    {
      emoji: '📚',
      title: 'Time-Consuming Paperwork',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Transform Your School Management"
        subtitle="Streamline administrative tasks and focus on what truly matters - education."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/holBBi-schoolmanagement-BUHK"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy institutions"
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title="Trusted by Leading Institutions"
      />
      <LandingPainPoints title="The Struggle is Real" painPoints={painPoints} />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Educational Goals"
        subtitle="Our system provides all the tools you need to manage your institution efficiently."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="Hear from those who have transformed their institutions with our system."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Affordable Plans for Every Institution"
        subtitle="Choose a plan that fits your needs and start transforming your school today."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We’ve got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your School?"
        subtitle="Join the hundreds of institutions that trust our system."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
