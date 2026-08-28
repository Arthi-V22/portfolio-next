export type Certificate = {
  title: string;
  organization: string;
  date: string;
  description: string;
  slug: string;
  file: string | null;
};

export const certificates: Certificate[] = [
  {
    title: "Full Stack Java Development with UI/UX Design",
    organization: "Alo Educational Hub",
    date: "Jan 2026 – Jul 2026",
    description:
      "Professional training in Full Stack Java Development and UI/UX Design with hands-on experience in Java, web technologies, MySQL and design tools.",
    slug: "full-stack-java-development",
    file: "/certificates/certificate.pdf",
  },

  {
    title: "Workshop Certificate",
    organization: "Keltron",
    date: "2026",
    description:
      "Participated in a technical workshop conducted by Keltron and gained exposure to industry-oriented technical concepts.",
    slug: "workshop-certificate",
    file: null,
  },

  {
    title: "C & Java Training Internship Program",
    organization: "Arunachala NextGen Solution Pvt. Ltd.",
    date: "2025",
    description:
      "Completed practical training in C and Java programming with hands-on learning in programming fundamentals and application development.",
    slug: "c-java-training-internship",
    file: null,
  },

  {
    title: "UI/UX Design",
    organization: "Arunachala Technology",
    date: "2024",
    description:
      "Completed UI/UX Design training with practical experience in interface design, wireframing, prototyping and user-centered design.",
    slug: "ui-ux-design",
    file: null,
  },

  {
    title: "UI/UX Design Internship",
    organization: "AK INFOPARK",
    date: "2023",
    description:
      "Completed an internship focused on creating user-friendly wireframes, prototypes and responsive interfaces using Figma.",
    slug: "ui-ux-design-internship",
    file: null,
  },

  {
    title: "Higher Diploma in Computer Applications",
    organization: "CSC",
    date: "2022",
    description:
      "Completed the Higher Diploma in Computer Applications, gaining foundational knowledge in computer applications and software tools.",
    slug: "higher-diploma-computer-applications",
    file: null,
  },
];