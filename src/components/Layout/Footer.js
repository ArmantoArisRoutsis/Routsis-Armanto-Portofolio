import React from 'react';

const Footer=()=> {

  return (
    <footer class="footer">
      <p class="footer__title">Armanto Routsis</p>
      <div class="footer__social">
        <a target="_blank" href="mailto:ar.routsis@gmail.com">
          <span class="iconify" data-icon="entypo:email" data-inline="false"></span>
        </a>
        <a target="_blank" href="https://github.com/ArmantoArisRoutsis">
          <span class="iconify" data-icon="cib:github" data-inline="false"></span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/armanto-routsis-a347a6157/">
          <span class="iconify" data-icon="entypo-social:linkedin-with-circle" data-inline="false"></span>
        </a>
      </div>
      <p>&#169; 2020 || Routsis Armanto</p>
    </footer>
  );
};

export default Footer;