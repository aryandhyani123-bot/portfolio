"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Backend", items: ["Java", "Microservices", "REST APIs"] },
    { category: "Database", items: ["MySQL", "Redis"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"] },
    { category: "Tools & DevOps", items: ["Git"] },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 bg-slate-950/50">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl hover:border-cyan-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">{group.category}</h3>
                            <ul className="space-y-2">
                                {group.items.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-slate-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
