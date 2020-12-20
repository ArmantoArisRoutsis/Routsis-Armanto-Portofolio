import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Skill_Item =(props)=> {

    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return (
        <div data-aos="fade-up" class="skills__data">
            <div class="skills__names">
                <span class="iconify" data-icon={props.icon} data-inline="false"></span>
                 <span class="skills__name">{props.name}</span>
            </div>
        </div>
    )
}

export default Skill_Item
