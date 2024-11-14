import React, { useState, ChangeEvent, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [formKey, setFormKey] = useState(0); // Key to force remount on form reset
    const [state, handleSubmit] = useForm("mkgnbgjv");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Your message has been sent!");
            setFormData({ name: '', email: '', message: '' });
            setFormKey((prevKey) => prevKey + 1); // Trigger form remount
        }
    }, [state.succeeded]);

    return (
        <div id="contact" className="px-4 max-w-[1280px] mx-auto pb-16">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <div className="text-center mb-8">
                <h2 className="font-semibold text-3xl md:text-4xl leading-tight mb-4">Contact</h2>
                <p className="text-base md:text-lg text-[#333] leading-relaxed mx-auto">
                    I’d love to connect! Whether you have a question, opportunity, or just want to say hi, feel free to reach out through this form.
                </p>
            </div>

            <div className="max-w-[640px] mx-auto border border-gray-300 bg-white shadow-lg rounded-lg p-8">
                <div className="text-center mb-5">
                    <h3 className="text-3xl font-semibold text-gray-700">Get in Touch</h3>
                    <p className="text-md text-gray-600 mt-2">
                        Fill out the form below, and I'll be sure to get back to you as soon as possible.
                    </p>
                </div>

                <form onSubmit={handleSubmit} key={formKey}>
                    {['name', 'email', 'message'].map((field) => (
                        <div key={field} className="mb-5">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor={field}>
                                {field === 'name' ? 'Name' : field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            {field !== 'message' ? (
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    id={field}
                                    value={formData[field as keyof FormData]}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    placeholder={field === 'name' ? 'Your Name' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                    required
                                />
                            ) : (
                                <textarea
                                    name={field}
                                    id={field}
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    placeholder="Your Message"
                                    required
                                />
                            )}
                        </div>
                    ))}

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold py-2 px-5 rounded-md shadow-lg hover:bg-gray-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4 text-xs text-gray-500">
                    <p>Powered by Formspree</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
