"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

const SpeedHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-70"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 font-bold mb-8 animate-pulse">
                            <Zap size={16} fill="currentColor" />
                            <span className="text-sm tracking-wider uppercase">Speed Track</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 font-hakgyoansim italic">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">1 WEEK</span><br />
                            <span className="text-red-600">OR NOTHING</span>
                        </h1>

                        <p className="text-gray-400 text-xl md:text-2xl mb-10 leading-relaxed max-w-lg font-medium">
                            남들 3주 걸릴 때, <br />
                            <span className="text-white font-bold border-b-2 border-red-600">딱 1주일</span>만에 끝냅니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="#speed-cta"
                                className="group relative px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    1주 완성반 신청하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        {/* Abstract Speed Visual */}
                        <div className="relative w-full aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent rounded-full blur-[100px] opacity-20"></div>
                            <div className="relative z-10 bg-gray-900 border border-gray-800 p-2 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                <Image
                                    src="/hero3.webp" // Placeholder, ideally a dynamic driving shot
                                    alt="Fast Driving"
                                    width={600}
                                    height={600}
                                    className="rounded-2xl object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-10 -left-10 bg-black border border-gray-800 p-6 rounded-2xl shadow-xl">
                                    <div className="text-4xl font-black text-white mb-1 font-hakgyoansim">7<span className="text-red-600">DAYS</span></div>
                                    <div className="text-gray-400 text-sm font-bold">AVERAGE TIME</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SpeedHero;
