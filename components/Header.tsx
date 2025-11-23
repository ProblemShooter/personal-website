import React, { useState, useEffect, useRef } from 'react';

const navLinks = ['Home', 'Projects', 'Skills', 'Achievements', 'Activities', 'Resume', 'Contact'];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const observer = useRef<IntersectionObserver | null>(null);

    // Handle background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle active section on scroll
    useEffect(() => {
        const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));
        
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-15% 0px -85% 0px' } // Triggers when the top of a section is 15% from the top of the viewport
        );
        
        sections.forEach(section => {
            if (section) {
                observer.current?.observe(section);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.current?.unobserve(section);
                }
            });
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const getLinkClass = (link: string) => {
        const isActive = activeSection === link.toLowerCase();
        return `transition-colors capitalize ${isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`;
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    A.J
                </a>
                
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link); }} className={getLinkClass(link)}>
                            {link}
                        </a>
                    ))}
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 shadow-xl">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link); }} className={getLinkClass(link)}>
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;