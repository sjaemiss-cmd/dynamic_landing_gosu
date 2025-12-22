"use client";

import React from "react";
import { motion } from "framer-motion";

const SpeedCurriculum = () => {
    const steps = [
        {
            day: "Day 1-2",
            title: "기초 감각 마스터",
            desc: "핸들링, 페달 감각이 손에 붙을 때까지 무한 반복. 사고 걱정 없는 시뮬레이터에서 과감하게 밟아보세요."
        },
        {
            day: "Day 3-4",
            title: "기능 시험 공식화",
            desc: "T자 주차, 직각 주차... 감으로 하지 마세요. 수학 공식처럼 딱딱 떨어지는 합격 공식을 전수합니다."
        },
        {
            day: "Day 5-6",
            title: "도로 주행 시뮬레이션",
            desc: "시험장 코스 A, B, C, D를 그대로 옮겨왔습니다. 네비게이션 음성까지 외울 정도로 반복합니다."
        },
        {
            day: "Day 7",
            title: "면허 취득",
            desc: "떨지 않고 한 번에 합격. 이것이 가장 빠른 길입니다."
        }
    ];

    return (
        <section className="py-20 bg-black text-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-hakgyoansim mb-4">
                        <span className="text-red-600">NO FAIL</span> ROUTINE
                    </h2>
                    <p className="text-gray-400">재수 없는 1주일 루틴</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[9px] md:left-1/2 top-0 md:top-1/2 w-3 h-3 bg-red-600 rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_10px_#dc2626] z-10"></div>

                                {/* Content Box */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div className={`bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-red-900/50 transition-colors duration-300 ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                                        <span className="inline-block text-red-500 font-bold text-sm mb-2 tracking-wider">{step.day}</span>
                                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed break-keep">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Empty Space for the other side */}
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeedCurriculum;
