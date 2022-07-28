import React from 'react';

import Main from '../layouts/Main';

const About = () => (
    <Main title="About" description="Learn about Jacob Phillips">
        <article className="post" id="about">
            <header>
                <div className="title">
                    <h2> About me </h2>
                    <p>subtitle about </p>
                </div>
            </header>
            <p> blah about blah </p>
        </article>
    </Main>
)

export default About;