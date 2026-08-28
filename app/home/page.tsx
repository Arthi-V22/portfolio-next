import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
     <main className="bg-[#F7F7F5] text-[#151515]">
      <Hero />
      <Services />
      <FeaturedProjects />
    </main>
  );
}
