import React from 'react';
import Section from './Section';

const skillCategories = [
    {
        title: "AI / ML Frameworks",
        skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy"],
        icon: "fa-robot"
    },
    {
        title: "Languages & Databases",
        skills: ["Python", "JavaScript", "TypeScript", "SQL", "MongoDB"],
        icon: "fa-database"
    },
    {
        title: "Frontend Development",
        skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
        icon: "fa-code"
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "GitHub", "Docker", "Jupyter Notebook", "VS Code"],
        icon: "fa-tools"
    },
];

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Technical Skills" className="bg-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                    <div key={category.title} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center mb-4">
                            <i className={`fas ${category.icon} text-2xl text-blue-400 mr-4`}></i>
                            <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span key={skill} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;