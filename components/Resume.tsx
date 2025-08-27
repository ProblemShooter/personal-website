import React from 'react';
import Section from './Section';

const Resume: React.FC = () => {
    const handleDownload = () => {
        // In a real application, you would link to your actual resume file.
        // For this example, we'll just open a placeholder.
        window.open('./resume 01.pdf', '_blank');
    };

    return (
        <Section id="resume" title="My Resume" className="bg-gray-900">
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-gray-300 mb-8">
                    Interested in learning more about my professional experience and qualifications? You can view or download my full resume here.
                </p>
                <button
                    onClick={handleDownload}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
                >
                    <i className="fas fa-download mr-2"></i>
                    View Resume
                </button>
            </div>
        </Section>
    );
};

export default Resume;