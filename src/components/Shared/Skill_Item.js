import React, {useEffect} from 'react';
import Aos from 'aos';

const Skill_Item =({name, icon})=> {

  useEffect(() => {
    Aos.init({duration:2000});
  }, []);

  return (
    <div data-aos="fade-up" class="skills__data">
      <div class="skills__names">
        <span class="iconify" data-icon={icon} data-inline="false"></span>
        <span class="skills__name">{name}</span>
      </div>
    </div>
  );
};

export default Skill_Item;