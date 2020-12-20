import React from 'react';

import HomeSection from "./HomeComponents/HomeSection"
import AboutSection from "./HomeComponents/AboutSection"
import SkillsSection from  "./HomeComponents/SkillsSection"
import WorkSection from "./HomeComponents/WorkSection"
import ContactSection from "./HomeComponents/ContactSection"

const HomePage = () => {
    return (
        <main class="l-main">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <WorkSection />
            <ContactSection />
        </main>
        
    )
}

export default HomePage
