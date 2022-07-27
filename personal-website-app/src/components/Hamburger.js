import React, { Suspense, lazy, useState } from 'react';

import { Link } from 'react-router-dom';
import routes from '../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="hamburger">
            <nav className="main" id="hamburger-nav">
                <ul>
                    { open ? (
                        <li className='hamburger close-hamburger'>
                            <div onClick={() => setOpen(!open)} className='menu-hover'>&#10005;</div>
                        </li>
                    ) : (
                        <li className='hamburger open-hamburger'>
                            <div onClick={() => setOpen(!open)} className='menu-hover'>&#9776;</div>
                        </li>
                    )}
                </ul>
            </nav>
            <Suspense fallback={<></>}>
                <Menu right isOpen={open}>
                    <ul className='hamburger-ul'>
                        {routes.map((l) => (
                            <li key={l.label}>
                                <Link to={l.path} onClick={() => setOpen(!open)}>
                                    <h3 className={l.index && 'index-li'}>{l.label}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Menu>
            </Suspense>
        </div>
    )
  
};

export default Hamburger;