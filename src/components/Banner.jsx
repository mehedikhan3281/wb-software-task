import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="mx-2 my-4 md:mt-4 flex md:gap-2 flex-col md:flex-row">
            
            <div className='bg-white rounded-sm py-8 px-5 mb-2 border-2 border-gray-300 md:w-1/2 justify-center'>
                {/* text section  */}
                <div className=''>
                    <h2 className='text-3xl font-bold text-black '>Learn the Skills you Need to Succeed.</h2>
                    <p className='font-normal text-lg my-10'>Best IT Training Institute in Dinajpur, Bangladesh with Instructor-led Live and Interactive Classes from Experienced Working Professionals, with 100% Placement Assistance.</p>
                </div>
                
                <div className='mt-16'>
                    <Link href='/#' className="text-white bg-purple-500 py-3  px-6 font-semibold rounded-3xl "><button>Become a member</button></Link>
                </div>
            </div>
            {/* youtube section  */}
            <div className='bg-white rounded-sm mb-2 p-1 border-2 border-gray-300 md:w-1/2 '>
                <img src='./ban.svg'/>
            </div>
        </div>
    );
};

export default Banner;