import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const CertificationItem = (props) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    
    return (
        <div data-aos="fade-up" className="cert-img"><a target="_blank" href={props.link}>
            <img src={props.imageLink} alt="Certification Image"/></a>
        </div>
    )
}

export default CertificationItem
