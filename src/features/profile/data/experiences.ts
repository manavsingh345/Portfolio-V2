import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "searchashiyana",
    companyName: "Searchashiyana",
    companyLogo:
      "https://ui-avatars.com/api/?name=Searchashiyana&background=111827&color=fff&size=200",
    positions: [
      {
        id: "searchashiyana-software-engineer",
        title: "Software Engineer",
        employmentPeriod: {
          start: "06.2025",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Worked on a content management system (CMS) focused on efficient data storage, retrieval, and organization for structured and unstructured content.
- Contributed to user and role management, enabling administrators to control access, permissions, and content visibility.
- Implemented features to track, update, and validate data entries, improving data accuracy and consistency across the system.
- Gained hands-on experience in real-world data management workflows, version control, and collaborative development practices.`,
        skills: [
          "Content Management Systems",
          "Data Modeling",
          "Access Control",
          "Role-Based Permissions",
          "Data Validation",
          "Version Control",
          "Collaboration",
          "Problem Solving",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "lpu-cse",
        title: "Lovely Professional University",
        employmentPeriod: {
          start: "08.2023",
          end: "Present",
        },
        icon: "education",
        description: `- Bachelor of Computer Science and Engineering
- CGPA 7.71/10
- Major in Computer Science
- Minor in Full Stack Web Development
- Minor in UI/UX`,
        skills: [
          "Computer Science",
          "Full Stack Web Development",
          "UI/UX",
        ],
      },
    ],
  },
];
