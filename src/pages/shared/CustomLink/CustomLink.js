import React from 'react';

const CustomLink = ({href, children, isAnchor, isSubmit}) => {
    return (
        <>
            {
                isAnchor && <a href={href} target='_blank' rel='noreferrer' className=' inline-block capitalize text-white tracking-wide bg-gradient-to-r hover:bg-gradient-to-l from-[#6D83F2] to-primary border-0 rounded px-3 py-2'>{children}</a>
            }
            {
                isSubmit && <input type="submit" value={children} className=' inline-block capitalize text-white tracking-wide bg-gradient-to-r hover:bg-gradient-to-l from-[#6D83F2] to-primary border-0 rounded px-3 py-2'/>
            }
        </>
    );
};

export default CustomLink;