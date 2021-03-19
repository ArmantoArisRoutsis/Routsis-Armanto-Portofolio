import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Skill_Item =(props)=> {

    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return (
        <div data-aos="fade-up" className="skills__data">
            <div className="skills__names">
                <span className="iconify" data-icon={props.icon} data-inline="false"></span>
                 <span className="skills__name">{props.name}</span>
            </div>
        </div>
    )
}

export default Skill_Item
