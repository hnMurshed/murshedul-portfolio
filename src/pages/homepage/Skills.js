import React from 'react';
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";

const Skills = () => {
    return (
        <section className=' py-16'>
            <h2 className='text-5xl text-center font-bold text-primary'>Skills</h2>
            <div className="custom-container relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 text-[150px] text-primary font-bold py-24">
                    <div className="flex flex-col justify-center items-center">
                        <SiMongodb></SiMongodb>
                        <h4 className='text-2xl'>MongoDB</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiExpress></SiExpress>
                        <h4 className='text-2xl'>ExpressJs</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaReact></FaReact>
                        <h4 className='text-2xl'>React</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaNode></FaNode>
                        <h4 className='text-2xl'>NodeJs</h4>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <p style={{top: '33px', left: '85%', fontSize: '23px'}} className=' absolute text-blue-300'>HTML5</p>
                    <p style={{top: '0px', left: '100px', fontSize: '18px'}} className=' absolute text-blue-300'>Bootstrap</p>
                    <p style={{top: '55%', left: '-30px', fontSize: '14px'}} className=' absolute text-blue-300'>CSS3</p>
                    <p style={{top: '15%', left: '40%', fontSize: '18px'}} className=' absolute text-blue-300'>figma</p>
                    <p style={{top: '110%', left: '30%', fontSize: '18px'}} className=' absolute text-blue-300'>Photopea</p>
                    <p style={{top: '5%', left: '65%', fontSize: '12px'}} className=' absolute text-blue-300'>Tailwind</p>
                    <p style={{top: '100%', left: '75%', fontSize: '28px'}} className=' absolute text-blue-300'>JavaScript</p>
                    <p style={{top: '90%', left: '50%', fontSize: '15px'}} className=' absolute text-blue-300'>Firebase</p>
                    <p style={{top: '150px', left: '22%', fontSize: '16px'}} className=' absolute text-blue-300'>Git</p>
                    <p style={{top: '85%', left: '150px', fontSize: '20px'}} className=' absolute text-blue-300'>ES6</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;