import React,{useState, useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";


const ProjectItem = (props) => {

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])

    return (
        <>
            <div class="work__img" data-aos="fade-up">
                <h3>{props.title}</h3>
                <img src={props.imageLink} alt=""/>
                <span class="tech-used">
                    <span class="iconify" data-icon="ant-design:html5-filled" data-inline="false"></span>
                    <span class="iconify" data-icon="uil:html3" data-inline="false"></span>
                    <span class="iconify" data-icon="fa-brands:js-square" data-inline="false"></span>
                    <span class="iconify" data-icon="cib:react" data-inline="false"></span>
                </span>
                <span class="project-buttons">
                    <a target="_blank" href={props.githubLink}>Github Repository</a>
                    <a target="_blank" href={props.liveLink}>Live Version</a>
                </span>
            </div>
            
        </>
    )
}

export default ProjectItem
