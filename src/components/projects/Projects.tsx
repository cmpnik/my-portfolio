// Projects.tsx
import React from 'react';
import './projects.css';
import projects from './data';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
    return (
        <div className="px-5 max-w-[1560px] mx-auto py-10">
            <div className="flex justify-between items-center gap-5 mb-10">
                <div className="w-2/3 font-medium text-[32px] flex items-center gap-2">
                    <div>
                        <span className="text-[#007BFF]">#</span>projects
                    </div>
                    <div className="line w-2/3 h-px bg-[#007BFF]"></div>
                </div>
                <div className="font-medium flex items-center gap-2">
                    <a href="#" className="flex items-center gap-1">
                        <span>View all</span>
                        <ArrowRightIcon className="h-5 w-5 text-[#007BFF]" />
                    </a>
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
        </div>
    );
};

export default Projects;
