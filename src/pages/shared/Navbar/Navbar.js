import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 64) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    const navMenus = <>
        <li><Link to='/home'>Home</Link></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <header className={`${scroll ? 'bg-primary' : 'bg-transparent'} sticky top-0 z-50 duration-300`}>
            <div className="custom-container">
                <div class="navbar text-white px-0">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navMenus}
                            </ul>
                        </div>
                        <Link to='/' class="normal-case text-xl font-bold">Murshedul</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {navMenus}
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <a href="https://drive.google.com/file/d/1-Enua2JZCo0EvY76UZTme6xlny2EQazP/view?usp=sharing" target='_blank' rel='noreferrer' className='py-1 px-3 bg-white hover:bg-transparent text-slate-800 hover:text-white font-semibold border-2 border-white transition duration-300'>Resume</a>
                    </div>
                </div>
            </div>
            {
                scroll && <a href="#top" className='text-xl hover:bg-primary hover:text-white hover:border-white border-2 border-slate-800 rounded-full p-2 fixed right-5 bottom-5 duration-300'><IoIosArrowUp /></a>
            }
        </header>
    );
};

export default Navbar;