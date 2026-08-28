import FrontendSkills from "./components/FrontendSkills";
import BackendSkills from "./components/BackendSkills";
import DesignSkills from "./components/DesignSkills";

export default function SkillsPage() {
  return (
    <main className="bg-[#07111f] text-white">
      <FrontendSkills />
      <BackendSkills />
      <DesignSkills />
    </main>
  );
}