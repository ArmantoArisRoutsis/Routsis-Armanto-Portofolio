import React,{useEffect} from 'react';

import Skill_Item from "../Shared/Skill_Item"

import Aos from 'aos';
import "aos/dist/aos.css";

const SkillsSections =()=> {

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    
    return (
        <section className="skills section" id="skills">
                <h2 data-aos="fade-up" className="section-title">Skills</h2>
                <div className="skills-info">
                    <h2  data-aos="fade-up" className="skills__subtitle">Professional Skills</h2>
                    <p data-aos="fade-up">These are some of the technologies that I have worked on and built projects with.</p>
                </div>
                <div class="new-skills-grid">
                        <Skill_Item icon={"ant-design:html5-filled"} name="HTML5"/>
                        <Skill_Item icon={"uil:html3"} name="CSS3"/>
                        <Skill_Item icon={"fa-brands:js-square"} name="JavaScript"/>
                        <Skill_Item icon={"ion:logo-nodejs"} name="Node.js & Exprress.js"/>
                        <Skill_Item icon={"cib:python"} name="Python"/>
                        <Skill_Item icon={"cib:flask"} name="Flask"/>
                        <Skill_Item icon={"mdi:react"} name="React.js"/>
                        <Skill_Item icon={"cib:redux"} name="Redux"/>
                        <Skill_Item icon={"file-icons:nextjs"} name="Next.js"/>
                        <Skill_Item icon={"uil:vuejs-alt"} name="Vue.js"/>
                        <Skill_Item icon={"cib:mysql"} name="MySQL"/>
                        <Skill_Item icon={"cib:mongodb"} name="MongoDB"/>
                </div>
            </section>
    )
}

export default SkillsSections
