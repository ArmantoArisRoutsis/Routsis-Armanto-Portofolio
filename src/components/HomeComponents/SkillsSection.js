import React,{useEffect} from 'react';

import Skill_Item from "../Shared/Skill_Item"

import Aos from 'aos';
import "aos/dist/aos.css";

const SkillsSections =()=> {

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    
    return (
        <section class="skills section" id="skills">
                <h2 data-aos="fade-up" class="section-title">Skills</h2>
                <div class="skills-info">
                    <h2  data-aos="fade-up" class="skills__subtitle">Profesional Skills</h2>
                    <p data-aos="fade-up">These are some of the technologies that I have worked on and built projects with.</p>
                </div>
                <div class="skills__container bd-grid">      
                    <div>
                        <Skill_Item icon={"ant-design:html5-filled"} name="HTML5"/>
                        <Skill_Item icon={"uil:html3"} name="CSS3"/>
                        <Skill_Item icon={"fa-brands:js-square"} name="JavaScript"/>
                        <Skill_Item icon={"ion:logo-nodejs"} name="Node.js & Exprress.js"/>
                        <Skill_Item icon={"cib:python"} name="Python"/>
                    </div>
                    <div>
                        <Skill_Item icon={"mdi:language-ruby-on-rails"} name="Ruby & Rails"/>
                        <Skill_Item icon={"mdi:react"} name="React.js"/>
                        <Skill_Item icon={"file-icons:nextjs"} name="Next.js"/>
                        <Skill_Item icon={"cib:mysql"} name="MMySQL"/>
                        <Skill_Item icon={"cib:mongodb"} name="MongoDB"/>
                    </div>
                </div>
            </section>
    )
}

export default SkillsSections
