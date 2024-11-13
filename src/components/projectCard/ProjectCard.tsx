import React from 'react';
import { Project } from '../projects/data';
import { MarkGithubIcon } from '@primer/octicons-react';

type ProjectCardProps = Project;

const ProjectCard = ({ title, tags, disc, github, page }: ProjectCardProps) => {
    return (
        <div className="border border-gray-300 bg-white p-4 shadow-lg rounded-lg flex flex-col h-full relative">
            {/* Project title and description */}
            <div className="py-4 px-4 flex-1 text-center">
                <h2 className="text-2xl font-medium">{title}</h2>
                <div className="flex gap-2 p-2 justify-center">
                    {tags.map((tag) => (
                        <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="py-2">{disc}</p>
            </div>

            {/* Links to GitHub and Project */}
            <div className="px-4 pb-4 flex gap-2 justify-center max-w-md mx-auto">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 text-gray-800 rounded hover:bg-gray-200 duration-150"
                >
                    <MarkGithubIcon className="h-5 w-5" />
                    Github
                </a>
                {page && (
                    <a
                        href={page}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 text-gray-800 rounded hover:bg-gray-200 duration-150"
                    >
                        View
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
