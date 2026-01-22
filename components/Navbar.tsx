"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="glass-card rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl"
            >
                <a href="#" className="block transition-transform hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    <Image
                        src="/logo-v2.png"
                        alt="Aryan Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded-full bg-white/10"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="w-px h-4 bg-slate-800 mx-2" />
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/aryandhyani123-bot" className="text-slate-400 hover:text-white transition-colors" target="_blank">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-dhyani/" className="text-slate-400 hover:text-white transition-colors" target="_blank">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aryan.dhyani2004@gmail.com" className="text-slate-400 hover:text-white transition-colors" target="_blank">
                            <Mail className="w-4 h-4" />
                        </a>
                        <a href="/resume.pdf" className="text-slate-400 hover:text-white transition-colors" target="_blank" title="Resume">
                            <FileText className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 glass-card rounded-2xl p-6 flex flex-col items-center gap-6 md:hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-slate-300 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-6 mt-2">
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
