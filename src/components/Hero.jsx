import React from 'react';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
                Creative Developer & Designer
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
                Building beautiful and user-centric experiences
            </p>

            <div className="flex gap-4 justify-center">
                <button
                    onClick={() => scrollToSection('projects')}
                    className="btn-primary"
                >
                    View My Work
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="btn-secondary"
                >
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export default Hero;
