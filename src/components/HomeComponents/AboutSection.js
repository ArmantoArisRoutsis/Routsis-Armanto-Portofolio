import React, {useEffect} from 'react';
import Aos from 'aos';

const AboutSection = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  }, []);

  return (
    <section className="about section" id="about">
      <h2 data-aos="fade-up" class="section-title">About</h2>
      <div data-aos="fade-up" class="about__container bd-grid">
        <div className="about__img">
          <img src="/Assets/aboutImages/about.jpg" alt=""/>
        </div>          
        <div>
          <h2 className="about__subtitle">Who am I?</h2>
          <p className="about__text">I'm a Software Developer based in Athens, Greece. I'm also an Artist, a Language enthusiast, a traveler and a gamer.<br/><br/>
          I've always had a big interest in programming. It started with me trying to create video games with RPGmaker when I was 14 years old. Eventually I ended up choosing programming as my educational 
          path after finishing High School and at this moment I am working as a Front End Software Developer.</p>           
        </div>                                   
      </div>
    </section>
  );
};

export default AboutSection;