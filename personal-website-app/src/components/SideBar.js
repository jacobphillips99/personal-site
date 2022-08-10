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
      {/* <p>Hi, I&apos;m Jacob. I work on applying machine learning solutions to the real world. 
        I graduated from MIT with a B.S. in Computer Science in February 2021 and a M.Eng. in Computer Science in February 2022.
        I'm interested in computer vision for autonomous robitics, fairness and bias in AI, and AGI alignment. 
      </p> */}
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