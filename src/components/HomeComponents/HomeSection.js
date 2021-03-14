import React, {useEffect} from 'react';
import Aos from 'aos';

const HomeSection = () => {

  useEffect(() => {
    Aos.init({offset:400,duration:2000});
  }, []);

  return (
    <section data-aos="fade-up" class="home-section">
      <div id="home" class="home-title">
        <h1>Hi,
          <br/>
          I'm <span class="home-title-color">Armanto,</span><br/>
          a Software Developer
        </h1>
      </div>

      <div>
        <a href="#contact" class="button">Contact me</a>
        <a target="_blank" href="/Assets/Resume/Armanto Routsis - Resume.pdf"  class="button">My resume</a>
      </div>
            
      <div class="home-icons">
        <a target="_blank" href="https://github.com/ArmantoArisRoutsis">
          <span class="iconify" data-icon="zmdi:github-box" data-inline="false"></span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/armanto-routsis-a347a6157/">
          <span class="iconify" data-icon="cib:linkedin" data-inline="false"></span>
        </a>
      </div>
    </section> 
  );
};

export default HomeSection;

