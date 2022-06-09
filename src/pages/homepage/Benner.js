import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import bennerBg from '../../images/banner-bg.jpg';
import './stylesheets/Benner.css';

const sectionStyle = {
    marginTop: '-64px',
    backgroundImage: `url(${bennerBg})`,
    backgroundRepeat: 'no-repeate',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
}

const Benner = () => {
    return (
        <section style={sectionStyle} className=' h-screen'>
            <div className="benner-overlay-div h-screen">
                <div className="custom-container h-screen flex items-center justify-between">
                    <div className="text-white">
                        <h5 className='text-xl mb-1'>Hello, I'm</h5>
                        <h2 className='uppercase text-4xl font-bold'>Murshedul Karim</h2>
                        <h4 className='text-2xl'>Junior Front-end Developer</h4>
                        <Link to='' className='btn uppercase tracking-wide bg-gradient-to-r hover:bg-gradient-to-l from-[#6D83F2] to-primary border-0 my-6'>Hire me now</Link>
                        <div className="flex items-center gap-5 text-4xl">
                            <a href='https://github.com/hnMurshed' target='_blank' rel='noreferrer'><FaGithub className='text-white'/></a>
                            <a href='https://www.linkedin.com/in/md-murshedul-227747192/' target='_blank' rel='noreferrer'><FaLinkedin className='text-[#fff]' /></a>
                            <a href='https://www.linkedin.com/in/md-murshedul-227747192/' target='_blank' rel='noreferrer'><FaTwitter className='text-[#fff]' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benner;