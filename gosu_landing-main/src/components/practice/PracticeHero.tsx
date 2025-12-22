"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";
import { landingData } from "@/data/landingData";
import Image from "next/image";

const PracticeHero = () => {
    const data = landingData.practice.hero;
    const theme = landingData.practice.theme;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/practice_hero_bg.png"
                    alt="Precision Driving Simulator"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-brand-black/40 z-10"></div>

                {/* Grid Overlay for "Precision" feel */}
                <div
                    className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(${theme} 1px, transparent 1px), linear-gradient(90deg, ${theme} 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-l-4 mb-8 bg-black/50 backdrop-blur-sm"
                        style={{
                            borderColor: theme,
                        }}
                    >
                        <Target size={16} style={{ color: theme }} />
                        <span className="text-sm font-bold tracking-widest uppercase text-white">
                            {data.badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-hakgyoansim break-keep drop-shadow-2xl"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />

                    {/* Subtitle */}
                    <p
                        className="text-gray-300 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl break-keep font-light"
                        dangerouslySetInnerHTML={{ __html: data.subtitle }}
                    />

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-3 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all overflow-hidden"
                        style={{
                            backgroundColor: 'transparent',
                            border: `2px solid ${theme}`
                        }}
                        onClick={() => {
                            const element = document.getElementById('offer');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="relative z-10">{data.ctaText}</span>
                        <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Fill Effect */}
                        <div
                            className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                            style={{ backgroundColor: theme }}
                        ></div>
                    </motion.button>
                </motion.div>
            </div>

            {/* Tech Decorations */}
            <div className="absolute bottom-10 right-10 z-20 hidden md:block">
                <div className="flex flex-col items-end gap-2 text-xs font-mono text-gray-500">
                    <span>SYSTEM: READY</span>
                    <span>PRECISION: 100%</span>
                    <span style={{ color: theme }}>TARGET: LOCKED</span>
                </div>
            </div>
        </section>
    );
};

export default PracticeHero;
