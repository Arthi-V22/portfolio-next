import { courses } from "../../data/courses";

export default function CourseCard() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 px-6 py-24">

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Continuous Learning
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Courses &
            <span className="text-cyan-400"> Training.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Training programs that helped me build my development,
            programming and UI/UX design skills.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          {courses.map((course, index) => (
            <div
              key={course.number}
              className={`group grid gap-6 p-7 transition duration-300 hover:bg-slate-900 md:grid-cols-[80px_1fr_auto] md:items-center md:p-9 ${
                index !== courses.length - 1
                  ? "border-b border-slate-800"
                  : ""
              }`}
            >

              <div>
                <span className="font-mono text-sm text-cyan-400">
                  {course.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-400">
                  {course.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {course.organization}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-sm text-slate-400 md:text-right">
                {course.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}