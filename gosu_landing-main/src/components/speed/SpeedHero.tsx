"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

interface SpeedHeroProps {
    locationName?: string;
}

const SpeedHero = ({ locationName }: SpeedHeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/speed_hero_bg_v5.png"
                    alt="3일 완성 운전면허 속성 과정"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-4xl">
                    {/* Text Content */}
                    <div className="text-left animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 font-bold mb-8 animate-pulse">
                            <Zap size={16} fill="currentColor" />
                            <span className="text-sm tracking-wider uppercase">Speed Track</span>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 font-hakgyoansim italic">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                {locationName ? `${locationName} 주민을 위한 3일 완성의 진실,` : "3일 완성의 진실,"}
                            </span><br />
                            <span className="text-red-600">폭로합니다.</span>
                        </h1>

                        <p className="text-gray-300 text-xl md:text-3xl mb-12 leading-tight max-w-2xl font-medium">
                            운전면허 취득이 급하신가요? <br />
                            <span className="text-white font-bold border-b-4 border-red-600">가장 빠른 합격</span>은 '가장 많이 연습하는 것'뿐입니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <a
                                href="#speed-cta"
                                className="group relative px-10 py-5 bg-red-600 text-white font-bold text-xl rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    2주 완성반 신청하기 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeedHero;
