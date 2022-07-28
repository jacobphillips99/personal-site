import React from 'react';

import Main from '../layouts/Main';
import Project from '../components/Project.js';
import projects from '../data/projects';

const Research = () => (
    <Main title="Research" description="Jacob Phillips's research experience">
        <article className="post" id="research">
            <header>
                <div className='title'>
                    <h2>Research</h2>
                    <p>about</p> 
                </div>
            </header>
            <p>blah research blah</p>
        </article>
        <div className='projects'>
            {projects.map((project) => (
                <Project data={project} key={project.title} />
            ))}
        </div>
    </Main>
)

export default Research;