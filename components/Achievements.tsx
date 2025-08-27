import React from 'react';
import type { Achievement } from '../types';
import Section from './Section';

const achievementsData: Achievement[] = [
    {
        icon: <i className="fas fa-trophy text-3xl text-yellow-400"></i>,
        title: "Kaggle Competitions Top 5%",
        description: "Placed in the top 5% in the 'Titanic: Machine Learning from Disaster' and other featured Kaggle competitions.",
    },
    {
        icon: <i className="fas fa-chalkboard-teacher text-3xl text-purple-400"></i>,
        title: "Presenter at University AI Symposium",
        description: "Selected to present original research on multi-agent systems and their application in predictive modeling to faculty and peers.",
    },
    {
        icon: <i className="fas fa-certificate text-3xl text-indigo-400"></i>,
        title: "Certified TensorFlow Developer",
        description: "Earned the official Google certification for building and training machine learning models using TensorFlow.",
    },
    {
        icon: <i className="fas fa-medal text-3xl text-blue-400"></i>,
        title: "Another Certification",
        description: "Some other relevant achievement description.",
    },
];

const Achievements: React.FC = () => {
    return (
        <Section id="achievements" title="Achievements" className="bg-gray-950/50">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievementsData.map((achievement, index) => (
                    <div
                        key={index}
                        className="flex items-start p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 mr-6">
                            {achievement.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-100 mb-1">{achievement.title}</h3>
                            <p className="text-gray-400">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
