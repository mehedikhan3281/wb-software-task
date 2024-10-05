import React from 'react';

const About = () => {
    return (
        <div className='mt-4 min-h-lvh'>
            <div className='text-center text-white p-16 m-2 my-4 text-4xl font-medium bg-blue-500 '><h2>About Us</h2></div>
            <div className='relative bg-white  '>
                <div className='w-full h-auto mx-2 p-4 absolute z-10  opacity-0 hover:opacity-[30%] transition-opacity ease-in-out  duration-500 flex justify-center'>
                    <img className='h-24 w-24 ' src="/logo.png" alt="" />
                </div>
                <div className="absolute z-1  border-2 border-gray-300 p-4 mx-2 text-md font-normal bg-transparent shadow-md shadow-gray-300 hover:border-2 hover:border-green-400">
                    <p className=''>Greater Chattogram Association (UK) is a social organisation formed for the welfare of Chattogramians living & working in the United Kingdom as well as for assisting the development of Greater Chattogram in social and economic sectors. The aim of the organisation is to assist the very needy in health, education and shelter in the Greater Chattogram Area and also to assist the Chattogramians living and working in the UK to promote the Bengali culture while integrating within the British Culture. We hope to achieve this by way of engaging ourselves in diverse range of activities within the framework of charitable, cultural, educational, training, sporting, seminars, exhibitions and presentations.</p>
                </div>
            </div>
            
        </div>
    );
};

export default About;