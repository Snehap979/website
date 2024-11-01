import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import saral from '/public/saral.png'
import cox from '/public/cox.png'
import gynger from '/public/gynger.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Irvine,USA",
    description:`● Developed a VerticalNavBar component for improved site navigation and Implemented interactive tab highlighting upon
user selection using React JS.
● Created test cases in Storybook covering scenarios with 0, 3, and 5 menu options, setting default selections and validating
function calls on tab clicks.`,
    date: "September 2024 - Present",
    organization: "EnCiv",
  },
  {
    title: "Graduated, MS in COMPUTER SCIENCE",
    location: "Fullerton,California",
    description:
      "I graduated after doing Masters in Computer Science.Speacilzed in AI, I immediately found a job as a software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    organization: "CALIFORNIA STATE UNIVERSITY FULLERTON",
  },
  {
    title: "Software Development Engineer",
    location: "Bangalore,India",
    description:`● Led the module on the Gynger application, a loyalty points app with over 50,000 downloads and a 3.9+ rating on Play
Store for rack stock-keeping units for retailers and inventory using Node.js.
● Implemented a feature to enhance bug-fixing processes post-production deployment with automated testing scripts,
resulting in a 25% reduction in bug resolution time and a 20% increase in overall system stability.`,
    organization: "Accenture",
  },
  
  {
    title: "Application Development Analyst",
    location: "Bangalore,India",
    description:`● Implemented a robust notification system that notifies more than 80 million COX customers during their billing cycle
    using AWS SNS and integrated with the ADOBE Channel.
    ● Directed a cross-functional team of 10 developers, delivering project milestones 20% ahead of schedule and
    enhancing overall project efficiency
    ● Utilized AWS Lambda to create serverless billing functions for backend processing achieving 99.9% uptime and reduced
    operational costs by 20% by eliminating the need for server management and optimizing workflows.
    ● Increased system capacity by 20% with AWS SQS for traffic management and configured AWS CloudWatch for
    real-time performance monitoring, saving over 3,000 development hours by reducing downtime and maintenance needs.`,
    date: "Feb 2021 - May 2022",
    organization: "Accenture",
  },
  {
    title: "Software Developer",
    location: "Bangalore,India",
    description:
      `● Designed and launched the Saral mobile app in React Native, achieving over 10,000 downloads and a 4.8/5 user
rating, reflecting high user engagement and satisfaction.
● Architected and led the development of a full-stack PWA for order, product, and employee management using React,
Node.js, Express.js, MongoDB, and AWS.
● Spearheaded and managed a secure, modular microservices system for management and built SmartFoodSafe,a full-stack,
real-time farm traceability app using React, Node.js, MongoDB, and AWS.`,
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
    organization: "Exathought",
  },
  {
    title: "Graduated, BE in COMPUTER SCIENCE",
    location: "Bangalore,India",
    description:
      "I graduated after doing Bachelors in Computer Science. I immediately found a job as a software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    organization: "RNS INSITUTE OF TECHNOLOGY",
  },
  
  
  
] as const;

export const projectsData = [
  {
    title: "SARAL APP",
    description:
    `Developed a sales management,sales order and invoice generation mobile app having 10,000+ downloads and 3.5+ rating on app stores`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: saral,
     projectUrl:"https://play.google.com/store/apps/details?id=com.saralaccountsmobile&pcampaignid=web_share"
  },
  {
    title: "COX NOTIFICATION",
    description:
      "Architected and deployed a high-scale notification system COX customers earning the Extra Mile Award.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: cox,
    projectUrl:"https://play.google.com/store/apps/details?id=com.saralaccountsmobile&pcampaignid=web_share"

   
  },
  {
    title: "GYNGER",
    description:
      "Collaborated with the team to optimize existing code, resulting in 50,000+ downloads and a 3.9+ rating",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: gynger,
    projectUrl:"https://play.google.com/store/apps/details?id=com.saralaccountsmobile&pcampaignid=web_share"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "DynamoDB",
  "Material UI",
  "Docker",
  "Jenkins",
  "CI CD",
  "AWS Lambda",
  "AWS SNS",
  "AWS SQS",
  "AWS S3",
  "IAM",
  "EC2",
  "SES",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
