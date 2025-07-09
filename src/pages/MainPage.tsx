import { HeroSection } from "@/components/HeroSection";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Articles } from "@/components/Articles";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <Projects />
      <WorkExperience />
      <Articles />
      <About />
      <Contact />
    </>
  );
}
