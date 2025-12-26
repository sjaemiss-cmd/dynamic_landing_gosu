import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LandingContent } from "@/data/landingData";

interface HeroProps {
    data: LandingContent['hero'];
    theme: string;
    locationName?: string;
    keyword?: string;
}

/**
 * Hero 섹션 컴포넌트
 * Props로 데이터를 받아 렌더링하는 프레젠테이션 컴포넌트
 * LCP 최적화를 위해 framer-motion 제거하고 CSS 애니메이션 사용
 */
const Hero = ({ data, theme, locationName, keyword }: HeroProps) => {
    // 지역명이 있으면 별도 라인으로 분리하고, 타이틀에서 "운전면허" 중복 제거
    const mainTitle = locationName
        ? data.title.replace("운전면허 ", "")
        : data.title;

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero3.webp"
                    alt="고수의 운전면허 도봉점 실내 운전연습장 전경"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
                    <span
                        className="inline-block px-4 py-1.5 text-sm md:text-base font-bold rounded-full mb-6 border backdrop-blur-sm"
                        style={{
                            backgroundColor: `${theme}33`, // 20% opacity
                            color: theme,
                            borderColor: `${theme}4d` // 30% opacity
                        }}
                    >
                        {data.badge}
                    </span>
                    <h1
                        className="text-4xl md:text-7xl font-extrabold leading-tight text-white mb-8 break-keep tracking-tight font-hakgyoansim"
                    >
                        {locationName && (
                            <span className="block text-2xl md:text-4xl font-bold text-white/70 mb-4">
                                {locationName} {keyword || "운전면허"},
                            </span>
                        )}
                        <span dangerouslySetInnerHTML={{ __html: mainTitle }} />
                    </h1>

                    <p
                        className="text-gray-300 text-lg md:text-2xl mb-10 leading-relaxed break-keep max-w-3xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: data.subtitle }}
                    />

                    <a
                        href={data.ctaLink || "#offer"}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        style={{
                            backgroundColor: theme,
                            color: theme === '#FECE48' ? '#000' : '#FFF',
                            boxShadow: `0 0 20px ${theme}66`
                        }}
                    >
                        {data.ctaText}
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <a
                href="#calculator"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 cursor-pointer animate-pulse-soft"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
                <ArrowRight className="rotate-90" size={20} />
            </a>
        </section>
    );
};

export default Hero;
