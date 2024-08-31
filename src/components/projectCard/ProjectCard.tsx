import React from 'react';
import { Project } from '../projects/data';
import { MarkGithubIcon } from '@primer/octicons-react';

type ProjectCardProps = Project;

const ProjectCard = ({ img, title, tags, disc, github, page }: ProjectCardProps) => {
    return (
        <div className="border border-[#ABB2BF] p-0 shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div>
                <img src={img} alt={title} className="w-full h-auto object-cover" />
            </div>
            <div className="py-4 px-6 flex-1">
                <h2 className="text-2xl font-medium">{title}</h2>
                <div className="flex gap-2 p-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="py-4">{disc}</p>
            </div>
            <div className="px-6 pb-6 flex gap-2 justify-center">
                <a
                    href={github}
                    className="inline-flex items-center gap-2 py-2 px-4 border border-[#007BFF] text-[#007BFF] rounded hover:bg-[#007BFF33] duration-150"
                >
                    <MarkGithubIcon className="h-5 w-5" />
                    Github
                </a>
                <a
                    href={page}
                    className="inline-flex items-center gap-2 py-2 px-4 border border-[#007BFF] text-[#007BFF] rounded hover:bg-[#007BFF33] duration-150"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
