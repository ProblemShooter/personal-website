import React from 'react';
import type { Activity } from '../types';
import Section from './Section';

const activitiesData: Activity[] = [
    {
        icon: <i className="fas fa-feather-alt text-3xl text-green-400"></i>,
        title: "AI Tech Blog Contributor",
        description: "Wrote and published articles on modern AI trends, model explainability, and multi-agent systems for a university tech publication.",
    },
    {
        icon: <i className="fas fa-users text-3xl text-orange-400"></i>,
        title: "Hackathon Contributor",
        description: "Contributed to HackUMass by developing a sustainability-focused application prototype and collaborating with a cross-functional team to deliver innovative solutions.",
    },
    {
        icon: <i className="fas fa-hands-helping text-3xl text-rose-400"></i>,
        title: "GSoC",
        description: "Contributed to Google Summer of Code (GSoC) by developing open-source solutions, writing clean and efficient code, and collaborating with mentors to deliver impactful project features."
        ,
    },
];

const Extracurricular: React.FC = () => {
    return (
        <Section id="activities" title="Extra-Curricular Activities" className="bg-gray-900">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {activitiesData.map((activity, index) => (
                    <div key={index} className="flex items-start p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full">

                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 mr-6">
                            {activity.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-100 mb-1">{activity.title}</h3>
                            <p className="text-gray-400">{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Extracurricular;