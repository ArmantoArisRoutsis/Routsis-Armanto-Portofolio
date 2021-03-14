import React, {useEffect} from 'react';
import Aos from 'aos';

const TitleWithParaghraph = ({title, paragraph}) => {
  
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  
  return (
    <>
      <h2  data-aos="fade-up" class="section-title work__container">
        {title}
      </h2>
      <div class="skills-info">
        <p data-aos="fade-up" class="skills__text">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default TitleWithParaghraph;
