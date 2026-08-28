const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive and functional websites with clean and maintainable code.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating modern interfaces with reusable components and responsive layouts.",
  },
  {
    number: "03",
    title: "Full Stack Applications",
    description:
      "Developing complete applications with frontend, backend and database integration.",
  },
  {
    number: "04",
    title: "UI Implementation",
    description:
      "Converting design ideas and prototypes into polished, responsive web interfaces.",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            What I Do
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Turning ideas into useful digital products.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            I focus on developing practical and user-friendly web
            applications with attention to both functionality and design.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white hover:shadow-xl"
            >
              <span className="text-sm font-bold text-cyan-600">
                {service.number}
              </span>

              <h3 className="mt-8 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 h-1 w-10 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}