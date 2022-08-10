import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from './ContactIcons';
import lifeContent from '../data/lifeContent';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jacob Phillips</h2>
        <p><a href="mailto:jacob.phillips8905@gmail.com">jacob.phillips8905@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <p>{lifeContent[0].content}</p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jacob Phillips <Link to="/">jacobdphillips.com</Link></p>
    </section>
  </section>
);

export default SideBar;