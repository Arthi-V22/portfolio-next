import CertificateCard from "./components/CertificateCard";
import CourseCard from "./components/CourseCard";

export default function Certificate() {
  return (
    <main className="bg-slate-950 text-white">
      <CertificateCard />
      <CourseCard />
    </main>
  );
}