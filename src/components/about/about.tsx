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
                        Hello! I’m a computer science student based in Christchurch, New Zealand, with a deep passion for programming, design, and development. I specialize in embedded systems and web development, constantly seeking new challenges and opportunities to grow. I thrive on solving complex problems with innovative solutions, and I'm always eager to explore various career pathways in the tech industry. Excited by the rapid advancements in technology, I look forward to where my journey will take me and how I can contribute to the field.
                    </p>
                    {/* Social Media Links */}
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-github-original text-3xl hover:text-gray-400"></i>
                        </a>
                        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-linkedin-plain text-3xl hover:text-gray-400"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
