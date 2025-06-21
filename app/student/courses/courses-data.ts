// courses-data.ts

// Course Interface
export interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  rating: number;
  students: number;
  isFeatured?: boolean;
}

// Expanded STATIC_COURSES
export const STATIC_COURSES: Course[] = [
  {
    id: 19,
    title: "Introduction to Cybersecurity",
    category: "Computer Science",
    image: "/images/Cyber.jpeg",
    level: "Beginner",
    duration: "6 hours",
    description:
      "Learn the basics of cybersecurity and protect your digital assets.",
    rating: 2.8,
    students: 1234,
    isFeatured: true,
  },
  {
    id: 82,
    title: "Advanced Python Programming",
    category: "Computer Science",
    image: "/images/ml.jpeg",
    level: "Intermediate",
    duration: "8 hours",
    description:
      "Master advanced Python concepts to develop complex applications.",
    rating: 4.7,
    students: 892,
    isFeatured: false,
  },
  {
    id: 332,
    title: "Web Development with React",
    category: "Computer Science",
    image: "/images/ml.jpeg",
    level: "Intermediate",
    duration: "10 hours",
    description:
      "Create modern web applications with React and its associated tools.",
    rating: 4.9,
    students: 1567,
    isFeatured: true,
  },
  {
    id: 42,
    title: "SQL Databases",
    category: "Computer Science",
    image: "/images/sql.jpeg",
    level: "Beginner",
    duration: "5 hours",
    description: "Discover how to design and manage databases with SQL.",
    rating: 4.6,
    students: 987,
    isFeatured: false,
  },
  {
    id: 523,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    image: "/images/ml.jpeg",
    level: "Advanced",
    duration: "12 hours",
    description:
      "Explore machine learning algorithms and their practical applications.",
    rating: 4.8,
    students: 543,
    isFeatured: true,
  },
  {
    id: 231,
    title: "Introduction to Cybersecurity",
    category: "Computer Science",
    image: "/images/Gestion.jpeg",
    level: "Beginner",
    duration: "6 hours",
    description:
      "Learn the basics of cybersecurity and protect your digital assets.",
    rating: 4.8,
    students: 1234,
    isFeatured: true,
  },
  {
    id: 212,
    title: "Advanced Python Programming",
    category: "Computer Science",
    image: "/images/Gestion.jpeg",
    level: "Intermediate",
    duration: "8 hours",
    description:
      "Master advanced Python concepts to develop complex applications.",
    rating: 4.7,
    students: 892,
    isFeatured: false,
  },
  {
    id: 33,
    title: "Web Development with React",
    category: "Computer Science",
    image: "/images/OIP.jpeg",
    level: "Intermediate",
    duration: "10 hours",
    description:
      "Create modern web applications with React and its associated tools.",
    rating: 4.9,
    students: 1567,
    isFeatured: true,
  },
  {
    id: 34,
    title: "SQL Databases",
    category: "Computer Science",
    image: "/images/sql.jpeg",
    level: "Beginner",
    duration: "5 hours",
    description: "Discover how to design and manage databases with SQL.",
    rating: 4.6,
    students: 987,
    isFeatured: false,
  },
  {
    id: 52,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    image: "/images/ml.jpeg",
    level: "Advanced",
    duration: "12 hours",
    description:
      "Explore machine learning algorithms and their practical applications.",
    rating: 4.8,
    students: 543,
    isFeatured: true,
  },
  {
    id: 22,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    image: "/images/Gestion.jpeg",
    level: "Advanced",
    duration: "12 hours",
    description:
      "Explore machine learning algorithms and their practical applications.",
    rating: 4.8,
    students: 543,
    isFeatured: true,
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    image: "/images/ml.jpeg",
    level: "Advanced",
    duration: "12 hours",
    description:
      "Explore machine learning algorithms and their practical applications.",
    rating: 4.8,
    students: 543,
    isFeatured: true,
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    image: "/images/ml.jpeg",
    level: "Advanced",
    duration: "12 hours",
    description:
      "Explore machine learning algorithms and their practical applications.",
    rating: 4.8,
    students: 543,
    isFeatured: true,
  },
];

