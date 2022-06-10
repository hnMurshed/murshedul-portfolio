import React from 'react';
import About from './About';
import Benner from './Benner';
import Contact from './Contact';
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
            <Contact />
        </div>
    );
};

export default Homepage;