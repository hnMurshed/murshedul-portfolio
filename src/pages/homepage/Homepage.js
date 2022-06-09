import React from 'react';
import About from './About';
import Benner from './Benner';
import Skills from './Skills';

const Homepage = () => {
    return (
        <div>
            <Benner />
            <About />
            <Skills />
        </div>
    );
};

export default Homepage;