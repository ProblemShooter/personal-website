import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, tags, githubUrl, demoUrl } = project;

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col p-6">
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto pt-4 flex justify-between items-center gap-4">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 font-semibold hover:underline"
                    >
                        View on GitHub <i className="fab fa-github ml-2"></i>
                    </a>
                    {demoUrl && (
                         <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View Demo <i className="fas fa-external-link-alt ml-2"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;