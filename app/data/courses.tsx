export type Course = {
  number: string;
  title: string;
  organization: string;
  period: string;
  skills: string[];
};

export const courses: Course[] = [
  {
    number: "01",
    title: "Full Stack Java Development",
    organization: "Alo Educational Hub",
    period: "Jan 2026 – Jul 2026",
    skills: ["Java", "HTML", "CSS", "Bootstrap", "MySQL"],
  },

  {
    number: "02",
    title: "C & Java Training",
    organization: "Arunachala NextGen Solution Pvt. Ltd.",
    period: "2025",
    skills: ["C", "Java", "Programming"],
  },

  {
    number: "03",
    title: "UI/UX Design",
    organization: "Arunachala Technology",
    period: "2024",
    skills: ["Figma", "Wireframing", "Prototyping", "UI Design"],
  },

  {
    number: "04",
    title: "Higher Diploma in Computer Applications",
    organization: "CSC",
    period: "2022",
    skills: ["Computer Applications", "Office Tools", "Programming"],
  },
];