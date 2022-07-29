import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
// import Link from 'react-router-dom';

import Main from '../layouts/Main';

const Home = () => (
    <Main>
        <article className="post" id="home">
        <header>
            <div className="title">
                <h3 data-testid="heading"> Welcome to my site!</h3>
            </div>
        </header>
        <p>
            Feel free to read more <Link to="/about">about me</Link>, 
            check out my <Link to="/work">work experience</Link> and <Link to="/research">research</Link>, 
            or <Link to="/contact">contact me</Link>.
        </p>
        <ContactIcons />
        </article>
    </Main>
);

export default Home;