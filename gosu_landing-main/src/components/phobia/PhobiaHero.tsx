"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { landingData } from "@/data/landingData";
import Image from "next/image";

const PhobiaHero = () => {
    const data = landingData.phobia.hero;
    const theme = landingData.phobia.theme;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/phobia_hero_bg.png"
                    alt="Comfortable Driving Environment"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black z-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 border backdrop-blur-md shadow-lg"
                        style={{
                            borderColor: `${theme}66`,
                            backgroundColor: `${theme}26`
                        }}
                    >
                        <ShieldCheck size={18} style={{ color: theme }} />
                        <span className="text-sm md:text-base font-bold text-white tracking-wide">
                            {data.badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-hakgyoansim break-keep drop-shadow-2xl">
                        <span className="block mb-2 text-gray-200">도로 위가 무서우신가요?</span>
                        <span className="relative inline-block">
                            <span className="relative z-10">그건 당신의 잘못이 아닙니다.</span>
                            <motion.span
                                className="absolute bottom-2 left-0 w-full h-3 md:h-4 -z-10 opacity-80"
                                style={{ backgroundColor: theme }}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            ></motion.span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-200 text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto break-keep font-medium drop-shadow-lg">
                        {data.subtitle.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br className="hidden md:block" />
                            </React.Fragment>
                        ))}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-brand-black shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all hover:shadow-[0_0_50px_rgba(74,222,128,0.5)]"
                        style={{ backgroundColor: theme }}
                        onClick={() => {
                            const element = document.getElementById('offer');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span>{data.ctaText}</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />

                        {/* Ripple Effect */}
                        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: theme }}></span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-200 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default PhobiaHero;
