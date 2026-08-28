import Hero from "./home/components/Hero";
import Services from "./home/components/Services";
import FeaturedProjects from "./home/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="bg-[#F7F7F5] text-[#151515]">
      <Hero />
      <Services />
      <FeaturedProjects />
    </div>
  );
}