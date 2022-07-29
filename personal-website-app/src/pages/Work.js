import React from 'react';
// import PropTypes from 'prop-types';

import Main from '../layouts/Main';
import Job from '../components/Job.js';
import positions from '../data/positions';

// Work is a container for a list of Jobs populated from positions
const Work = () => (
    <Main title="Work" description="Jacob Phillips's work experience">
        <article className="post" id="work">
            <header>
                <div className='title'>
                    <h2>Work</h2>
                </div>
            </header>
            {positions.map((job) => (
            <Job data={job} key={job.company} />
            ))}
        </article>
        
    </Main>
)

export default Work;