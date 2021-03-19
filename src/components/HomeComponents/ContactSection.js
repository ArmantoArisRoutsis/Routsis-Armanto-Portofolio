import React from 'react';

const ContactSection = () => {

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        {/* <form action="mailto:ar.routsis@gmail.com" method="post" enctype="text/plain"class="contact__form">
            <input type="text" name="name" placeholder="Name" class="contact__input"/>
            <input type="mail" name="mail" placeholder="Email" class="contact__input"/>
            <textarea type="text" name="comment" cols="0" rows="10" class="contact__input"/>
            <input type="submit" value="Send" class="contact__button button"/>
        </form> */}
        <a href="mailto:ar.routsis@gmail.com" className="button" style={{marginBottom:"150px", textAlign:"center"}}>
          ar.routsis@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
