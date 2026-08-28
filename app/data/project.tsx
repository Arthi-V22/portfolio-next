export type project = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  slug: string;
  features: string[];
};

export const projects: project[] = [
  {
    title: "E-Commerce Website",
    type: "Web Development",
    description:
      "A responsive shopping application with product search, filtering, cart functionality and a clean user interface.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    slug: "e-commerce",
    features: [
      "Product search",
      "Product filtering",
      "Shopping cart",
      "Responsive user interface",
    ],
  },

  {
    title: "QR Code Generator",
    type: "Full Stack Development",
    description:
      "A QR code generation application developed with Java, Spring Boot and MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    slug: "qr-code-generator",
    features: [
      "QR code generation",
      "Spring Boot backend",
      "MySQL database integration",
    ],
  },

  {
    title: "AI MediaGuard",
    type: "Deep Learning Project",
    description:
      "An intelligent system designed to detect AI-generated and manipulated images and videos using deep learning.",
    technologies: ["Deep Learning", "Computer Vision"],
    slug: "ai-mediaguard",
    features: [
      "AI-generated media detection",
      "Manipulated image detection",
      "Manipulated video detection",
    ],
  },

  {
    title: "EventHub",
    type: "UI/UX Design",
    description:
      "A smart event planning platform designed to help users discover and compare event venues and vendors.",
    technologies: ["Figma", "UI/UX Design"],
    slug: "eventhub",
    features: [
      "User flow design",
      "Wireframes",
      "Responsive interface design",
      "Event venue and vendor experience",
    ],
  },
];