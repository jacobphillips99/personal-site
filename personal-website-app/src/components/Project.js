import React from 'react';
import PropTypes from 'prop-types';

// Job is a container for a single job
const Project = ({ data }) => (
  <article className="projects-container">
    <header>
      {/* only link the title if link exists */}
      <h4>
        {data.link ? (
          <a href={data.link}>{data.title}</a>
        ) : (
          <span>{data.title}</span>
        )}
      </h4>
      {/* only create organization if it exists */}
      {data.organization ? (
        <p className="projects-organization">{data.organization}, {data.daterange}</p>
        ) : ( null
      )}
      {/* <p className="daterange"> {data.daterange}</p> */}
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
