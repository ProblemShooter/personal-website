import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me" className="bg-gray-900">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0">
                    <img
                        src="https://picsum.photos/seed/james-dev/40"
                        alt="James"
                        className="rounded-full w-full h-full object-cover border-4 border-blue-500/50 shadow-lg"
                    />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-lg text-gray-300 mb-4">
                        Hello! I'm Aadtiya Jauhari, a passionate developer with a deep interest in Artificial Intelligence and Machine Learning. My journey in tech is driven by a curiosity to solve complex problems and create impactful solutions.
                    </p>
                    <p className="text-lg text-gray-300">
                        From building deep learning models to detect deepfakes to crafting responsive and dynamic web applications with React, I love bringing ideas to life. When I'm not coding, I enjoy reading about the latest AI breakthroughs and contributing to open-source projects.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;