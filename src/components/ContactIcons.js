import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contact';

function ContactIcons() {
  return (
    <ul className="icons">
      {data.map((d) => (
        <li key={d.label}>
          <a href={d.link}>
            <FontAwesomeIcon icon={d.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactIcons;
