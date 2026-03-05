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
]

export const weeklyEngagement = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 62 },
  { day: "Thu", value: 75 },
  { day: "Fri", value: 70 },
  { day: "Sat", value: 55 },
  { day: "Sun", value: 50 },
]

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
]

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
]

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
]

export const recentActivities = [
  {
    id: 1,
    type: "submission",
    message: "New submission for Midterm Exam",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "grade",
    message: "Grade approved by Admin",
    time: "2 hours ago",
  },
  {
    id: 3,
    type: "live-session",
    message: "Student joined live session",
    time: "20 minutes ago",
  },
]

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
}

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
]
export const courseStages = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"]

export const courseSubjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "History",
]

export const courseLanguages = [
  "English (US)",
  "English (UK)",
  "Arabic",
  "French",
]

export const courseFilters = {
  grades: ["All Grades", "Grade 9", "Grade 10", "Grade 11"],
  subjects: [
    "All Subjects",
    "Physics",
    "Mathematics",
    "History",
    "Computer Science",
  ],
}

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
}

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
]

export const previousSessions = [
  {
    id: 1,
    title: "Introduction to Quantum Mechanics",
    duration: "1:24:09",
    streamed: "2 days ago",
    image: "/images/live1.jpg",
  },
  {
    id: 2,
    title: "Market Analysis Workshop",
    duration: "56:12",
    streamed: "5 days ago",
    image: "/images/live2.jpg",
  },
  {
    id: 3,
    title: "Python Data Science Intro",
    duration: "1:49:20",
    streamed: "1 week ago",
    image: "/images/live3.jpg",
  },
]
