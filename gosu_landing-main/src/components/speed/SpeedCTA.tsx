"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SpeedCTA = () => {
    return (
        <section id="speed-cta" className="py-24 bg-red-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-hakgyoansim leading-tight">
                        지금 시작하지 않으면<br />
                        <span className="text-black">일주일이 또 늦어집니다.</span>
                    </h2>

                    <p className="text-white/80 text-xl mb-12 font-medium">
                        고민하는 순간에도 예약은 차고 있습니다.<br />
                        가장 빠른 합격, 지금 바로 상담하세요.
                    </p>

                    <a
                        href="https://pf.kakao.com/_xmxnmnG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 shadow-2xl"
                    >
                        <span>1주 완성반 상담하기</span>
                        <ArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SpeedCTA;
