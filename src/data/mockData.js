import {
  FaBook,
  FaChalkboardTeacher,
  FaChartLine,
  FaRegCheckCircle,
  FaTachometerAlt,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { LuNotepadText, LuUserPlus } from "react-icons/lu";
import { MdDashboard, MdMailOutline, MdPayment } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { LuUserX } from "react-icons/lu";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import {
  PiClipboardText,
  PiFileText,
  PiGraduationCapThin,
  PiStudentLight,
  PiUsersThree,
} from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import { TbClipboardText } from "react-icons/tb";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Courses",
    value: 12,
    color: "primary",
  },
  {
    id: 2,
    title: "Total Students",
    value: 250,
    color: "success",
  },
  {
    id: 3,
    title: "Exams",
    value: 3,
    color: "secondary",
  },
  {
    id: 4,
    title: "Active Quizzes",
    value: 5,
    color: "danger",
  },
];

export const weeklyEngagement = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 62 },
  { day: "Thu", value: 75 },
  { day: "Fri", value: 70 },
  { day: "Sat", value: 55 },
  { day: "Sun", value: 50 },
];

export const performanceDistribution = [
  {
    label: "Excellent",
    value: 42,
    color: "#4F46E5",
  },
  {
    label: "Very Good",
    value: 25,
    color: "#2563EB",
  },
  {
    label: "Good",
    value: 23,
    color: "#F59E0B",
  },
  {
    label: "Needs Improvement",
    value: 10,
    color: "#EF4444",
  },
];

export const courseCompletionRates = [
  {
    course: "Advanced Mathematics",
    completion: 87,
  },
  {
    course: "Physics 101",
    completion: 72,
  },
  {
    course: "Chemistry Basics",
    completion: 64,
  },
  {
    course: "Biology Lab",
    completion: 91,
  },
];

export const upcomingSessions = [
  {
    id: 1,
    course: "Operating Systems",
    date: "12-4-2026",
    time: "12 AM",
    status: "in 30 min",
  },
  {
    id: 2,
    course: "SQL",
    date: "12-4-2026",
    time: "2 AM",
    status: "in 1 hour",
  },
  {
    id: 3,
    course: "Networks",
    date: "12-4-2026",
    time: "4 AM",
    status: "in 2 days",
  },
];

export const recentActivities = [
  {
    id: 1,
    type: "submission",
    message: "New submission for Midterm Exam",
    time: "5 minutes ago",
    color: "#4A3ADF",
  },
  {
    id: 2,
    type: "grade",
    message: "Grade approved by Admin",
    time: "2 hours ago",
    color: "#3FD978",
  },
  {
    id: 3,
    type: "live-session",
    message: "Student joined live session",
    time: "20 minutes ago",
    color: "#F1A628",
  },
];

export const profileData = {
  name: "Dr. Sarah Johnson",
  department: "Computer Science Department",
  joined: "Jan 2022",

  stats: {
    totalCourses: 12,
    activeStudents: 1420,
    rating: 4.9,
  },

  personalInfo: {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.j@university.edu",
    phone: "+1 (555) 000-0000",
    gender: "Female",
    bio: "Passionate educator with 10+ years experience.",
  },

  credentials: [
    {
      title: "Ph.D. in Computer Science",
      university: "Stanford University",
    },
    {
      title: "M.S. Software Engineering",
      university: "MIT",
    },
  ],
};

export const dashboardCourses = [
  {
    id: 1,
    title: "Advanced Physics & Thermodynamics",
    description:
      "Deep dive into particle dynamics, thermal systems, and classical mechanics.",
    grade: "Grade 11",
    status: "Published",
    students: 145,
    units: 12,
    image: "/images/course-1.jpg",
  },

  {
    id: 2,
    title: "Modern World History: 1945 - Present",
    description:
      "Exploring global political shifts, economic trends, and cultural developments.",
    grade: "Grade 10",
    status: "Published",
    students: 92,
    units: 8,
    image: "/images/course-2.jpg",
  },

  {
    id: 3,
    title: "Introduction to Quantum Mechanics",
    description:
      "Initial draft for elective physics module covering wave-particle duality.",
    grade: "Grade 11",
    status: "Draft",
    students: 0,
    units: 0,
    image: "/images/course-3.jpg",
  },

  {
    id: 4,
    title: "Integrals & Differential Calculus",
    description:
      "Mastering the fundamentals of calculus, including limits and derivatives.",
    grade: "Grade 10",
    status: "Published",
    students: 120,
    units: 15,
    image: "/images/course-4.jpg",
  },

  {
    id: 5,
    title: "Algorithms & Data Structures",
    description:
      "A foundational course on computational logic, sorting and searching.",
    grade: "Grade 11",
    status: "Updated",
    students: 68,
    units: 10,
    image: "/images/course-5.jpg",
  },
];
export const courseStages = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export const courseSubjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "History",
];

