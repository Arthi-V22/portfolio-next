export default function DesignSkills() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400" />

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            03 / Design
          </p>
        </div>

        <div className="mt-6 max-w-3xl">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            UI/UX & Design
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I also focus on creating clean and intuitive user
            experiences by combining design thinking with frontend
            development.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="text-3xl text-cyan-400">
              01
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              User Interface
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Designing clean, consistent and visually appealing
              interfaces.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="text-3xl text-cyan-400">
              02
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              User Experience
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Thinking about usability, navigation and how users
              interact with applications.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="text-3xl text-cyan-400">
              03
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Responsive Design
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Creating layouts that adapt smoothly to mobile,
              tablet and desktop screens.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}