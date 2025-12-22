"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Smile, Repeat } from "lucide-react";
import { landingData } from "@/data/landingData";

const PhobiaProblem = () => {
    const data = landingData.phobia.problem;
    const theme = landingData.phobia.theme;

    const icons = {
        ShieldCheck: ShieldCheck,
        Smile: Smile,
        Repeat: Repeat
    };

    return (
        <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 font-hakgyoansim leading-tight"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.features.map((feature, index) => {
                        const IconComponent = icons[feature.icon as keyof typeof icons];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-opacity-50 transition-all duration-300 group"
                                style={{
                                    borderColor: 'rgba(55, 65, 81, 1)',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = theme || '#4ADE80'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(55, 65, 81, 1)'}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                                    style={{ backgroundColor: `${theme}1a` }}
                                >
                                    {IconComponent && (
                                        <IconComponent
                                            size={32}
                                            style={{ color: theme }}
                                        />
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 font-hakgyoansim">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed break-keep">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PhobiaProblem;
