import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from '../data/contact';

const ContactIcons = () => (
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

export default ContactIcons;