"use client";

import React from "react";
import { Brain, Calculator, XCircle, CheckCircle } from "lucide-react";

const SkillProblem = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-hakgyoansim">
                        왜 <span className="text-blue-600">기계치</span>도 합격할까요?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        운전은 운동신경이 아닙니다.<br />
                        철저하게 계산된 <span className="font-bold text-black">입력과 출력의 결과값</span>입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl">
                    {/* Left: Feeling (Bad) */}
                    <div className="bg-white p-12 relative group border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
                        <div className="mb-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-400">
                                <Brain size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-400 mb-2">감(Feeling)으로 운전</h3>
                            <p className="text-gray-500">&quot;대충 이쯤에서 꺾으세요&quot;</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle size={20} />
                                <span>매번 달라지는 회전각</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle size={20} />
                                <span>불안한 차선 유지</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle size={20} />
                                <span>주차 공식 부재</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Logic (Good) */}
                    <div className="bg-blue-600 p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-blue-400"></div>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                        <div className="relative z-10">
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-lg">
                                    <Calculator size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">공식(Logic)으로 운전</h3>
                                <p className="text-blue-100">&quot;어깨선 맞추고 핸들 1바퀴&quot;</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle size={20} className="text-blue-200" />
                                    <span>오차 없는 정확한 각도</span>
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle size={20} className="text-blue-200" />
                                    <span>가이드라인 따라가기</span>
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle size={20} className="text-blue-200" />
                                    <span>100% 성공 주차 공식</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillProblem;