// Content-Related Interfaces
export interface ContentItem {
  type: "video" | "quiz" | "pdf";
  title: string;
  url?: string;
  completed?: boolean;
}

export interface SubModuleContent {
  title: string;
  contentItems: ContentItem[];
}

export interface Module {
  title: string;
  subModules: string[];
}

export interface ExtendedModule extends Module {
  subModulesContent?: SubModuleContent[];
  progress?: number;
}

// Expanded STATIC_MODULES
export const STATIC_MODULES: Record<number, ExtendedModule[]> = {
  1: [
    {
      title: "Fundamentals of Cybersecurity",
      subModules: ["Introduction", "Basic Concepts", "Threats Overview"],
      subModulesContent: [
        {
          title: "Introduction",
          contentItems: [
            {
              type: "video",
              title: "Welcome to Cybersecurity",
              url: "https://example.com/video1",
              completed: false,
            },
            {
              type: "pdf",
              title: "Cybersecurity Basics",
              url: "https://example.com/pdf1",
              completed: false,
            },
          ],
        },
        {
          title: "Basic Concepts",
          contentItems: [
            {
              type: "video",
              title: "Encryption Basics",
              url: "https://example.com/video2",
              completed: false,
            },
            {
              type: "quiz",
              title: "Cybersecurity Quiz 1",
              completed: false,
            },
          ],
        },
        {
          title: "Threats Overview",
          contentItems: [
            {
              type: "pdf",
              title: "Common Cyber Threats",
              url: "https://example.com/pdf2",
              completed: false,
            },
          ],
        },
      ],
      progress: 25,
    },
  ],
  2: [
    {
      title: "Python Core Concepts",
      subModules: ["OOP in Python", "Data Structures", "File Handling"],
      subModulesContent: [
        {
          title: "OOP in Python",
          contentItems: [
            {
              type: "video",
              title: "Classes and Objects",
              url: "https://example.com/video3",
              completed: false,
            },
            {
              type: "quiz",
              title: "OOP Quiz",
            },
          ],
        },
        {
          title: "Data Structures",
          contentItems: [
            {
              type: "video",
              title: "Lists and Dictionaries",
              url: "https://example.com/video4",
              completed: false,
            },
            {
              type: "pdf",
              title: "Python Data Structures",
              url: "https://example.com/pdf3",
              completed: false,
            },
          ],
        },
        {
          title: "File Handling",
          contentItems: [
            {
              type: "video",
              title: "Working with Files",
              url: "https://example.com/video5",
              completed: false,
            },
          ],
        },
      ],
      progress: 40,
    },
  ],
  3: [
    {
      title: "React Basics",
      subModules: ["Components", "State Management", "Hooks"],
      subModulesContent: [
        {
          title: "Components",
          contentItems: [
            {
              type: "video",
              title: "Intro to Components",
              url: "https://example.com/video6",
              completed: false,
            },
          ],
        },
        {
          title: "State Management",
          contentItems: [
            {
              type: "video",
              title: "Managing State",
              url: "https://example.com/video7",
              completed: false,
            },
            {
              type: "quiz",
              title: "State Quiz",
              completed: false,
            },
          ],
        },
        {
          title: "Hooks",
          contentItems: [
            {
              type: "pdf",
              title: "React Hooks Guide",
              url: "https://example.com/pdf4",
              completed: false,
            },
          ],
        },
      ],
      progress: 15,
    },
  ],
  4: [
    {
      title: "React Basics",
      subModules: ["Components", "State Management", "Hooks"],
      subModulesContent: [
        {
          title: "Components",
          contentItems: [
            {
              type: "video",
              title: "Intro to Components",
              url: "https://example.com/video6",
              completed: false,
            },
          ],
        },
        {
          title: "State Management",
          contentItems: [
            {
              type: "video",
              title: "Managing State",
              url: "https://example.com/video7",
              completed: false,
            },
            {
              type: "quiz",
              title: "State Quiz",
              completed: false,
            },
          ],
        },
        {
          title: "Hooks",
          contentItems: [
            {
              type: "pdf",
              title: "React Hooks Guide",
              url: "https://example.com/pdf4",
              completed: false,
            },
          ],
        },
      ],
      progress: 15,
    },
  ],
  5: [
    {
      title: "React Basics",
      subModules: ["Components", "State Management", "Hooks"],
      subModulesContent: [
        {
          title: "Components",
          contentItems: [
            {
              type: "video",
              title: "Intro to Components",
              url: "https://example.com/video6",
              completed: false,
            },
          ],
        },
        {
          title: "State Management",
          contentItems: [
            {
              type: "video",
              title: "Managing State",
              url: "https://example.com/video7",
              completed: false,
            },
            {
              type: "quiz",
              title: "State Quiz",
              completed: false,
            },
          ],
        },
        {
          title: "Hooks",
          contentItems: [
            {
              type: "pdf",
              title: "React Hooks Guide",
              url: "https://example.com/pdf4",
              completed: false,
            },
          ],
        },
      ],
      progress: 15,
    },
  ],
  53: [
    {
      title: "React Basics",
      subModules: ["Components", "State Management", "Hooks"],
      subModulesContent: [
        {
          title: "Components",
          contentItems: [
            {
              type: "video",
              title: "Intro to Components",
              url: "https://example.com/video6",
              completed: false,
            },
          ],
        },
        {
          title: "State Management",
          contentItems: [
            {
              type: "video",
              title: "Managing State",
              url: "https://example.com/video7",
              completed: false,
            },
            {
              type: "quiz",
              title: "State Quiz",
              completed: false,
            },
          ],
        },
        {
          title: "Hooks",
          contentItems: [
            {
              type: "pdf",
              title: "React Hooks Guide",
              url: "https://example.com/pdf4",
              completed: false,
            },
          ],
        },
      ],
      progress: 15,
    },
  ],
  33: [
    {
      title: "React Basics",
      subModules: ["Components", "State Management", "Hooks"],
      subModulesContent: [
        {
          title: "Components",
          contentItems: [
            {
              type: "video",
              title: "Intro to Components",
              url: "https://example.com/video6",
              completed: false,
            },
          ],
        },
        {
          title: "State Management",
          contentItems: [
            {
              type: "video",
              title: "Managing State",
              url: "https://example.com/video7",
              completed: false,
            },
            {
              type: "quiz",
              title: "State Quiz",
              completed: false,
            },
          ],
        },
        {
          title: "Hooks",
          contentItems: [
            {
              type: "pdf",
              title: "React Hooks Guide",
              url: "https://example.com/pdf4",
              completed: false,
            },
          ],
        },
      ],
      progress: 15,
    },
  ],
};

