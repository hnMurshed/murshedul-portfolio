import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { photo, name, comment } = testimonial
    return (
        <div className="flex items-start gap-4 border-2 border-slate-300 hover:border-slate-800 rounded p-5">
            <img className=' w-16 rounded-full' src={photo} alt={name} />
            <div className="">
                <q>{comment}</q>
                <p className='mt-5 italic'>- {name}</p>
            </div>
        </div>
    );
};

export default Testimonial;