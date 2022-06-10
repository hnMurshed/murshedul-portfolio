import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-primary text-center py-16'>
            <Link to='/' className='text-white text-2xl font-bold'>Murshedul</Link>
            <p className='text-white text-xl my-6'>Exploring, learning, thinking, & working <br />are the things I love to do</p>
            <div className="flex items-center justify-center gap-5 text-white text-2xl">
                <a href='https://twitter.com/KarimMurshedul' target='_blank' rel='noreferrer' className='border-2 border-slate-400 hover:bg-white hover:text-primary duration-300 p-3 rounded-full'><FaTwitter /></a>
                <a href='https://www.linkedin.com/in/md-murshedul-227747192/' target='_blank' rel='noreferrer' className='border-2 border-slate-400 hover:bg-white hover:text-primary duration-300 p-3 rounded-full'><FaLinkedinIn /></a>
                <a href='https://github.com/hnMurshed' target='_blank' rel='noreferrer' className='border-2 border-slate-400 hover:bg-white hover:text-primary duration-300 p-3 rounded-full'><FaGithub /></a>
                <a href='https://www.facebook.com/profile.php?id=100018453097136' target='_blank' rel='noreferrer' className='border-2 border-slate-400 hover:bg-white hover:text-primary duration-300 p-3 rounded-full'><FaFacebookF /></a>
                <a href='murshedbinamir@gmail.com' target='_blank' rel='noreferrer' className='border-2 border-slate-400 hover:bg-white hover:text-primary duration-300 p-3 rounded-full'><HiOutlineMail /></a>
            </div>
            <p className='text-white my-4'>Developed and designed by me</p>
            <p className='text-white my-4'>Copywrite &copy; {new Date().getFullYear()} All rights reserved</p>
        </footer>
    );
};

export default Footer;