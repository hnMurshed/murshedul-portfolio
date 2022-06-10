import React from 'react';
import { FaGithub } from "react-icons/fa";
import CustomLink from '../shared/CustomLink/CustomLink';

const Project = ({ title, description, liveLink, repoLink }) => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row">
                <div className=" basis-1/2">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
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