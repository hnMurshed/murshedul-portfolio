import React from 'react';
import CustomLink from '../shared/CustomLink/CustomLink';
import Project from './Project';

const Projects = () => {
    return (
        <section className='py-16'>
            <div className="custom-container">
                <h2 className='text-5xl text-center font-bold text-primary mb-10'>Projects</h2>
                <Project
                    title='Vegetable House'
                    description="A vegetable warehouse management website. It allows a user to manage inventories of any product. User can able to do add new product and also can update stock of existing product. Overall it's a inventory management website"
                    liveLink='https://vegetable-house-by-murshedul.web.app/'
                    repoLink='https://github.com/hnMurshed/warehouse-management-website-client'
                ></Project>
                <div className="divider"></div>
                <Project
                    title='Superr Tools'
                    description="This website is developed and designed for a tools manufacturer company where the company can display their products, take online online booking, and get payment. The company can manage products, users, order, or add new product."
                    liveLink='https://superr-tools.web.app/'
                    repoLink='https://github.com/hnMurshed/superr-tools-manufacturer-website'
                ></Project>
                <div className="divider"></div>
                <Project
                    title='Best Photography'
                    description="Developed and designed for a single person to sell photography service. Implemented sign-in, signup, and sign-out system with firebase authentication. User can book any service"
                    liveLink='https://best-photography-by-murshedul.web.app/'
                    repoLink='https://github.com/hnMurshed/best-photography'
                ></Project>
            </div>
        </section>
    );
};

export default Projects;