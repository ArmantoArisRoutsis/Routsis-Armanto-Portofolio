import React,{useState, useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

import Modal from "../../Shared/Modal"

const ProjectItem = (props) => {
    const [showMap,setShowMap] = useState(false);

    const openMapHandler = (e) => {
        e.preventDefault();
        setShowMap(true)}

    const closeMapHandler = () => setShowMap(false)

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])

    return (
        <>
            <div class="work__img" data-aos="fade-up">
                <h3>{props.title}</h3>
                <img src={props.imageLink} onClick={openMapHandler} alt=""/>
                <span class="tech-used">
                    <span class="iconify" data-icon="ant-design:html5-filled" data-inline="false"></span>
                    <span class="iconify" data-icon="uil:html3" data-inline="false"></span>
                    <span class="iconify" data-icon="fa-brands:js-square" data-inline="false"></span>
                    <span class="iconify" data-icon="cib:react" data-inline="false"></span>
                </span>
                <span class="project-buttons">
                    <a href="/" onClick={openMapHandler}>More about this project...</a>
                </span>
                <Modal show={showMap} onCancel={closeMapHandler} header={props.title} contentClass="place-item__modal-content" footerClass="place-item__modal-actions"
                        footer={<button className ="modal-cancel" onClick={closeMapHandler}>
                            <span class="iconify" data-icon="bi:x-circle" data-inline="false"></span>
                        </button>}>
                        <div className="modal-content">
                            <p>{props.modalContent}</p>
                            <span class="project-buttons">
                                <a target="_blank" href={props.githubLink}>Github Repository</a>
                                <a target="_blank" href={props.liveLink}>Live Version</a>
                            </span>
                        </div>
                </Modal>
            </div>
            
        </>
    )
}

export default ProjectItem
