import Link from "next/link";

type Project = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  slug: string;
};

type ProjectCardProps = {
  project: Project;
  number: string;
};

export default function ProjectCard({
  project,
  number,
}: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

      <div className="flex items-start justify-between">
        <span className="text-sm font-semibold text-cyan-400">
          {number}
        </span>

        <span className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-300">
          {project.type}
        </span>
      </div>

      <h2 className="mt-8 text-2xl font-bold text-white">
        {project.title}
      </h2>

      <p className="mt-4 min-h-20 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-3"
      >
        View Project
        <span>→</span>
      </Link>

    </article>
  );
}