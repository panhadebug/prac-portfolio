import React from 'react';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-20 text-slate-900 dark:text-white transition-colors duration-300">
            <h2 className="section-title gradient-text">About Me</h2>

            <div className="text-center max-w-3xl mx-auto text-slate-800 dark:text-slate-200 px-4 font-medium">
                <p className="mb-4 text-lg leading-relaxed">
                    I'm a passionate full-stack developer with years of experience.
                </p>
                <p className="text-lg leading-relaxed">
                    I specialize in modern JavaScript, UI/UX, and high-quality web apps.
                </p>
            </div>
        </section>
    );
};

export default About;
