import AboutSection from "./components/AboutSection";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function About() {
  return (
     <div className="bg-[#F7F7F5] text-[#151515]">
      <AboutSection />
      <Education />
      <Experience />
    </div>
  );
}
