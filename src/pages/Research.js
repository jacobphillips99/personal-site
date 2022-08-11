import React from 'react';

import Main from '../layouts/Main';
import Project from '../components/Project';
import projects from '../data/projects';

const Research = () => (
  <Main title="Research" description="Jacob Phillips's research experience">
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>Research</h2>
        </div>
      </header>
      {projects.map((project) => (
        <Project data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Research;
