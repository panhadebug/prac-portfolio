import React from 'react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality and payment integration.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    },
    {
        title: 'Task Management App',
        description: 'Productivity tool for teams to track progress and collaborate efficiently.',
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
    },
    {
        title: 'Portfolio Website',
        description: 'Modern portfolio template for developers and designers.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather tracking application with interactive maps.',
        tags: ['React', 'OpenWeatherMap', 'Chart.js'],
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
            <h2 className="section-title gradient-text">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white/40 dark:bg-slate-900/60 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg border border-white/20 dark:border-slate-700"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-white/50 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-white/20 dark:border-slate-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
