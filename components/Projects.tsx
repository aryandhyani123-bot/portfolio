"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Target } from "lucide-react";

const projects = [

    {
        title: "Student Management System",
        description: "RESTful API for task tracking with secure authentication using JWT and Spring Security. Features role-based access control.",
        tags: ["Java", "Spring Security", "Hibernate", "MySQL", "JWT"],
        github: "https://github.com/aryandhyani123-bot/StudentManagementSystem",
    },
    {
        title: "Wagon R Showcase",
        description: "Interactive luxury showcase featuring scrollytelling and dynamic HUD overlays, built with Next.js and Framer Motion for an immersive experience.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
        github: "https://github.com/aryandhyani123-bot/wagnoR-web",
        demo: "https://wagno-r-web.vercel.app",
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work demonstrating secure and scalable solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 flex flex-col group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="w-10 h-10 text-cyan-500" />
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
