import React from 'react';

import Main from '../layouts/Main';
import LifeContent from '../components/LifeContent';
import lifeContent from '../data/lifeContent';

const About = () => (
    <Main title="About" description="Learn about Jacob Phillips">
        <article className="post" id="about">
            <header>
                <div className="title">
                    <h2> About me </h2>
                </div>
            </header>
            {lifeContent.map((life) => (
                <LifeContent data={life} key={life.title} />
            ))}
        </article>
    </Main>
)

export default About;