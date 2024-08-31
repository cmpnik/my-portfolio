import React from 'react';
import './style.css';
import projects from './data';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
    return (
        <div className="px-5 max-w-[1560px] mx-auto py-10">
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center">
                    <h2 className="font-semibold text-[32px] flex items-center gap-2">
                        <span className="text-[#007BFF]">#</span>projects
                    </h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            img={project.img}
                            title={project.title}
                            tags={project.tags}
                            disc={project.disc}
                            github={project.github}
                            page={project.page}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <a href="#" className="font-medium flex items-center gap-1 text-[#007BFF]">
                    <button>View all</button>
                </a>
            </div>
        </div>
    );
};

export default Projects;
