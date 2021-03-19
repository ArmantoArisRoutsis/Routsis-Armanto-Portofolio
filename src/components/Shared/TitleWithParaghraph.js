import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const TitleWithParaghraph = (props) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <>
            <h2  data-aos="fade-up" className="section-title work__container">{props.title}</h2>
                <div className="skills-info">
                    <p data-aos="fade-up" className="skills__text">{props.paragraph}</p>
                </div>
        </>

    )
}

export default TitleWithParaghraph
