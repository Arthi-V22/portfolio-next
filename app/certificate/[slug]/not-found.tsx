import Link from "next/link";

export default function CertificateNotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-3xl text-cyan-400">
          ✦
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          404 — Certificate Not Found
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Certificate
          <span className="text-cyan-400"> not found.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
          The certificate you are looking for does not exist or is
          currently unavailable.
        </p>

        <div className="mt-10">
          <Link
            href="/certificates"
            className="inline-flex items-center rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            ← Back to Certificates
          </Link>
        </div>

      </div>
    </section>
  );
}
