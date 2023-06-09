import { Header } from './components/Header';
import { PromoSection } from './components/PromoSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export const App = () => {
  return (
    <div>
      <Header />
      <PromoSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
