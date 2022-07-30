import React from 'react';
import PropTypes from 'prop-types';

// Life is a container for a life section
const LifeContent = ({ data }) => (
  <article className="life-container">
    <header>
      <h3>{data.title}</h3>
    </header>
    <p>{data.content}</p>
  </article>
);

LifeContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default LifeContent;