export const courseLanguages = [
  "English (US)",
  "English (UK)",
  "Arabic",
  "French",
];

export const courseFilters = {
  grades: ["All Grades", "Grade 9", "Grade 10", "Grade 11"],
  subjects: [
    "All Subjects",
    "Physics",
    "Mathematics",
    "History",
    "Computer Science",
  ],
};

export const accountSettingsData = {
  profile: {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (455) 600-1234",
    avatar: "/images/avatar.jpg",
  },

  bio: "PhD in Education with over 8 years of experience in curriculum design and online teaching.",

  notifications: {
    newStudent: {
      email: true,
      inApp: false,
    },
    exams: {
      email: true,
      inApp: true,
    },
  },

  security: {
    twoFactorAuth: false,
  },
};

export const liveSessionsData = [
  {
    id: 1,
    title: "Advanced Organic Chemistry Live Q&A",
    course: "CHM-302",
    stage: "Year 3",
    date: "Today",
    time: "04:30 PM",
    duration: "60 mins",
    students: 124,
    status: "live",
  },
  {
    id: 2,
    title: "Web Development Frameworks Overview",
    course: "CS-205",
    stage: "Grade 10",
    date: "Oct 24",
    time: "10:00 AM",
    duration: "90 mins",
    students: 85,
    status: "pending",
  },
  {
    id: 3,
    title: "Applied Thermodynamics Seminar",
    course: "ME-101",
    stage: "Year 2",
    date: "Oct 25",
    time: "02:00 PM",
    duration: "45 mins",
    students: 210,
    status: "pending",
  },
];

export const previousSessions = [
  {
    id: 1,
    title: "Introduction to Quantum Mechanics",
    duration: "1:24:09",
    streamed: "2 days ago",
    image: "/images/Session Thumbnail2.png",
  },
  {
    id: 2,
    title: "Market Analysis Workshop",
    duration: "56:12",
    streamed: "5 days ago",
    image: "/images/Session Thumbnail.png",
  },
  {
    id: 3,
    title: "Python Data Science Intro",
    duration: "1:49:20",
    streamed: "1 week ago",
    image: "/images/Session Thumbnail3.png",
  },
];

// charts data
export const dataCharts = [
  { name: "Jan", success: 65, fail: 28 },
  { name: "Feb", success: 72, fail: 25 },
  { name: "Mar", success: 68, fail: 30 },
  { name: "Apr", success: 85, fail: 22 },
  { name: "May", success: 78, fail: 26 },
  { name: "Jun", success: 90, fail: 21 },
  { name: "Jul", success: 88, fail: 24 },
  { name: "Aug", success: 95, fail: 19 },
  { name: "Sep", success: 92, fail: 22 },
  { name: "Oct", success: 98, fail: 17 },
  { name: "Nov", success: 94, fail: 20 },
  { name: "Dec", success: 102, fail: 15 },
];

// charts data instructer
export const performanceDistributioninstructer = [
  { label: "Excellent", value: 42, color: "#4F46E5" },
  { label: "Very Good", value: 35, color: "#3B82F6" },
  { label: "Good", value: 18, color: "#F59E0B" },
  { label: "Needs Improvement", value: 5, color: "#EF4444" },
];

// admin and student sidebar
export const menuConfig = {
  admin: [
    { name: "Dashboard", url: "", icon: FaTachometerAlt },
    { name: "Courses", url: "Courses", icon: IoBookOutline },
    { name: "Live sessions", url: "liveSessions", icon: FaChalkboardTeacher },
    { name: "Exams", url: "exams", icon: TbClipboardText },
    { name: "Quizzes", url: "quizzes", icon: BsQuestionSquare },
    { name: "Results", url: "results", icon: AiOutlineFileText },
    { name: "Students", url: "students", icon: PiUsersThree },
  ],

  student: [
    { name: "Profile", url: "", icon: FaUser },
    { name: "Dashboard", url: "DashboardStudent", icon: FaTachometerAlt },
    { name: "Teachers", url: "Teachers", icon: FaChalkboardTeacher },
    { name: "Courses", url: "CoursesStudent", icon: FaBook },
    {
      name: "Results Management",
      url: "ResultsManagement",
      icon: LuNotepadText,
    },
    { name: "Insight & Analysis", url: "InsightAnalysis", icon: FaChartLine },
  ],

  Instructer: [
    { name: "Dashboard", url: "", icon: MdDashboard },
    { name: "Courses", url: "Courses", icon: IoBookOutline },
    { name: "Live sessions", url: "liveSessions", icon: FaChalkboardTeacher },
    { name: "Exams", url: "exams", icon: TbClipboardText },
    { name: "Quizzes", url: "quizzes", icon: BsQuestionSquare },
    { name: "Results", url: "results", icon: AiOutlineFileText },
    { name: "Students", url: "students", icon: PiUsersThree },
  ],
};

