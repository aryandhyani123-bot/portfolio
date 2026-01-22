"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorShadow() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 64); // Center the 128px circle
            cursorY.set(e.clientY - 64);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-[-1] hidden md:block" // Hidden on mobile, behind content
            style={{
                left: cursorXSpring,
                top: cursorYSpring,
            }}
        >
            <div className="w-32 h-32 rounded-full bg-cyan-500/20 blur-[60px]" />
        </motion.div>
    );
}
