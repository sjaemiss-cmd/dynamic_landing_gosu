"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Award, AlertTriangle, Car } from "lucide-react";
import { landingData } from "@/data/landingData";

const questions = [
    {
        id: 1,
        question: "주차할 때 가장 어려운 점은 무엇인가요?",
        options: [
            { id: "a", text: "공간 감각이 없어서 어디로 꺾어야 할지 모르겠어요.", score: 1 },
            { id: "b", text: "수정 주차가 너무 어려워요.", score: 2 },
            { id: "c", text: "주차는 할 수 있는데 시간이 너무 오래 걸려요.", score: 3 },
            { id: "d", text: "주차는 자신 있어요!", score: 4 }
        ]
    },
    {
        id: 2,
        question: "차선 변경, 언제 가장 두려우신가요?",
        options: [
            { id: "a", text: "사이드미러 보는 것 자체가 무서워요.", score: 1 },
            { id: "b", text: "끼어들 타이밍을 전혀 못 잡겠어요.", score: 2 },
            { id: "c", text: "뒤차가 빵! 거릴까 봐 겁나요.", score: 3 },
            { id: "d", text: "차선 변경은 문제 없어요.", score: 4 }
        ]
    },
    {
        id: 3,
        question: "좁은 골목길이나 코너를 돌 때 느낌은?",
        options: [
            { id: "a", text: "긁을까 봐 조마조마해서 못 지나가겠어요.", score: 1 },
            { id: "b", text: "반대편에서 차가 오면 멘붕이 와요.", score: 2 },
            { id: "c", text: "천천히 가면 갈 수 있어요.", score: 3 },
            { id: "d", text: "부드럽게 잘 빠져나갑니다.", score: 4 }
        ]
    }
];

const SkillDiagnosisTest = () => {
    const theme = landingData.skill.theme;
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showResult, setShowResult] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnswer = (score: number) => {
        setAnswers({ ...answers, [currentStep]: score });

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300);
        } else {
            setIsAnalyzing(true);
            setTimeout(() => {
                setIsAnalyzing(false);
                setShowResult(true);
            }, 1500);
        }
    };

    const calculateResult = () => {
        const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

        if (totalScore <= 5) {
            return {
                level: "왕초보 탈출 필요",
                description: "기초적인 차량 조작과 공간 감각 익히기가 시급해요!",
                recommendation: "장롱면허 탈출 10시간 완성반",
                icon: <AlertTriangle size={48} className="text-red-500" />,
                color: "text-red-500"
            };
        } else if (totalScore <= 9) {
            return {
                level: "주행 감각 부족",
                description: "도로 흐름은 알지만, 방어운전과 주차 스킬업이 필요해요.",
                recommendation: "주차 & 차선변경 마스터반",
                icon: <Car size={48} className="text-orange-500" />,
                color: "text-orange-500"
            };
        } else {
            return {
                level: "베스트 드라이버 유망주",
                description: "기본기는 탄탄하시네요! 고속주행이나 난이도 높은 코스만 다듬으면 완벽해요.",
                recommendation: "고속주행 & 시내연수 심화반",
                icon: <Award size={48} className="text-green-500" />,
                color: "text-green-500"
            };
        }
    };

    const result = showResult ? calculateResult() : null;

    return (
        <section className="py-20 bg-brand-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-hakgyoansim">
                        나의 <span style={{ color: theme }}>운전 실력</span> 진단하기
                    </h2>
                    <p className="text-gray-400 text-lg">
                        간단한 테스트로 나에게 딱 맞는 커리큘럼을 찾아보세요.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl border border-gray-800 p-6 md:p-10 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
                    {!showResult && !isAnalyzing && (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-8">
                                    <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-sm font-bold mb-4" style={{ color: theme }}>
                                        Q{currentStep + 1} / {questions.length}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                        {questions[currentStep].question}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {questions[currentStep].options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleAnswer(option.score)}
                                            className="w-full p-5 rounded-xl text-left font-medium text-gray-300 bg-gray-800/50 border border-transparent hover:bg-gray-800 hover:border-gray-600 transition-all hover:text-white flex items-center justify-between group"
                                        >
                                            <span>{option.text}</span>
                                            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: theme }} />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {isAnalyzing && (
                        <div className="text-center py-10">
                            <div className="inline-block w-16 h-16 border-4 border-gray-700 border-t-transparent rounded-full animate-spin mb-6" style={{ borderTopColor: theme }}></div>
                            <h3 className="text-2xl font-bold text-white mb-2">운전 성향 분석 중...</h3>
                            <p className="text-gray-400">고객님에게 딱 맞는 솔루션을 찾고 있습니다.</p>
                        </div>
                    )}

                    {showResult && result && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border-4 border-gray-700">
                                    {result.icon}
                                </div>
                            </div>

                            <h3 className="text-gray-400 text-lg mb-2">당신의 운전 레벨은?</h3>
                            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${result.color} font-hakgyoansim`}>
                                {result.level}
                            </h2>

                            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                                {result.description}
                            </p>

                            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-8">
                                <p className="text-sm text-gray-500 mb-2">AI 추천 커리큘럼</p>
                                <p className="text-2xl font-bold text-white" style={{ color: theme }}>
                                    {result.recommendation}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('offer');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg text-brand-black transition-all hover:brightness-110 flex items-center justify-center gap-2 mx-auto"
                                style={{ backgroundColor: theme }}
                            >
                                <span>상담 예약하고 할인받기</span>
                                <ArrowRight size={20} />
                            </button>

                            <button
                                onClick={() => {
                                    setShowResult(false);
                                    setCurrentStep(0);
                                    setAnswers({});
                                }}
                                className="mt-4 text-gray-500 hover:text-white text-sm underline underline-offset-4"
                            >
                                다시 테스트하기
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SkillDiagnosisTest;
