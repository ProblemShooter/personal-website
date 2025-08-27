import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Extracurricular from './components/Extracurricular';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen w-full text-white antialiased">
            <Header />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Achievements />
                <Extracurricular />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;