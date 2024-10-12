import React from 'react';
// import img1 from '/photos/1.jpg'

const Photos = () => {
    const imgs = {
        img1: '/photos/1.jpg',
        img2: '/photos/2.jpg',
        img3: '/photos/3.jpg',
        img4: '/photos/4.jpg',
        img5: '/photos/5.jpg',
        img6: '/photos/6.jpg'
    }
    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500 '>
                <h2 className='text-4xl font-medium'>Photos</h2>
                <h4>Memorable moments of our association</h4>
            </div>
            <div className='mx-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    Object.values(imgs).map((img, index) => (
                        <div key={index} className="shadow-md rounded-xl">
                            <figure className=" ">
                                <img className=''
                                    src={img}
                                    alt={`photos ${index+1}`}
                                />
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Photos;