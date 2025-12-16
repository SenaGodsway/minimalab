import {
  PenTool,
  LucideIcon,
  Cloud,
  Bot,
  Chrome,
  Database,
  Shield,
  Smartphone,
} from "lucide-react";

// Define the service interface
interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | LucideIcon[];
}

type ServiceKeys =
  | "ai-apps"
  | "apps-development"
  | "uiux-design"
  | "cloud-dev"
  | "data-management"
  | "software-maintainance";

type ServicesMap = {
  [K in ServiceKeys]: Service;
};

const services: ServicesMap = {
  "ai-apps": {
    id: "ai-apps",
    title: "Ai Apps",
    description:
      "Build intelligent applications powered by artificial intelligence and machine learning to automate processes and enhance decision-making.",
    icon: Bot,
  },
  "apps-development": {
    id: "apps-development",
    title: "Web & Mobile Apps",
    description:
      "Build modern web and mobile applications (iOS/Android) with great UX, performance, and scalable backends—delivered as responsive web apps, native, or cross‑platform.",
    icon: [Chrome, Smartphone],
  },
  "uiux-design": {
    id: "uiux-design",
    title: "UI UX Design",
    description:
      "User-centered design approach creating intuitive interfaces and engaging experiences that drive user satisfaction and conversion.",
    icon: PenTool,
  },
  "cloud-dev": {
    id: "cloud-dev",
    title: "Cloud Development",
    description:
      "Cloud-native application development and migration services leveraging AWS, Azure, and GCP for scalable, resilient solutions.",
    icon: Cloud,
  },
  "data-management": {
    id: "data-management",
    title: "Data Management",
    description:
      "Comprehensive data solutions including database design, ETL processes, analytics, and business intelligence implementation.",
    icon: Database,
  },
  "software-maintainance": {
    id: "software-maintainance",
    title: "Software Maintainance",
    description:
      "Ongoing support, updates, and optimization to keep your software secure, performant, and aligned with business needs.",
    icon: Shield,
  },
} as const;

export { services, type Service, type ServicesMap, type ServiceKeys };
