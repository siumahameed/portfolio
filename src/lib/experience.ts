export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  year: string;
  description: string[];
  tags: string[];
}

export const experienceData: Experience[] = [
  {
    id: "datatistics",
    title: "Creator & ML Engineer",
    organization: "DataTistics",
    period: "2024 - Present",
    year: "2024",
    description: [
      "Architected browser-based statistical platform serving 5,000+ active users across 65 computational engines",
      "Engineered automated statistical assumption verification (normality, homoscedasticity) and instant APA 7th Edition Word (.docx) exports",
      "Integrated low-latency Groq LLM synthesis with 99.8% uptime and a 1,050+ automated test suite (pytest)",
    ],
    tags: ["FastAPI", "Python", "Scikit-Learn", "PostgreSQL", "Groq AI", "Supabase"],
  },
  {
    id: "math-olympiad",
    title: "Event Coordinator",
    organization: "Bangladesh Mathematics Olympiad",
    period: "Jan 2024 – Present",
    year: "2024",
    description: [
      "Led nationwide mathematics Olympiad events, streamlining logistics for participants across multiple districts",
      "Ensured seamless competition operations and student evaluation pipelines",
      "Partnered with educational institutions to foster mathematical achievement and analytical thinking",
    ],
    tags: ["Mathematics", "Coordination", "Logistics", "Leadership"],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    organization: "Dhaka College Data Analytics Club",
    period: "May 2024 – Nov 2024",
    year: "2024",
    description: [
      "Spearheaded innovative data analytics projects, mentored team members in machine learning and statistical modeling",
      "Delivered impactful data-driven solutions for campus initiatives and conducted hands-on technical workshops",
      "Mastered cross-functional team leadership, timelines, and analytical deliverable execution",
    ],
    tags: ["Data Analytics", "Machine Learning", "Mentorship", "Leadership"],
  },
  {
    id: "management-trainee",
    title: "Management Trainee",
    organization: "Youth School for Social Entrepreneurs (YSSE)",
    period: "Nov 2024 – July 2025",
    year: "2024",
    description: [
      "Forged strategic partnerships, analyzed market trends, and crafted growth strategies for youth entrepreneurship programs",
      "Led technical initiatives and workshops while expanding organizational reach across Bangladesh",
      "Enhanced expertise in stakeholder negotiation, strategy execution, and cross-team collaboration",
    ],
    tags: ["Strategy", "Market Analytics", "Partnerships", "Execution"],
  },
  {
    id: "committee-member",
    title: "Committee Member",
    organization: "Volunteer for Bangladesh – Dhaka District",
    period: "Oct 2024 – Present",
    year: "2024",
    description: [
      "Spearhead community events, strategize social initiatives, and mobilize volunteer teams across Dhaka district",
      "Coordinate diverse outreach projects to drive community impact and data-informed logistics",
    ],
    tags: ["Community Outreach", "Social Impact", "Team Mobilization"],
  },
];
