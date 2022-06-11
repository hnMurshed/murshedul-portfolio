import React from 'react';
import { FaGithub } from "react-icons/fa";
import CustomLink from '../shared/CustomLink/CustomLink';

const Project = ({ img, title, description, liveLink, repoLink }) => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row px-0">
                <div className=" basis-1/2">
                    <img src={img} alt={`${title}`} class="w-full rounded-lg shadow-2xl" />
                </div>
                <div className=' basis-1/2'>
                    <h1 class="text-4xl font-bold">{title}</h1>
                    <p class="py-6">{description}</p>
                    <div className="flex items-center gap-3">
                        <CustomLink
                            href={liveLink}
                            isAnchor={true}
                        >Live View</CustomLink>
                        <a href={repoLink} target='_blank' rel='noreferrer'><FaGithub className='text-4xl' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;