import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function AboutSection() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return (
        <section class="about section" id="about">
                <h2 data-aos="fade-up" class="section-title">About</h2>

                <div data-aos="fade-up" class="about__container bd-grid">
                    <div class="about__img">
                        <img src="/Assets/aboutImages/about.jpg" alt=""/>
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">Who am I?</h2>
                        <p class="about__text">I'm a Software Developer based in Athens, Greece. I'm also an Artist, a Language enthusiast, a traveler and a gamer.<br/><br/>
                            I've always had a big interest in programming. It started with me trying to create video games with RPGmaker when I was 14 years old. Eventually I ended up choosing programming as my educational 
                            path after finishing High School and now I am looking to make my passion for programming and Software Development my career.</p>           
                    </div>                                   
                </div>
            </section>
    )
}

export default AboutSection
