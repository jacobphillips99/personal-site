import React from 'react';
import PropTypes from 'prop-types';

// Job is a container for a single job
const Project = ({ data }) => (
  <article className="projects-container">
    <header>
      <h4>
        {data.link ? (
          <a href={data.link}>{data.title}</a>
        ) : (
          <div>{data.title}</div>
        )}
      </h4>
      {data.organization ? (
        <p className="daterange-organization">{data.organization} | {data.daterange}</p>
        ) : ( <p className="daterange"> {data.daterange}</p>
      )}
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
    link: PropTypes.string,
    organization: PropTypes.string,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;
