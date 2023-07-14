import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import { MainPage } from './pages/MainPage';
import { MessengerCaseStudyPage } from './pages/MessengerCaseStudyPage';
import { GraphiqlCaseStudyPage } from './pages/GraphiqlCaseStudyPage';

export const App = () => {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/messenger" element={<MessengerCaseStudyPage />} />
        <Route path="/graphiql" element={<GraphiqlCaseStudyPage />} />
      </Routes>
    </ParallaxProvider>
  );
};
