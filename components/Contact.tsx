"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute -left-20 bottom-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl"
                >
                    <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                                <Mail className="w-6 h-6" />
                            </div>
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Email</span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aryan.dhyani2004@gmail.com" className="text-lg font-semibold hover:text-cyan-400 transition-colors" target="_blank">
                                aryan.dhyani2004@gmail.com
                            </a>
                        </div>

                        <div className="hidden md:block w-px h-16 bg-slate-800" />

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/aryan-dhyani/" className="text-lg font-semibold hover:text-cyan-400 transition-colors" target="_blank"
                                rel="noopener noreferrer">
                                www.linkedin.com/in/aryan-dhyani/
                            </a>
                        </div>
                    </div>

                    <div className="mt-12">
                        <a href="https://www.instagram.com/aryan_dhyani_/" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all" target="_blank">
                            Say Hello
                        </a>
                    </div>
                </motion.div>

                <footer className="text-slate-500 text-sm pt-20">
                    <p>© {new Date().getFullYear()} Aryan. Built with Next.js & Tailwind based on system aesthetics.</p>
                </footer>
            </div>
        </section>
    );
}
