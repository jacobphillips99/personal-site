import React from 'react';
import PropTypes from 'prop-types';

// Job is a container for a single job
const Project = ({ data }) => (
  <article className="projects-container">
    <header>
      <h4><a href={data.link}>{data.title}</a></h4>
      <p className="projects-organization">{data.organization}</p>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;
