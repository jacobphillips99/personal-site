import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from './ContactIcons';

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
      <p>Hi, I&apos;m Jacob. I work on applying machine learning solutions to the real world. 
        I graduated from MIT with a Bachelor of Science in Computer Science in February 2021 and a Master of Engineering in Computer Science in February 2022.
        I'm interested in fairness and bias in AI, AGI alignment, and safe robotics. 
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? (
            <Link to="/about" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jacob Phillips <Link to="/">jacobdphillips.com</Link></p>
    </section>
  </section>
);

export default SideBar;