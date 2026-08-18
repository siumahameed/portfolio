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
    id: "management-trainee",
    title: "Management Trainee",
    organization: "YSSE",
    period: "2026",
    year: "2026",
    description: [
      "Led a team of 14 interns across multiple technical initiatives",
      "Organized technical workshops and IELTS preparation programs",
      "Contributed to business development strategy and execution",
    ],
    tags: ["Leadership", "Project Management", "Team Building"],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    organization: "Dhaka College Data Analytics Club",
    period: "2025 - Present",
    year: "2025",
    description: [
      "Managing data analytics projects and workshop sessions",
      "Coordinating team deliverables and timelines",
      "Organizing data science competitions and hackathons",
    ],
    tags: ["Data Analytics", "Project Management", "Event Coordination"],
  },
  {
    id: "campus-deputy-director",
    title: "Campus Deputy Director",
    organization: "Hult Prize",
    period: "2025",
    year: "2025",
    description: [
      "Served as campus-level coordinator for the Hult Prize competition",
      "Promoted social entrepreneurship and impact-driven innovation",
      "Managed campus outreach and participant engagement",
    ],
    tags: ["Leadership", "Social Impact", "Community Building"],
  },
  {
    id: "committee-member",
    title: "Committee Member",
    organization: "Volunteer for Bangladesh",
    period: "2024 - 2025",
    year: "2024",
    description: [
      "Contributed to national-level volunteer coordination",
      "Participated in community development initiatives",
      "Supported event planning and logistics",
    ],
    tags: ["Volunteering", "Community Service", "Coordination"],
  },
];
