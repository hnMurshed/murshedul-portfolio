import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const xIcon = <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width={20} height={20} stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="relative">
                <div className="custom-container">
                    <div class="navbar text-white px-0">
                        <div class="navbar-start">
                            <div class="flex mr-4 lg:hidden">
                                <label onClick={() => setMenuOpen(!menuOpen)} tabindex="0" class="">
                                    {
                                        menuOpen ? xIcon : <FaBars className='mr-[4px]' />
                                    }
                                </label>
                                <ul tabindex="0" style={{paddingLeft: 'calc(7.5% - 16px)'}} class={`lg:hidden min-h-screen bg-primary menu menu-compact absolute top-full left-0 p-2 shadow w-52 duration-300 ${menuOpen ? ' translate-x-0' : ' -translate-x-52'} ${scroll ? 'bg-primary' : 'bg-[#0B121A]'}`}>
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
            </div>
            {
                scroll && <a href="#top" className='text-xl hover:bg-primary hover:text-white hover:border-white border-2 border-slate-800 rounded-full p-2 fixed right-5 bottom-5 duration-300'><IoIosArrowUp /></a>
            }
        </header>
    );
};

export default Navbar;