import React, { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-100">
                    {title}
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded"></div>
                </h2>
                {children}
            </div>
        </section>
    );
};

export default Section;