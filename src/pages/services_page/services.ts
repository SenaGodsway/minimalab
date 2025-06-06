import { PenTool, LucideIcon, Cloud, Bot, Chrome, Database, Shield, Smartphone } from 'lucide-react';

// Define the service interface
interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

// Define the services object type
type ServicesObject = {
  [key: string]: Service;
}

// Or use a more specific type with exact keys
type ServiceKeys = 'ai-apps' | 'web-apps' | 'uiux-design' | 'cloud-dev' | 'data-management' | 'software-maintainance' | 'mobile-apps-development';

type ServicesMap = {
  [K in ServiceKeys]: Service;
}

const services: ServicesMap = {
  'ai-apps': {
    id: 'ai-apps',
    title: 'Ai Apps',
    description: 'Build intelligent applications powered by artificial intelligence and machine learning to automate processes and enhance decision-making.',
    icon: Bot
  },
  'web-apps': {
    id: 'web-apps',
    title: 'Web Apps',
    description: 'Custom web application development with modern frameworks for seamless user experiences and scalable backend solutions.',
    icon: Chrome
  },
  'uiux-design': {
    id: 'uiux-design',
    title: 'UI UX Design',
    description: 'User-centered design approach creating intuitive interfaces and engaging experiences that drive user satisfaction and conversion.',
    icon: PenTool
  },
  'cloud-dev': {
    id: 'cloud-dev',
    title: 'Cloud Development',
    description: 'Cloud-native application development and migration services leveraging AWS, Azure, and GCP for scalable, resilient solutions.',
    icon: Cloud
  },
  'data-management': {
    id: 'data-management',
    title: 'Data Management',
    description: 'Comprehensive data solutions including database design, ETL processes, analytics, and business intelligence implementation.',
    icon: Database
  },
  'software-maintainance': {
    id: 'software-maintainance',
    title: 'Software Maintainance',
    description: 'Ongoing support, updates, and optimization to keep your software secure, performant, and aligned with business needs.',
    icon: Shield
  },
   'mobile-apps-development': {
    id: 'mobile-apps-development',
    title: 'Mobile Apps Development',
    description: 'Cross-platform and native mobile app development for iOS and Android with focus on performance and user engagement.',
    icon: Smartphone
  }
} as const;


export { services, type Service, type ServicesMap, type ServiceKeys };