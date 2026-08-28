import Link from "next/link";

const projectData = {
  "e-commerce": {
    title: "E-Commerce Website",
    type: "Web Development",
    description:
      "A responsive shopping application designed to provide users with a simple and user-friendly online shopping experience.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    features: [
      "Product search",
      "Product filtering",
      "Shopping cart",
      "Responsive user interface",
    ],
  },

  "qr-code-generator": {
    title: "QR Code Generator",
    type: "Full Stack Development",
    description:
      "A QR code generation application developed using Java, Spring Boot and MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    features: [
      "QR code generation",
      "Spring Boot backend",
      "MySQL database integration",
    ],
  },

  "ai-mediaguard": {
    title: "AI MediaGuard",
    type: "Deep Learning Project",
    description:
      "An intelligent system for detecting AI-generated and manipulated images and videos using deep learning technology.",
    technologies: ["Deep Learning", "Computer Vision"],
    features: [
      "AI-generated media detection",
      "Manipulated image detection",
      "Manipulated video detection",
    ],
  },

  eventhub: {
    title: "EventHub",
    type: "UI/UX Design",
    description:
      "A UI/UX design project focused on creating a smart event planning experience for discovering and comparing event venues and vendors.",
    technologies: ["Figma", "UI/UX Design"],
    features: [
      "User flow design",
      "Wireframes",
      "Responsive interface design",
      "Event venue and vendor experience",
    ],
  },
};

type ProjectDetailsProps = {
  slug: string;
};

export default function ProjectDetails({
  slug,
}: ProjectDetailsProps) {
  const project =
    projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <Link
            href="/projects"
            className="mt-6 inline-block text-cyan-400"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/projects"
          className="text-sm font-medium text-cyan-400"
        >
          ← Back to Projects
        </Link>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {project.type}
          </p>

          <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Technologies & Tools
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Key Features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-300"
              >
                <span className="mr-3 text-cyan-400">
                  ✓
                </span>

                {feature}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}