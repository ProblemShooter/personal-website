import React from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './Section';

const projectData: Project[] = [
    {
        title: "Multi-Agent Recommendation System",
        description: "A system using collaborative and content-based filtering for personalized content delivery, built on a multi-agent architecture for scalability.",
        tags: ["Python", "Scikit-learn", "Pandas", "Multi-Agent Systems"],
        githubUrl: "https://github.com",
        demoUrl: "#",
    },
    {
        title: "Real-Time Financial Fraud Detection",
        description: "A deep learning model using LSTMs to detect fraudulent transactions in real-time financial data streams with high accuracy.",
        tags: ["Python", "TensorFlow", "Keras", "Deep Learning"],
        githubUrl: "https://github.com",
         demoUrl: "#",
    },
    {
        title: "Developer Portfolio Website",
        description: "A responsive personal portfolio built with modern frontend technologies to showcase skills, projects, and achievements.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com",
        demoUrl: "#",
    },
];

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="My Projects" className="bg-gray-950/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;