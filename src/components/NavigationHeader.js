import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../data/routes';

const NavigationHeader = () => (
    <header id="header">
        {/* the link to home in h1 */}
        <h1 className='index-link'>
            {routes.filter((l) => l.index).map((l) => (
                <Link key={l.label} to={l.path}>{l.label}</Link>
            ))}
        </h1>

        {/* the links to other pages in ul */}
        <nav className="links">
            <ul>
                {routes.filter((l) => !l.index).map((l) => (
                    <li key={l.label}>
                        <Link to={l.path}>{l.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>

        {/* the hamburger menu that open/close with links to other pages */}
        <Hamburger />
    </header>
)

export default NavigationHeader;