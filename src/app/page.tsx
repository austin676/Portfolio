import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertsStrip from "@/components/CertsStrip";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CertsStrip />
      <ProjectsHeader />
      <ProjectsSection />
      <EducationSection />
      <FooterSection />
    </>
  );
}
