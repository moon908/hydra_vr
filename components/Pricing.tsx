'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Shield, Crown } from 'lucide-react'

const pricingPlans = [
    {
        name: "CORE",
        price: "999",
        description: "The essential immersive experience for enthusiasts.",
        icon: <Zap className="w-6 h-6" />,
        features: [
            "Retina 8K Micro-OLED Display",
            "Spatital Audio Pro",
            "128GB Internal Storage",
            "Basic Headset Strap",
            "1 Year Warranty"
        ],
        highlight: false
    },
    {
        name: "ELITE",
        price: "1,299",
        description: "The perfect balance of power and comfort.",
        icon: <Shield className="w-6 h-6" />,
        features: [
            "Everything in Core",
            "512GB Internal Storage",
            "Comfort Pro Fit System",
            "Travel Case Included",
            "Extended 2 Year Warranty",
            "Priority Support"
        ],
        highlight: true
    },
    {
        name: "ULTRA",
        price: "1,799",
        description: "The ultimate peak of spatial computing technology.",
        icon: <Crown className="w-6 h-6" />,
        features: [
            "Everything in Elite",
            "2TB Internal Storage",
            "Premium Leather Finish",
            "Dual External Battery Packs",
            "Lifetime VR Cloud Games",
            "24/7 Personal Concierge"
        ],
        highlight: false
    }
]

const Pricing = () => {
    return (
        <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full point-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full point-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-orbitron font-bold mb-6"
                    >
                        CHOOSE YOUR <span className="gradient-text">DIMENSION</span>
                    </motion.h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        Select the package that fits your journey into the futuristic world of mixed reality.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative glass p-10 rounded-[40px] border ${plan.highlight
                                    ? 'border-accent bg-accent/5 ring-1 ring-accent/50'
                                    : 'border-white/5'
                                } transition-all duration-500 group`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-secondary px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-accent text-white' : 'bg-white/5 text-accent'
                                    } group-hover:scale-110 transition-transform duration-500`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-orbitron font-bold mb-2 tracking-wide">{plan.name}</h3>
                                <p className="text-secondary/60 text-sm leading-relaxed mb-6 italic">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">$</span>
                                    <span className="text-6xl font-black font-orbitron tracking-tighter">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-secondary/80 group/item">
                                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover/item:bg-accent/40 transition-colors">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        <span className="text-sm group-hover/item:text-white transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-bold font-orbitron transition-all duration-300 ${plan.highlight
                                    ? 'gradient-btn text-white shadow-lg shadow-accent/20'
                                    : 'outline-btn hover:bg-white/10'
                                }`}>
                                PRE-ORDER NOW
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing