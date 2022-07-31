import React from 'react';
import PropTypes from 'prop-types';

// Life is a container for a life section
const LifeContent = ({ data }) => (
  <article className="life-container">
    <header>
      <h3>{data.title}</h3>
    </header>
    {data.content.map((c) => (
      <p key={c}>{c}</p>
    ))}
    {data.subsections ? (
      data.subsections.map((subsection) => (
        <div key={subsection.subsectionTitle}>
          <h4>{subsection.subsectionTitle}</h4>
          <p>{subsection.subsectionContent}</p>
        </div>
      ))
    ) : (
      null
    )}
  </article>
);

LifeContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    subsections: PropTypes.arrayOf(
      PropTypes.shape({
        subsectionTitle: PropTypes.string.isRequired,
        subsectionContent: PropTypes.string.isRequired,
        }).isRequired,
    ),
  }).isRequired,
}

LifeContent.defaultProps = {
  data: {
    title: '',
    content: [],
    subsections: null,
  },
}

export default LifeContent;
