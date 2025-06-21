export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  prerequisites: string[];
  languages: string[];
  certification: boolean;
}

export interface Module {
  title: string;
  description: string;
  subModules: string[];
}

export interface ContentItem {
  type: "video" | "pdf" | "quiz" | "lab" | "simulation";
  title: string;
  url?: string;
  duration?: string;
  completed?: boolean;
  score?: number;
}

export interface SubModuleContent {
  title: string;
  contentItems: ContentItem[];
}

export interface ExtendedModule extends Module {
  subModulesContent?: SubModuleContent[];
  progress?: number;
  passingScore?: number;
}

export const courseData: Course = {
  id: "net-infra-01",
  title: "Advanced Network Infrastructure and Security",
  description:
    "This course covers the fundamental principles of networking, network equipment configuration, and advanced security practices for enterprise environments.",
  instructor: "Prof. Marie Dupont",
  duration: "40 hours",
  level: "Intermediate",
  prerequisites: ["Basic networking knowledge", "TCP/IP concepts"],
  languages: ["French", "English"],
  certification: true,
};

export const modulesData: ExtendedModule[] = [
  {
    title: "Network Fundamentals",
    description: "Introduction to fundamental concepts of computer networks",
    subModules: [
      "Introduction to networks",
      "OSI and TCP/IP models",
      "IP addressing and subnetting",
      "Routing protocols",
    ],
    subModulesContent: [
      {
        title: "Introduction to networks",
        contentItems: [
          {
            type: "video",
            title: "Understanding computer networks",
            duration: "15 min",
            completed: true,
          },
          {
            type: "pdf",
            title: "Network components guide",
            url: "/docs/network-components-guide.pdf",
            completed: true,
          },
          {
            type: "quiz",
            title: "Network basics quiz",
            url: "/quizzes/network-basics",
            completed: true,
            score: 92,
          },
        ],
      },
      {
        title: "OSI and TCP/IP models",
        contentItems: [
          {
            type: "video",
            title: "OSI model explained",
            duration: "20 min",
            completed: false,
          },
          {
            type: "video",
            title: "TCP/IP in detail",
            duration: "18 min",
            completed: false,
          },
          {
            type: "quiz",
            title: "Network models assessment",
            url: "/quizzes/network-models",
            completed: false,
          },
        ],
      },
      {
        title: "IP addressing and subnetting",
        contentItems: [
          {
            type: "video",
            title: "Understanding IPv4 addressing",
            duration: "25 min",
            completed: false,
          },
          {
            type: "lab",
            title: "Subnetting practical work",
            url: "/labs/subnetting",
            completed: false,
          },
        ],
      },
      {
        title: "Routing protocols",
        contentItems: [
          {
            type: "video",
            title: "Introduction to routing protocols",
            duration: "22 min",
            completed: false,
          },
          {
            type: "simulation",
            title: "RIP and OSPF routing simulation",
            url: "/simulations/routing-protocols",
            completed: false,
          },
        ],
      },
    ],
    progress: 35,
    passingScore: 70,
  },
  // Autres modules (inchangés, omis pour brièveté)
];
