import React from 'react';
import About from './About';
import Benner from './Benner';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';

const Homepage = () => {
    return (
        <div>
            <Benner />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
        </div>
    );
};

export default Homepage;