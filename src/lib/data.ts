import {
  Codepen,
  Github,
  Linkedin,
  Twitter,
  Server,
  Database,
  Cloud,
  Layers,
  Container,
  GitBranch,
  Rocket,
} from 'lucide-react';
import { AwsIcon, GcpIcon, AzureIcon } from '@/components/icons';
import type { Project, Skill } from '@/lib/types';

export const skills: Skill[] = [
  { name: 'AWS', icon: AwsIcon, level: 90 },
  { name: 'GCP', icon: GcpIcon, level: 75 },
  { name: 'Azure', icon: AzureIcon, level: 60 },
  { name: 'Docker', icon: Container, level: 85 },
  { name: 'Kubernetes', icon: Layers, level: 80 },
  { name: 'Terraform', icon: Cloud, level: 90 },
  { name: 'CI/CD', icon: Rocket, level: 85 },
  { name: 'Git', icon: GitBranch, level: 95 },
  { name: 'Databases', icon: Database, level: 80 },
  { name: 'Serverless', icon: Server, level: 85 },
];

export const projects: Project[] = [
  {
    slug: 'serverless-lead-capture-aws',
    title: 'Build a Serverless Lead Capture on AWS',
    shortDescription: 'An automated, cost-effective system to capture and process leads from a web form.',
    description:
      'This project demonstrates a fully serverless architecture for capturing lead information from a static website. When a user submits a form, the data is sent to an API Gateway endpoint, which triggers a Lambda function. The function processes the data and stores it in a DynamoDB table, providing a scalable and highly available solution without managing any servers.',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'IAM', 'Python'],
    imageId: 'project-lead-capture',
    github_url: 'https://github.com/sanvedlatkar',
  },
  {
    slug: 'iot-printer-monitoring-aws',
    title: 'Real-Time IoT Printer Monitoring on AWS',
    shortDescription: 'A real-time dashboard to monitor a fleet of IoT-enabled printers.',
    description:
      'Developed an end-to-end IoT solution for monitoring printer status, ink levels, and usage in real-time. Data from printers is sent to AWS IoT Core. An IoT rule then processes and forwards the data to a Lambda function which stores it in a time-series database. A web-based dashboard visualizes the data, enabling predictive maintenance and efficient supply management.',
    technologies: ['AWS IoT Core', 'AWS Lambda', 'Amazon Timestream', 'Grafana', 'MQTT'],
    imageId: 'project-iot-printer',
    github_url: 'https://github.com/sanvedlatkar',
  },
  {
    slug: 'wordpress-two-tier-aws',
    title: 'Deploying a Two-Tier WordPress Application',
    shortDescription: 'A scalable and resilient WordPress deployment on AWS.',
    description:
      'Engineered a classic two-tier architecture to host a high-availability WordPress site. The architecture features a web tier with EC2 instances in an Auto Scaling group behind an Application Load Balancer, and a data tier using Amazon RDS for the database. This setup ensures the application is both scalable and fault-tolerant.',
    technologies: ['AWS EC2', 'Auto Scaling', 'Application Load Balancer', 'Amazon RDS', 'VPC'],
    imageId: 'project-wordpress',
    github_url: 'https://github.com/sanvedlatkar',
  },
  {
    slug: 'three-tier-webapp-aws',
    title: 'Real-World 3-Tier Web App Deployment on AWS',
    shortDescription: 'A robust and secure three-tier web application architecture.',
    description:
      'Deployed a scalable three-tier web application using best practices for security and high availability on AWS. The architecture separates the web (presentation), application (logic), and database layers into distinct subnets and security groups within a custom VPC. This modular design improves security, scalability, and manageability for a production environment.',
    technologies: ['AWS VPC', 'EC2', 'RDS', 'S3', 'Security Groups', 'Network ACLs'],
    imageId: 'project-3-tier-app',
    github_url: 'https://github.com/sanvedlatkar',
  }
];

export const socialLinks = {
  github: 'https://github.com/sanvedlatkar',
  linkedin: 'https://www.linkedin.com/in/sanvedlatkar/',
  twitter: 'https://twitter.com',
  codepen: 'https://codepen.io',
};

export const contact = {
  email: 'sanvedlatkar0@gmail.com',
  phone: '+91 9322593986',
};
