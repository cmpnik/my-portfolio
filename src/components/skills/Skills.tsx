import React from 'react';
import './style.css';
import skills from './data';

const Skills = () => {
    return (
        <div className="px-5 max-w-[1280px] mx-auto pb-20">
            {/* Title Section */}
            <div className="text-center mb-16">
                <p className="font-semibold text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-[1200px] mx-auto">
                    I have experience with these technologies
                </p>

            </div>

            {/* Skills Grid */}
            <div className="max-w-[720px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center mx-auto">
                {skills.map((skill) => (
                    <div 
                        key={skill.name} 
                        className="flex flex-col items-center space-y-2"
                        aria-label={skill.name}
                    >
                        <i className={`${skill.iconClass} text-7xl`} aria-hidden="true"></i>
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
