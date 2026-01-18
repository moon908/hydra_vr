"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviewsData1 = [
    {
        name: "Alex Rivera",
        role: "Tech Reviewer",
        rating: 5,
        text: "The clarity is unreal. It feels less like looking at a screen and more like looking through a window."
    },
    {
        name: "Sarah Chen",
        role: "Game Developer",
        rating: 5,
        text: "The tracking is the best I've used. Zero drift, perfect immersion."
    },
    {
        name: "Marcus Cole",
        role: "Product Designer",
        rating: 4,
        text: "Incredibly comfortable. I wore it for 3 hours straight without any fatigue."
    },
    {
        name: "Emily Carter",
        role: "Creative Professional",
        rating: 5,
        text: "The spatial audio is a game-changer. It completely changes how you perceive virtual spaces."
    },
    {
        name: "David Kim",
        role: "Software Engineer",
        rating: 5,
        text: "Setup was surprisingly simple. I was up and running in less than 5 minutes."
    },
    {
        name: "Lisa Rodriguez",
        role: "VR Enthusiast",
        rating: 5,
        text: "This is the headset we've been waiting for. The future is here."
    }
];

const reviewsData2 = [
    {
        name: "James Wilson",
        role: "Architect",
        rating: 5,
        text: "Visualizing buildings in 1:1 scale before construction has saved us weeks of design changes."
    },
    {
        name: "Elena Rossi",
        role: "Digital Artist",
        rating: 5,
        text: "The color accuracy is stunning. My virtual sculptures look exactly as intended."
    },
    {
        name: "Michael Chen",
        role: "Gamer",
        rating: 5,
        text: "Competitive gaming at 120Hz in VR is something you have to experience to believe."
    },
    {
        name: "Sophia Martinez",
        role: "Educator",
        rating: 4,
        text: "Using this for virtual field trips has completely transformed how my students learn history."
    },
    {
        name: "Ryan Thompson",
        role: "UX Researcher",
        rating: 5,
        text: "The eye tracking analytics are incredibly precise. A breakthrough for our user testing."
    },
    {
        name: "Olivia White",
        role: "Simulation Pilot",
        rating: 5,
        text: "The peripheral vision and lack of screen door effect make it the perfect sim-racing companion."
    }
];

const ReviewCard = ({ review }: { review: (typeof reviewsData1)[0] }) => (
    <div className="shrink-0 w-[400px] glass p-8 rounded-3xl border border-white/5 hover:border-accent/50 transition-all duration-300 cursor-pointer group mx-4">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <span className="text-secondary text-sm font-medium">{review.rating}.0</span>
            </div>
            <Quote className="w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
        </div>

        <p className="text-secondary/80 mb-8 leading-relaxed group-hover:text-secondary transition-colors duration-300 min-h-[80px]">
            "{review.text}"
        </p>

        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 border border-white/10 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                {review.name.charAt(0)}
            </div>
            <div>
                <h4 className="font-orbitron font-bold text-lg tracking-tight">{review.name}</h4>
                <p className="text-accent text-xs font-medium uppercase tracking-widest">{review.role}</p>
            </div>
        </div>
    </div>
);

const Reviews = () => {
    // Duplicate reviews to create a seamless loop
    const doubledReviews1 = [...reviewsData1, ...reviewsData1];
    const doubledReviews2 = [...reviewsData2, ...reviewsData2];

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-orbitron font-bold mb-6"
                    >
                        HEARD FROM THE <span className="gradient-text">COMMUNITY</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-secondary text-lg max-w-2xl mx-auto"
                    >
                        Real experiences from early adopters who have stepped into the future.
                    </motion.p>
                </div>
            </div>

            {/* Carousel Container - Row 1 (Left Scrolling) */}
            <div className="relative flex overflow-hidden py-5 mask-fade">
                <motion.div
                    className="flex"
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {doubledReviews1.map((review, index) => (
                        <ReviewCard key={`row1-${index}`} review={review} />
                    ))}
                </motion.div>
            </div>

            {/* Carousel Container - Row 2 (Right Scrolling) */}
            <div className="relative flex overflow-hidden py-5 mask-fade">
                <motion.div
                    className="flex"
                    animate={{
                        x: ["-50%", 0],
                    }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {doubledReviews2.map((review, index) => (
                        <ReviewCard key={`row2-${index}`} review={review} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}


export default Reviews