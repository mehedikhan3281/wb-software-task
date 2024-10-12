'use client'

import React, { useState } from 'react';
import Modal from 'react-modal';

// Data for images
const imgs = [
    '/photos/1.jpg',
    '/photos/2.jpg',
    '/photos/3.jpg',
    '/photos/4.jpg',
    '/photos/5.jpg',
    '/photos/6.jpg',
];

// Custom styles for modal
const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        border: 'none',
        background: 'transparent',
        width: '70vw', // 70% of the screen width
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
};

const Photos = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to open the modal and set the clicked image index
    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Function to handle next image
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % imgs.length);
    };

    // Function to handle previous image
    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length);
    };

    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500'>
                <h2 className='text-4xl font-medium'>Photos</h2>
                <h4>Memorable moments of our association</h4>
            </div>

            <div className='mx-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    imgs.map((img, index) => (
                        <div
                            key={index}
                            className="shadow-md rounded-xl relative overflow-hidden group"
                            onClick={() => openModal(index)}
                        >
                            <img
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                src={img}
                                alt={`Photo ${index + 1}`}
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                    ))
                }
            </div>

            {/* Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={customModalStyles}
            >
                <div className='relative'>
                    <button
                        onClick={closeModal}
                        className='absolute top-0 right-0 px-4 py-2 border-2 text-white rounded-full'
                    >
                        X
                    </button>

                    <div className='flex justify-center items-center'>
                        <button onClick={prevImage} className='text-white text-5xl font-semibold p-4'>{'<'}</button>
                        <div className="w-full h-0" style={{ paddingBottom: '56.25%', position: 'relative' }}> 
                            <img 
                                src={imgs[currentIndex]} 
                                alt={`Slider Image ${currentIndex + 1}`} 
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                        <button onClick={nextImage} className='text-white text-5xl font-semibold p-4'>{'>'}</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Photos;
