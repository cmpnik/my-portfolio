import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="px-5 max-w-[1280px] mx-auto pb-20 flex flex-col justify-center ">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h2 className="font-semibold text-3xl md:text-4xl leading-tight">
                    About
                </h2>
            </div>

            {/* About Section */}
            <div className="flex justify-center">
                <div className="text-center">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[1280px] mx-auto">
                    Hello! I’m Nicholas Camp, a computer science student at the University of Canterbury in Christchurch, New Zealand, graduating in 2025. I have a strong interest in programming, design, and development and am excited to explore all opportunities in the tech industry. I enjoy tackling complex problems with innovative solutions and am constantly seeking new challenges and ways to grow. Driven by the rapid advancements in technology, I look forward to seeing where my journey will take me and how I can make a meaningful contribution to the field.
                </p>
                    {/* Social Media Links */}
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href="https://github.com/cmpnik" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-github-original text-3xl hover:text-gray-400"></i>
                        </a>
                        <a href="https://linkedin.com/in/nicholas-camp-2b2751318" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-linkedin-plain text-3xl hover:text-gray-400"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
