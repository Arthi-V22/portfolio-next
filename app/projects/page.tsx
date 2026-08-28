import ProjectCard from "./components/ProjectCard";
import { projects } from "../data/project";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-24 text-white">
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
    </div>
  );
}