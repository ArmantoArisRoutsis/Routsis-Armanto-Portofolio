import React, {useEffect} from 'react';
import Aos from 'aos';

const HomeSection = () => {

  useEffect(() => {
    Aos.init({offset:400,duration:2000});
  }, []);

  return (
    <section data-aos="fade-up" className="home-section">
      <div id="home" className="home-title">
        <h1>Hi,
          <br/>
          I'm <span className="home-title-color">Armanto,</span><br/>
          a Software Developer
        </h1>
      </div>

      <div>
        <a href="#contact" className="button">Contact me</a>
        <a target="_blank" href="/Assets/Resume/Armanto Routsis - Resume.pdf" className="button">My resume</a>
      </div>
            
      <div className="home-icons">
        <a target="_blank" href="https://github.com/ArmantoArisRoutsis">
          <span className="iconify" data-icon="zmdi:github-box" data-inline="false"></span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/armanto-routsis-a347a6157/">
          <span className="iconify" data-icon="cib:linkedin" data-inline="false"></span>
        </a>
      </div>
    </section> 
  );
};

export default HomeSection;

