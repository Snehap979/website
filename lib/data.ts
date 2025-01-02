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
import acc from '/public/acc.png'
import amazon from '/public/amazon.png'
import csuf from '/public/csuf.png'
import enciv from '/public/enciv.png'
import exa from '/public/exa.png'
import o4s from '/public/o4s.jpeg'
import rns from '/public/rns.png'

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
    description:`● Engineered a reusable VerticalNavBar component, improving navigation efficiency by 40% and streamlining transitions across
100+ application screens.
● Orchestrated comprehensive test coverage achieving 95% through implementation of sophisticated Storybook testing protocols.
● Streamlined API integration processes using Axios for efficient data retrieval, resulting in a measurable decrease of over 50% in
server response times during peak traffic periods while maintaining robust performance across all endpoints.`,
    date: "September 2024 - Present",
    organization: "EnCiv",
    companyLogo:enciv
  },
  {
    title: "Software Developer",
    location: "India",
    description:`● Architected and implemented a real-time communication platform leveraging AWS Lambda and API Gateway,enabling instant
message delivery with latency under 100ms with She Builds.
● Integrated DynamoDB for message storage and user management, enabling seamless handling of over 1000 messages per
minute while automating scaling processes to accommodate traffic spikes during peak usage times.`,
    date: "September 2022 - December 2022",
    organization: "Amazon",
    companyLogo:amazon
  },
  {
    title: "Graduated, MS in COMPUTER SCIENCE",
    location: "Fullerton,California",
    description:
      "●I graduated after doing Masters in Computer Science.Speacilzed in AI, I immediately found a job as a software developer.● Graduate assistant : Facilitated learning in advanced Computer Science topics such as algorithms, data structures, and software engineering by leading discussions, review sessions, and hands-on programming labs.● Vice President of the International Friendship Club",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    organization: "CALIFORNIA STATE UNIVERSITY FULLERTON",
    companyLogo:csuf
  },
  {
    title: "Software Development Engineer",
    location: "Bangalore,India",
    description:`● Led the module on the Gynger application, a loyalty points app with over 50,000 downloads and a 3.9+ rating on Play
Store for rack stock-keeping units for retailers and inventory using Node.js.
● Implemented a feature to enhance bug-fixing processes post-production deployment with automated testing scripts,
resulting in a 25% reduction in bug resolution time and a 20% increase in overall system stability.`,
    organization: "O4S",
    date: "May 2022 - July 2022",
    companyLogo:o4s
  },
  
  {
    title: "Application Development Analyst",
    location: "Bangalore,India",
    description:`● Designed and deployed a billing notification system using AWS SNS, reaching 80M+ users with 99.9% uptime.
● Led a team of 10 developers, delivering milestones 20% ahead of schedule and reducing operational costs by 20% with AWS
Lambda.
● Engineered serverless functions with AWS Lambda, processing notifications from AWS SNS using Node.js and React.js,
achieving 99.9% uptime.
● Awarded with the Extra Mile Award for being the top performer.`,
    date: "Feb 2021 - May 2022",
    organization: "Accenture",
    companyLogo:acc
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
    companyLogo:exa
  },
  {
    title: "Graduated, BE in COMPUTER SCIENCE",
    location: "Bangalore,India",
    description:
      "● I graduated after doing Bachelors in Computer Science. I immediately found a job as a software developer.● Cultural head of Aikya which was the wing of the computer science department",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    organization: "RNS INSITUTE OF TECHNOLOGY",
    companyLogo:rns
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
