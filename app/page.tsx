import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IncludesSection from "@/components/IncludesSection";
import PlansSection from "@/components/PlansSection";
import ScheduleSection from "@/components/ScheduleSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PlansSection />
      <IncludesSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </>
  );
}
