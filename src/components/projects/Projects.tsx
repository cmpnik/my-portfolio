import React from 'react';
import './style.css';
import projects from './data';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
    return (
        <div className="px-5 max-w-[1080px] mx-auto pb-20">
            {/* Centered Title Section */}
            <div className="mb-8 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl leading-tight">Projects</h2>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        tags={project.tags}
                        disc={project.disc}
                        github={project.github}
                        page={project.page}
                    />
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-10">
                <a href="#" className="font-medium text-gray-800 hover:underline">
                    View all
                </a>
            </div>
        </div>
    );
};

export default Projects;
