import React from 'react';
// import Link from 'react-router-dom';

import Main from '../layouts/Main';

const Home = () => (
    <Main>
        <article className="post" id="home">
        <header>
            <div className="title">
                <h2 data-testid="heading"> The website</h2>
                <p>
                    this is my website
                </p>
            </div>
        </header>
        <p>
            this is my website even more with links to come
        </p>
        </article>
    </Main>
);

export default Home;