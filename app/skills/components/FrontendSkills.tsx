export default function FrontendSkills() {
  const skills = [
    {
      name: "HTML",
      description: "Building structured and semantic web pages.",
    },
    {
      name: "CSS",
      description: "Creating responsive layouts and modern visual designs.",
    },
    {
      name: "Bootstrap",
      description: "Developing responsive interfaces using reusable components.",
    },
    {
      name: "JavaScript",
      description: "Adding interaction and dynamic functionality to websites.",
    },
    {
      name: "React",
      description: "Building reusable and interactive user interfaces.",
    },
  ];

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400" />

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            01 / Frontend
          </p>
        </div>

        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Frontend Development
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          I create responsive and user-friendly web interfaces using
          modern frontend technologies.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-slate-800
                         bg-slate-900/60 p-7 transition duration-300
                         hover:-translate-y-1 hover:border-cyan-400"
            >
              <span className="text-sm text-cyan-400">
                0{index + 1}
              </span>

              <h2 className="mt-6 text-2xl font-semibold">
                {skill.name}
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}