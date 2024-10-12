'use client'

import React, { useEffect, useState } from 'react';

const PhotosLoader = () => {
    const imgs = {
        img1: '/photos/1.jpg',
        img2: '/photos/2.jpg',
        img3: '/photos/3.jpg',
        img4: '/photos/4.jpg',
        img5: '/photos/5.jpg',
        img6: '/photos/6.jpg'
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); 
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500 '>
                <h2 className='text-4xl font-medium'>Photos</h2>
                <h4>Memorable moments of our association</h4>
            </div>
            <div className='mx-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    loading ? (
                        Array(6).fill().map((_, index) => (
                            <div key={index} className="shadow-md rounded-xl animate-pulse bg-gray-300">
                                <div className="h-64 w-full bg-gray-200"></div>
                            </div>
                        ))
                    ) : (
                        Object.values(imgs).map((img, index) => (
                            <div key={index} className="shadow-md rounded-xl">
                                <figure className="">
                                    <img className='' src={img} alt={`photos ${index + 1}`} />
                                </figure>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default PhotosLoader;
