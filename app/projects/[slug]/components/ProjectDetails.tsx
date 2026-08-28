import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/project";

type ProjectDetailsProps = {
  slug: string;
};

export default function ProjectDetails({
  slug,
}: ProjectDetailsProps) {
  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-24 text-white">
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
    </div>
  );
}