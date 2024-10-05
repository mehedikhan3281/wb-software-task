import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="mx-2 my-4 md:mt-4 flex md:gap-2 flex-col md:flex-row">
            <div className='bg-white rounded-sm p-4 mb-2 border-2 border-gray-300 md:w-1/2'>
                <div className=''>
                    <h2 className='text-3xl font-bold text-black'>Welcome to Greater Chattogram Association UK</h2>
                    <p className='font-normal text-lg'>Welcome to the Greater Chattogram Association (UK) is a non-governmental, non-profiting, non-political organisation working for the vast welfare of the greater Chattogramians in Bangladesh and in the United Kingdom without any discriminations of casts, class, creed, culture, sect, religion and community discriminations.</p>
                </div>
                <div className='mt-5'>
                    <Link href='/memberShip' className="text-white bg-purple-500 p-3 rounded-sm "><button>Become a member</button></Link>
                </div>
            </div>
            <div className='bg-white rounded-sm mb-2 p-1 border-2 border-gray-300 md:w-1/2 '>
                <iframe className=' w-full h-[315px]' src="https://www.youtube.com/embed/ISwnqW5d9mA?si=rAt2HV2fOz9V6zXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
            </div>
        </div>
    );
};

export default Banner;