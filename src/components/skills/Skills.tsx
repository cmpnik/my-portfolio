import React from 'react';
import './style.css';
import skills from './data';

const Skills = () => {
    return (
        <div className="px-5 max-w-[1560px] mx-auto py-10">
            {/* Title Section */}
            <div className="mb-10">
                <div className="flex items-center">
                    <h2 className="font-semibold text-[32px] flex items-center gap-2">
                        <span className="text-[#007BFF]">#</span>skills
                    </h2>
                </div>
                <p className="text-lg text-[#333] leading-relaxed text-center max-w-[1200px] mx-auto mt-5">
                    Here are some of the technologies and programming languages I have experience with.
                </p>
            </div>
            {/* Icons */}
            <div className="max-w-[800px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center mx-auto">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                        <i className={`${skill.iconClass} text-5xl text-[#333]`}></i>
                        <span className="mt-2 text-sm text-[#333]">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
