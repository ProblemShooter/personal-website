import React from 'react';

// A component for the floating particles
const Particle: React.FC<{ size: string; position: { top: string; left: string }; delay: string; duration: string }> = ({ size, position, delay, duration }) => {
    const style: React.CSSProperties = {
        width: size,
        height: size,
        top: position.top,
        left: position.left,
        animationDelay: delay,
        animationDuration: duration,
        filter: 'blur(1px)',
    };
    return <div className="absolute rounded-full bg-purple-300/30" style={{ ...style, animation: `float ${duration} ease-in-out infinite` }}></div>;
};

const Hero: React.FC = () => {
    // Configuration for particles for a dynamic but not overwhelming look
    const particles = [
        { size: '3px', position: { top: '10%', left: '15%' }, delay: '0s', duration: '8s' },
        { size: '2px', position: { top: '25%', left: '80%' }, delay: '1s', duration: '10s' },
        { size: '4px', position: { top: '70%', left: '10%' }, delay: '2s', duration: '9s' },
        { size: '3px', position: { top: '85%', left: '50%' }, delay: '3s', duration: '7s' },
        { size: '2px', position: { top: '50%', left: '90%' }, delay: '0.5s', duration: '11s' },
        { size: '3px', position: { top: '5%', left: '40%' }, delay: '1.5s', duration: '8s' },
        { size: '4px', position: { top: '90%', left: '85%' }, delay: '2.5s', duration: '12s' },
        { size: '2px', position: { top: '40%', left: '5%' }, delay: '3.5s', duration: '9s' },
    ];

    return (
        <section id="home" className="relative w-full max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p, i) => <Particle key={i} {...p} />)}
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-4 text-center md:text-left order-2 md:order-1">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Aadtiya Jauhari
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Data | AI/ML | Software Engineering
                    </h2>
                    
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-white mb-2">About me</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I have a keen interest in automating tasks and integrating intelligence into systems. Experienced in developing high-accuracy predictive models and multi-agent systems. I enjoy contributing to initiatives that utilize distributed big data to understand functionalities that aid impactful organizational decision-making.
                        </p>
                    </div>

                    <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-gray-400">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Mumbai, Maharashtra</span>
                    </div>

                    <div className="mt-6 flex items-center justify-center md:justify-start gap-5">
                        <a href="https://www.linkedin.com/in/aaditya-jauhari/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a href="https://github.com/ProblemShooter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                           <i className="fab fa-github text-2xl"></i>
                        </a>
                         <a href="mailto:aadityajauhari01@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                           <i className="fas fa-envelope text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative flex justify-center items-center order-1 md:order-2">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Glowing border effect */}
                        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-2xl animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-50"></div>
                        
                        <img 
                            src="components\updated003.png" 
                            alt="Aadtiya Jauhari"
                            className="relative w-full h-full object-cover rounded-full p-1.5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;