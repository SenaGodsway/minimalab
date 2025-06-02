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
    description: 'I need a website design.',
    icon: Bot
  },
  'web-apps': {
    id: 'web-apps',
    title: 'Web Apps',
    description: 'I need a website built.',
    icon: Chrome
  },
  'uiux-design': {
    id: 'uiux-design',
    title: 'UI UX Design',
    description: 'I want to understand users.',
    icon: PenTool
  },
  'cloud-dev': {
    id: 'cloud-dev',
    title: 'Cloud Development',
    description: 'I want to grow my blog.',
    icon: Cloud
  },
  'data-management': {
    id: 'data-management',
    title: 'Data Management',
    description: 'Help me grow organically.',
    icon: Database
  },
  'software-maintainance': {
    id: 'software-maintainance',
    title: 'Software Maintainance',
    description: "We're here to help!",
    icon: Shield
  },
   'mobile-apps-development': {
    id: 'mobile-apps-development',
    title: 'Mobile Apps Development',
    description: "We're here to help!",
    icon: Smartphone
  }
} as const;

export { services, type Service, type ServicesMap, type ServiceKeys };