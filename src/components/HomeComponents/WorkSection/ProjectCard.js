import React from 'react'

import "./ProjectCard.css"

const ProjectCard =({imageLink,title,info,githubLink,liveLink,imageFloat})=> {
    return (
        <div className="whole-card">
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
                    <a href={githubLink}>Github Repository</a>
                    <a href={liveLink}>Live Version</a>
            </div>
        </div>
    )
}

export default ProjectCard
