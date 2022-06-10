import React from 'react';
import { FaHandshake } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import CustomLink from '../shared/CustomLink/CustomLink';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_4elbrwp', 'template_w24q37n', e.target, 'dUubrpR687g_uWeFM')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section className='py-16' id='contact'>
            <div className="custom-container">
                <h2 className='text-5xl text-center font-bold text-primary mb-10'>Contact Me</h2>
                <div className="flex">
                    <div className=" basis-1/3 flex items-center">
                        <div className="w-full bg-gradient-to-r from-[#6D83F2] to-primary text-white text-center py-20 rounded-l-lg">
                            <FaHandshake className='text-[150px] mx-auto' />
                            <h4 className='text-xl font-bold mb-5'>Thank You</h4>
                            <p>Love to build long-term relationship</p>
                        </div>
                    </div>
                    <div className=" basis-2/3 shadow-xl rounded-lg px-6 py-10">
                        <form onSubmit={sendEmail}>
                            <div className="flex flex-col lg:flex-row gap-5 mb-5">
                                <div className="w-full">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" name="name" id="name" placeholder='Johnkar Mahbub' className='w-full border py-2 px-3' required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" name="user-email" id="email" placeholder='example@gmail.com' className='w-full border py-2 px-3' required />
                                </div>
                            </div>
                            <label htmlFor="message">Message*</label>
                            <textarea name="message" id="message" cols="10" rows="8" placeholder='Hey, there!' className='w-full border py-2 px-3' required></textarea>
                            <div className="mt-5 text-end">
                                <CustomLink
                                    isSubmit={true}
                                >Send</CustomLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;