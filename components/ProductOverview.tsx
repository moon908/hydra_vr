'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Headphones, Layout, Zap } from 'lucide-react'

const features = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Dual 4K Displays",
        description: "Experience hyper-realistic visuals with 120Hz refresh rate and ultra-wide FOV."
    },
    {
        icon: <Headphones className="w-8 h-8" />,
        title: "3D Spatial Audio",
        description: "Next-gen acoustic technology that maps sound to your physical environment."
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Ergonomic Build",
        description: "Balanced weight distribution and breathable materials for extended sessions."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Pro Tracking",
        description: "6DOF inside-out tracking with sub-millimeter precision for total control."
    }
]

const ProductOverview = () => {
    return (
        <section className="py-20 px-6 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content and Features */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
                                BEYOND THE <span className="gradient-text uppercase">Horizon</span>
                            </h2>
                            <p className="text-secondary text-lg max-w-xl">
                                Our most advanced headset yet. Precision-engineered to deliver the most immersive VR experience possible, blending the line between reality and the digital frontier.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-6 rounded-2xl flex flex-col gap-4 group cursor-pointer"
                                >
                                    <div className="text-accent group-hover:text-secondary transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-orbitron font-bold text-xl">{feature.title}</h3>
                                    <p className="text-secondary/80 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Interactive Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full" />
                        <motion.img
                            src="/headset.png"
                            alt="VR Headset"
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [-2, 2, -2]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 w-full drop-shadow-[0_10px_50px_rgba(129,118,175,0.5)]"
                        />

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent/40 rounded-tr-3xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ProductOverview