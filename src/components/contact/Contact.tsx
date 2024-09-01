import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="px-5 max-w-[1560px] mx-auto py-10">
            <div className="mb-10">
                <div className="flex items-center">
                    <h2 className="font-semibold text-[32px] flex items-center gap-2">
                        <span className="text-[#007BFF]">#</span>contact
                    </h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-10 pt-8 pb-10 max-w-[800px] w-full">
                    <div className="mb-6">
                        <label className="block text-gray-800 text-lg font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow-md border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 text-lg font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow-md border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 text-lg font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="shadow-md border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                            placeholder="Your Message"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-[#007BFF] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
