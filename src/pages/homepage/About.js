import React from 'react';
import murshed from '../../images/murshedul.png';

const About = () => {
    return (
        <section className=' py-16' id='about'>
            <div className="custom-container">
                <div class="hero">
                    <div class="hero-content flex-col-reverse lg:flex-row gap-8 px-0">
                        <img src={murshed} alt="Murshedul Karim" class="max-w-sm rounded-lg" />
                        <div>
                            <h1 class="text-4xl font-bold text-primary">Who is Murshedul?</h1>
                            <p class="py-6">A curiosity-driven passionate Front-End Developer. I'm passionate to learn and explore new things to make myself updated. I'm happy to think about how to make things better. I feel so pleasured to work on problem solving, and when I manage to solve it, the amusement is out of word!</p>
                            <p>I had a passion to learn programming from my intermediate level. And I start exploring, learning, thinking, practicing. I personaly completed several projects. I love to code and create stunning project passing trough all the requirements for quality finish. </p>
                            <p class="py-6">I'm happy and love to do any of your work and provide things as you expect. Feel free to reach out and say hello! I promise I don't bite</p>
                            <a href="#contact" className='text-primary border-b-2 border-transparent hover:border-primary'>Get In Touch!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;