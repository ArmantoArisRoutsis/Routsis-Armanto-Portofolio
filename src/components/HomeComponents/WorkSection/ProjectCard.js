import React,{useEffect} from 'react';
import Aos from 'aos';

import './ProjectCard.css';

const ProjectCard = ({imageLink,title,info,githubLink,liveLink,imageFloat}) => {

  useEffect(() => {
    Aos.init({duration:1000});
  }, []);


  return (
    <div className="whole-card" data-aos="fade-up">
      <article className="project-card-container">
        <img src={imageLink} style={{float:imageFloat}} alt={title}/>
        <div className="all-card-info">
          <h2>{title}</h2>
          {info}
        </div>
        {/* <div className="project-card-button">
          <a href={githubLink}>Github Repository</a>
          <a href={liveLink}>Live Version</a>
        </div> */}
      </article>
      <div className="project-card-button">
        <a target="_blank" href={githubLink}>Github Repository</a>
        {liveLink && <a target="_blank" href={liveLink}>Live Version</a>}
      </div>
    </div>
  );
};

export default ProjectCard;