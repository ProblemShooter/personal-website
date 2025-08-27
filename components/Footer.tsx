import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-6">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Aadtiya Jauhari. All rights reserved.</p>
                <p className="text-sm mt-1">Built with React, Tailwind CSS, and a passion for AI.</p>
            </div>
        </footer>
    );
};

export default Footer;