// cards data
export const cardsData = [
  {
    number: "2,847",
    title: "Total Passed students",
    icon: FiUserCheck,
    color: "bg-[#22C55E]",
  },
  {
    number: "434",
    title: "Total Failed Students",
    icon: LuUserX,
    color: "bg-[#EB1A1A]",
  },
  {
    number: "87%",
    title: "Pass Rate Progress",
    icon: FaArrowTrendUp,
    color: "bg-[#22C55E]",
  },
  {
    number: "13%",
    title: "Fail Rate Comparison",
    icon: FaArrowTrendDown,
    color: "bg-[#EB1A1A]",
  },
]

// cards data for instructor
export const cardsDataInstructor = [
  {
    title: "Avg. Grade",
    percentChange: "+2.1%",
    percentChangeColor: "text-[#16A34A]",
    percentChangeBgColor: "bg-[#DCFCE7]",
    value: 84,
    barColor: "bg-[#F1A628]",
  },
  {
    title: "Completion",
    percentChange: "-0.5%",
    percentChangeColor: "text-[#EC5B13]",
    percentChangeBgColor: "bg-[#FFEDD5]",
    value: 92,
    barColor: "bg-[#4A3ADF]",
  },
  {
    title: "Engagement",
    percentChange: "Weekly Avg",
    value: 8.8,
    barColor: "bg-[#E66666]",
  },
]

export const cards = [
  {
    number: "2,847",
    title: "Total Passed students",
    icon: FiUserCheck,
    color: "bg-[#22C55E]",
  },
  {
    number: "434",
    title: "Total Failed Students",
    icon: LuUserX,
    color: "bg-[#EB1A1A]",
  },
  {
    number: "87%",
    title: "Pass Rate Progress",
    icon: FaArrowTrendUp,
    color: "bg-[#22C55E]",
  },
  {
    number: "13%",
    title: "Fail Rate Comparison",
    icon: FaArrowTrendDown,
    color: "bg-[#EB1A1A]",
  },
];

// cards data for instructer
export const cardsInstructerData = [
  {
    number: "12",
    title: "Total Courses",
    icon: PiGraduationCapThin,
    color: "bg-[#5B4CE6]",
  },
  {
    number: "250",
    title: "Total Students",
    icon: PiStudentLight,
    color: "bg-[#22C55E]",
  },
  {
    number: "3",
    title: "Active Exams",
    icon: TbClipboardText,
    color: "bg-[#F59E0B]",
  },
  {
    number: "5",
    title: "Active Quizzes",
    icon: BsQuestionSquare,
    color: "bg-[#EB1A1A]",
  },
];

// recentActivity data
export const recentActivity = [
  {
    title1: "New quiz created",
    title2: "Mathematics Level 2",
    icon: PiClipboardText,
    borderColor: "border-[#EF4444]",
    bgColor: "bg-[#FEF2F2]",
    color: "text-[#EB1A1A]",
    date: "5 minutes ago",
  },
  {
    title1: "Results published",
    title2: "Physics Level 3",
    icon: FaRegCheckCircle,
    borderColor: "border-[#22C55E]",
    bgColor: "bg-[#F0FDF4]",
    color: "text-[#10B981]",
    date: "23 minutes ago",
  },
  {
    title1: "New student enrolled",
    title2: "Chemistry Level 1",
    icon: LuUserPlus,
    borderColor: "border-[#F59E0B]",
    bgColor: "bg-[#FEFCE8]",
    color: "text-[#F59E0B]",
    date: "1 hour ago",
  },
  {
    title1: "Lesson updated",
    title2: "Biology Level 2",
    icon: PiFileText,
    borderColor: "border-[#0E2D6B]",
    bgColor: "bg-[#EFF1F5]",
    color: "text-[#000]",
    date: "2 hours ago",
  },
];

// Course Completion Card
export const CoursesInstructerData = [
  { name: "Advanced Mathematics", students: 45, percent: 87 },
  { name: "Physics 101", students: 52, percent: 72 },
  { name: "Chemistry Basics", students: 38, percent: 64 },
  { name: "Biology Lab", students: 41, percent: 91 },
];
