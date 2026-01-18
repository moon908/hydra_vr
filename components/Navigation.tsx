"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { DiBrackets } from "react-icons/di";
import { useState, useEffect } from 'react';

const Navigation = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 py-2 sm:px-10 sm:py-1">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4 rounded-3xl transition-all duration-500 ${isScrolled
                    ? "bg-primary/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-white/10"
                    : "bg-white/5 backdrop-blur-md border-white/5 shadow-xl"
                    } border`}
            >
                <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="bg-gradient-to-br bg-neutral-100 p-2 rounded-xl shadow-[0_0_20px_rgba(192,183,232,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <DiBrackets className="text-xl text-primary" />
                    </div>
                    <span className="text-2xl font-black tracking-[0.3em] font-orbitron text-white group-hover:brightness-125 transition-all">HYDRA</span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-xs font-bold tracking-[0.2em] text-white/80 hover:text-white transition-all relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button className="hidden lg:block border border-white/30 hover:border-white/60 px-8 py-3 rounded-full text-xs font-bold tracking-[0.15em] text-white transition-all hover:bg-white/10 active:scale-95">
                        CONTACT US
                    </button>
                    <button className="gradient-btn px-8 py-3 rounded-full text-xs font-bold tracking-[0.15em] shadow-[0_0_25px_rgba(129,118,175,0.4)] hover:shadow-[0_0_35px_rgba(129,118,175,0.6)] active:scale-95">
                        JOIN HYDRA
                    </button>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navigation;