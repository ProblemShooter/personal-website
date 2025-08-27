import React, { useRef, useState } from 'react';
import Section from './Section';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../src/emailConfig';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setSuccess(null);
        setError(null);

        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            formRef.current,
            EMAILJS_CONFIG.PUBLIC_KEY
        )
        .then(() => {
            setLoading(false);
            setSuccess("Message sent successfully!");
            formRef.current?.reset();
        })
        .catch(() => {
            setLoading(false);
            setError("Something went wrong. Please try again.");
        });
    };

    return (
        <Section id="contact" title="Get In Touch" className="bg-gray-950">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-300 mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow"
                            required
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {success && <p className="text-green-500 mt-4">{success}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}

                <div className="mt-12">
                    <p className="text-gray-400 mb-4">Or connect with me on social media:</p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/ProblemShooter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl sm:text-3xl">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aaditya-jauhari/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl sm:text-3xl">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/Jauhari_Aaditya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl sm:text-3xl">
                            <i className="fab fa-x-twitter"></i>

                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
