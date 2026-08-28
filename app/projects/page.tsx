import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Website",
    type: "Web Development",
    description:
      "A responsive shopping application with product search, filtering, cart functionality and a clean user interface.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    slug: "e-commerce",
  },
  {
    title: "QR Code Generator",
    type: "Full Stack Development",
    description:
      "A QR code generation application developed with Java, Spring Boot and MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    slug: "qr-code-generator",
  },
  {
    title: "AI MediaGuard",
    type: "Deep Learning Project",
    description:
      "An intelligent system designed to detect AI-generated and manipulated images and videos using deep learning.",
    technologies: ["Deep Learning", "Computer Vision"],
    slug: "ai-mediaguard",
  },
  {
    title: "EventHub",
    type: "UI/UX Design",
    description:
      "A smart event planning platform designed to help users discover and compare event venues and vendors.",
    technologies: ["Figma", "UI/UX Design"],
    slug: "eventhub",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Projects that turn ideas into
            <span className="text-cyan-400"> real experiences.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A selection of development and UI/UX projects that showcase my
            technical skills, problem-solving approach and design thinking.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={`0${index + 1}`}
            />
          ))}
        </div>

      </div>
    </main>
  );
}