import React from 'react';

import AboutSection from '../HomeComponents/AboutSection';
import ContactSection from '../HomeComponents/ContactSection';
import HomeSection from '../HomeComponents/HomeSection';
import SkillsSection from  '../HomeComponents/SkillsSection';
import WorkSection from '../HomeComponents/WorkSection';

const HomePage = () => {
    
  return (
    <main class="l-main">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
    </main>        
  );
};

export default HomePage;