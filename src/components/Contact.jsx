import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 text-slate-900 dark:text-white transition-colors duration-300">
            <h2 className="section-title gradient-text">Get In Touch</h2>

            <form className="w-full max-w-xl mx-auto bg-white/40 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20 dark:border-slate-700" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input id="name" className="form-input" type="text" placeholder="Your Name" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input id="email" className="form-input" type="email" placeholder="Your Email" />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        className="form-input"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>
                </div>

                <button className="btn-primary w-full">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
