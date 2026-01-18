'use client'


import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Volume2, Hand, Layers, Battery, Cpu } from 'lucide-react'

const headsetFeatures = [
    {
        icon: <Eye className="w-10 h-10" />,
        title: "Retina 8K Display",
        description: "Dual micro-OLED screens delivering 40 pixels per degree for unmatched visual fidelity."
    },
    {
        icon: <Volume2 className="w-10 h-10" />,
        title: "Spatial Audio Pro",
        description: "Adaptive soundscapes that react to your movement and environmental geometry."
    },
    {
        icon: <Hand className="w-10 h-10" />,
        title: "Neural Haptics",
        description: "Experience the sensation of touch with precision force feedback in your hands."
    },
    {
        icon: <Layers className="w-10 h-10" />,
        title: "Mixed Reality",
        description: "Seamlessly blend digital objects into your physical world with low-latency passthrough."
    },
    {
        icon: <Battery className="w-10 h-10" />,
        title: "24h Endurance",
        description: "Lightweight titanium-alloy battery pack designed for all-day immersive sessions."
    },
    {
        icon: <Cpu className="w-10 h-10" />,
        title: "Bionic Chipset",
        description: "Dedicated AI processor optimized for real-time environment mapping and tracking."
    }
]

const Features = () => {
    return (
        <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20 rounded-3xl overflow-hidden glass relative group">
                    <video
                        src="features.mp4"
                        muted
                        playsInline
                        className="w-full h-[500px] object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        ref={(video) => {
                            if (!video) return;
                            const observer = new IntersectionObserver(
                                ([entry]) => {
                                    if (entry.isIntersecting) {
                                        video.play().catch(() => { });
                                    } else {
                                        video.pause();
                                    }
                                },
                                { threshold: 0.1 }
                            );
                            observer.observe(video);
                            // Cleanup is handled by React if this was a ref object, 
                            // but for simplicity in functional assignment we just observe.
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-6xl font-orbitron font-black tracking-[0.2em] text-center"
                        >
                            ENGINEERED TO <span className="gradient-text">PERFECTION</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {headsetFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, backgroundColor: "rgba(192, 183, 232, 0.1)" }}
                            className="glass p-10 rounded-[40px] border border-white/5 group hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 text-accent group-hover:text-secondary group-hover:scale-110 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-secondary/70 leading-relaxed group-hover:text-secondary transition-colors duration-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features