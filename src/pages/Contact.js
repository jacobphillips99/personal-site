import React from 'react';
import ContactIcons from '../components/ContactIcons';

import Main from '../layouts/Main';

const Contact = () => (
  <Main title="Contact" description="How to contact Jacob Phillips">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>Contact</h2>
        </div>
      </header>
      <p>Get in touch! Email me at <a href="mailto:jacob.phillips8905@gmail.com">jacob.phillips8905@gmail.com</a> or on socials below.</p>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
