import { HeroSection } from "@/components/HeroSection";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <Projects />
      <WorkExperience />
      <About />
      <Contact />
    </>
  );
}
