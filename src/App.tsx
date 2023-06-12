import { Header, Footer } from './components';
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from './components/sections';

export const App = () => {
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
