"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I am a dedicated <span className="text-white font-medium">Java Developer</span> with a strong foundation in building robust, scalable backend systems. My expertise lies in designing efficient APIs, optimizing database queries, and ensuring seamless integration between services.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Beyond the backend, I am passionate about modern web technologies and have explored frontend development with frameworks like <span className="text-white font-medium">Next.js</span> to build complete, full-stack solutions. I thrive in collaborative environments and am always eager to tackle complex engineering challenges.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold text-cyan-400">25+</span>
                            <span className="text-sm text-slate-500 uppercase tracking-wider">DSA solved questions</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold text-cyan-400">10+</span>
                            <span className="text-sm text-slate-500 uppercase tracking-wider">Projects</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual/Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-md md:max-w-[600px] aspect-[600/615] rounded-2xl overflow-hidden glass-card group mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <span className="text-slate-700 text-xl font-mono">
                            <img className="rounded-2xl w-full h-full object-cover" src="/images/WhatsApp-Image.jpeg" alt=" " />
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
