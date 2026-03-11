// images you can edit it
import { LuClock3 } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";

import ModernHistory from "../assets/Modern History.png";
import Advanced from "../assets/Advanced Physics.png";
import Quantum from "../assets/Quantum Mechanics.png";
import Calculus from "../assets/Calculus.png";
import ComputerScience from "../assets/Computer Science.png";
import I1 from "../assets/i1.png";
import I2 from "../assets/i2.png";
import I3 from "../assets/i3.png";
import I4 from "../assets/i4.png";
import I5 from "../assets/i5.png";
import I6 from "../assets/i6.png";
import I7 from "../assets/i7.png";
import I8 from "../assets/i8.png";

export const navLinks = [
  { name: "Courses", path: "#courses" },
  { name: "Mentors", path: "#mentors" },
  { name: "Pricing", path: "#pricing" },
  { name: "About", path: "#about" },
];

export const heroData = {
  title: "Master Your Future with Expert-Led Courses",
  description:
    "Join 10k+ learners gaining real-world skills from industry leaders.",
  primaryBtn: "Get Started Now",
  secondaryBtn: "View All Courses",
};

export const statsData = [
  { number: "10K+", label: "Active Students" },
  { number: "500+", label: "Expert Mentors" },
  { number: "300+", label: "Premium Courses" },
];

export const featuresData = [
  {
    icon: LuClock3,
    title: "Learn at your own pace",
    description: "Access courses anytime that fit your schedule.",
  },
  {
    icon: LuBadgeCheck,
    title: "Recognized certifications",
    description: "Earn certificates recognized by top companies.",
  },
  {
    icon: LuUsers,
    title: "Interactive live sessions",
    description: "Join live workshops, Q&A sessions and projects.",
  },
];

export const coursesData = [
  {
    id: 1,
    title: "Digital Marketing Strategy",
    instructor: "James Wilson",
    instructorImage: "/images/instructor1.png",
    price: "$49.99",
    modules: 10,
    rating: 4.7,
    reviews: "3.4k",
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    instructor: "Sarah Jenkins",
    instructorImage: "/images/instructor2.png",
    price: "$89.99",
    modules: 12,
    rating: 4.8,
    reviews: "2.1k",
  },
  {
    id: 3,
    title: "UI/UX Design Essentials",
    instructor: "Marcus Yu",
    instructorImage: "/images/instructor3.png",
    price: "$59.99",
    modules: 8,
    rating: 4.6,
    reviews: "1.8k",
  },
  {
    id: 4,
    title: "Data Science Bootcamp",
    instructor: "Dr. Elena Rossi",
    instructorImage: "/images/instructor4.png",
    price: "$129.99",
    modules: 15,
    rating: 4.9,
    reviews: "5.2k",
  },
];

export const courses = [
  {
    id: 1,
    grade: "GRADE 11",
    subject: "Physics",
    status: "PUBLISHED",
    title: "Advanced Physics & Thermodynamics",
    description:
      "Deep dive into particle dynamics, thermal systems, and classical physics principles.",
    students: 145,
    units: 12,
    extraStudents: 142,
    image: Advanced,
    instructors: [
      { name: "Instructor 1", image: I1 },
      { name: "Instructor 2", image: I2 },
      { name: "Instructor 3", image: I3 },
    ],
    analytics: true,
  },
  {
    id: 2,
    grade: "GRADE 11",
    subject: "History",
    status: "PUBLISHED",
    title: "Modern World History: 1945 - Present",
    description:
      "Exploring global political shifts, economic trends, and cultural transformations.",
    students: 92,
    units: 8,
    extraStudents: 89,
    image: ModernHistory,
    instructors: [
      { name: "Instructor 4", image: I4 },
      { name: "Instructor 5", image: I5 },
    ],
    analytics: true,
  },
  {
    id: 3,
    grade: "GRADE 11",
    subject: "Physics",
    status: "DRAFT",
    title: "Introduction to Quantum Mechanics",
    description:
      "Initial draft for elective physics module covering wave-particle duality.",
    students: 80,
    units: 0,
    lastEdited: "2 days ago",
    image: Quantum,
    analytics: false,
  },
  {
    id: 4,
    grade: "GRADE 11",
    subject: "Mathematics",
    status: "UPDATED",
    extraBadge: "NEW",
    title: "Integrals & Differential Calculus",
    description:
      "Mastering the fundamentals of calculus, including limits, derivatives, and integrals.",
    students: 868,
    units: 10,
    extraStudents: 118,
    image: Calculus,
    instructors: [
      { name: "Instructor 6", image: I6 },
      { name: "Instructor 7", image: I7 },
    ],
    analytics: true,
  },
  {
    id: 5,
    grade: "GRADE 11",
    subject: "Computer Science",
    status: "PUBLISHED",
    title: "Algorithms & Data Structures",
    description:
      "A foundational course on computational logic, sorting, and data organization.",
    students: 120,
    units: 15,
    extraStudents: 67,
    image: ComputerScience,
    instructors: [{ name: "Instructor 8", image: I8 }],
    analytics: true,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Junior UI Designer",
    review: "The UI/UX course completely changed my career path.",
  },
  {
    id: 2,
    name: "David Miller",
    role: "Data Analyst",
    review: "Data Science Bootcamp was challenging but rewarding.",
  },
];

export const ctaData = {
  title: "Ready to transform your career today?",
  description:
    "Join thousands of learners and start building your skills today.",
};

export const footerInfo = {
  description:
    "Empowering learners worldwide with accessible, high-quality, and career-focused online education from industry experts.",
};

export const footerExploreLinks = [
  "Design Courses",
  "Development",
  "Marketing",
  "Business Strategy",
  "Data Science",
];

export const footerCompanyLinks = [
  "About Us",
  "Our Mentors",
  "Careers",
  "Success Stories",
  "Privacy Policy",
];

export const footerContact = {
  phone: "+1 (555) 000-1234",
  email: "support@learnnova.com",
};

export const footerCopyright = {
  text: "© 2024 EduMaster Inc. All rights reserved.",
  links: ["Terms of Service", "Cookie Settings"],
};
