import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <section>
            <div className="custom-container">
                <h2 className='text-5xl text-center font-bold text-primary mb-10'>Clients' Valuable Words</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        testimonials.map(testimonial => <Testimonial
                            key={testimonial._id}
                            testimonial={testimonial}
                        ></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;