'use client';
import React, { useState } from 'react';

const Contacts = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // State to handle submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        console.log('Form Data:', formData);
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await fetch('https://itderbd.nextwebservice.com/api/save-contact-form-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Get error details from response
                console.error('API Error:', errorData); // Log the error details
                setErrorMessage('Failed to send message. Please try again.');
                return;
            }        

            if (response.ok) {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
            } else {
                setErrorMessage('Failed to send message. Please try again.');
            }
        } catch (error) {

            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500 '>
                <h2 className='text-4xl font-medium'>Contact Us</h2>
                <h4>Get in touch with us</h4>
            </div>
            <div className='flex-row md:flex'>
                <div className="border_shadow mx-2 mt-2 md:w-1/2 bg-white p-6 text-center flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="text-lg"><span className="font-semibold">Email :</span> infogcauk@gmail.com</p>
                    <p className="text-lg"><span className="font-semibold">Phone :</span> +447999946311, +447550448928, +447932612667</p>
                    <p className="text-lg"><span className="font-semibold">Address :</span> Chattogram Centre, 113 New Road, Whitechapel, London E1 1HJ</p>
                </div>

                <div className='border_shadow mx-2 mt-2 md:w-1/2 bg-white p-6'>
                    <div className="max-w-lg mx-auto p-4">
                        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Subject <span className="text-red-500">*</span></label>
                                <textarea
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full h-12 p-2 border border-gray-300 rounded"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="w-full h-28 p-2 border border-gray-300 rounded"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>

                        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
