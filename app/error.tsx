"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h2 className="text-4xl font-bold">
        Something went wrong!
      </h2>

      <p className="mt-4 text-slate-400">
        We couldn't load this page.
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Try Again
      </button>
    </div>
  );
}