import React from 'react';
import "./Accordions.css"
import { useState } from 'react';

function Accordions({title, content}, index) {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
        <section key={index} className='p-5 border-2 rounded-2xl w-full sm:w-3/4 lg:w-1/2'>
            <div className=' flex justify-between'>
                <div>{title}</div>
                <div onClick={() => setIsActive(!isActive)} className=' border-2 w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer'>
                    <p className='mb-2 text-4xl font-bold'>{isActive ? "-": "+"}</p>
                </div>
            </div>

            <div>
                {isActive && <p>{content}</p>}
            </div>
        </section>
    </>
  );
};

export default Accordions;