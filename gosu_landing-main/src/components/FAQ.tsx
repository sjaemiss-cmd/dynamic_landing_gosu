"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const FAQ = ({ theme = "#FECE48" }: { theme?: string }) => {
    const faqs = [
        {
            q: "정말 시뮬레이터로 연습해도 합격할 수 있나요?",
            a: "네, 합격 할 수 있기 때문에 합격무제한 상품을 기획했습니다! 실제 시험장 코스를 완벽하게 구현하여 코스 암기와 핸들링 감각을 익히는데 최적화되어 있습니다. 실제 차를 타기 전 충분한 연습이 되어 합격률이 매우 높습니다.",
        },
        {
            q: "운전을 아예 처음 해보는데 괜찮을까요?",
            a: "물론입니다. 기초 조작법부터 차근차근 1:1로 알려드리기 때문에 초보자분들도 걱정 없이 시작하실 수 있습니다.",
        },
        {
            q: "예약은 어떻게 하나요?",
            a: "최초 예약은 네이버 예약 혹은 카카오톡 채팅을 통해 진행하실 수 있으며, 이후 예약은 카카오톡을 통해 원하시는 시간에 자유롭게 예약하실 수 있습니다. 당일 예약도 가능합니다.",
        },
        {
            q: "불합격하면 추가 비용이 드나요?",
            a: "합격보장반을 등록하시면 면허 취득하실 때까지 추가 비용 없이 3개월 간 무제한으로 연습하실 수 있습니다.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8 md:mb-12 relative inline-block w-full">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-20 h-20 md:w-32 md:h-32 animate-bounce duration-[2000ms] z-0 opacity-80">
                        <Image
                            src="/speaker.webp"
                            alt="Speaker"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 relative z-10 font-hakgyoansim">자주 묻는 질문</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-xl overflow-hidden transition-colors duration-300"
                            style={{ borderColor: openIndex === index ? theme : 'rgba(31, 41, 55, 1)' }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 bg-gray-900 hover:bg-gray-800 transition-colors text-left"
                            >
                                <span className="font-bold text-lg text-white break-keep pr-4">{faq.q}</span>
                                {openIndex === index ?
                                    <ChevronUp className="flex-shrink-0" style={{ color: theme }} /> :
                                    <ChevronDown className="text-gray-400 flex-shrink-0" />
                                }
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-gray-900 px-6 pb-6 text-gray-400 leading-relaxed"
                                    >
                                        <div className="pt-2 border-t border-gray-800 mt-2 break-keep">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
