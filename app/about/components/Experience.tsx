export default function Experience() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Learning Through Practice
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400/50">
            <span className="text-sm text-cyan-400">
              Training
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              Full Stack Java Development
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Gained practical experience with Java, HTML, CSS, Bootstrap,
              MySQL and CRUD-based web application development.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400/50">
            <span className="text-sm text-cyan-400">
              Internship
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              UI/UX Design
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Developed practical knowledge of UI/UX principles, interface
              design and prototyping while working with design tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}