import { Header, Footer } from '../components';
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from '../components/sections';

export const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};
