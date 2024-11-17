import Navbar from "@/components/NavBar";
import HeroSection from '@/components/homScreen'
import AchievementsSection from '@/components/achievement'
import AboutSection from '@/components/AboutSection'
import {SkillCards} from '@/components/skillCard'
import ProjectsSection from '@/components/projectSection'
import Testimonials from '@/components/Testimonials'
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/services";



export default function Home() {
  return (
    <>
    <div  className="overflow-hidden min-h-screen">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ServicesSection />
      <SkillCards />
      <ProjectsSection />
      <Testimonials />
      <EmailSection />
      <Footer />
    </div>
    </div>
   
    </>
  );
}