// User Course Interface
export interface UserCourse {
  courseId: number;
  progress: number;
  enrolledAt: string;
}

// Expanded STATIC_USER_COURSES
export const STATIC_USER_COURSES: UserCourse[] = [
  {
    courseId: 1,
    progress: 30,
    enrolledAt: "2023-01-15",
  },
  {
    courseId: 2,
    progress: 75,
    enrolledAt: "2023-02-01",
  },
  {
    courseId: 3,
    progress: 10,
    enrolledAt: "2023-03-10",
  },
  {
    courseId: 4,
    progress: 60,
    enrolledAt: "2023-04-05",
  },
  {
    courseId: 5,
    progress: 45,
    enrolledAt: "2023-05-20",
  },
];

// Achievements Interface
export interface Achievements {
  idusers: number;
  badge: string;
  idcours: string;
  completed?: number;
}

// Expanded Static_Achievements
export const Static_Achievements: Achievements[] = [
  {
    idusers: 1,
    badge: "beginner",
    idcours: "Certification",
    completed: 55,
  },
  {
    idusers: 2,
    badge: "advanced",
    idcours: "React Mastery",
    completed: 85,
  },
  {
    idusers: 3,
    badge: "intermediate",
    idcours: "Python Pro",
    completed: 70,
  },
  {
    idusers: 4,
    badge: "expert",
    idcours: "SQL Master",
    completed: 90,
  },
];
