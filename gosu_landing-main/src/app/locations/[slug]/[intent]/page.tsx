import { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { landingData } from "@/data/landingData";
import { locationData, intentData } from "@/data/seoData";

// Components
import Header from "@/components/Header";
import TypeSwitcher from "@/components/TypeSwitcher";

// Speed Components
import SpeedHero from "@/components/speed/SpeedHero";
import LicenseDDayCalculator from "@/components/speed/LicenseDDayCalculator";
import SpeedProblem from "@/components/speed/SpeedProblem";
import SpeedStory from "@/components/speed/SpeedStory";
import SpeedCurriculum from "@/components/speed/SpeedCurriculum";
import SpeedCTA from "@/components/speed/SpeedCTA";

// Phobia Components
import PhobiaHero from "@/components/phobia/PhobiaHero";
import AnxietyReliefPrescription from "@/components/phobia/AnxietyReliefPrescription";
import PhobiaProblem from "@/components/phobia/PhobiaProblem";
import PhobiaCurriculum from "@/components/phobia/PhobiaCurriculum";
import PhobiaCTA from "@/components/phobia/PhobiaCTA";

// Skill Components
import SkillHero from "@/components/skill/SkillHero";
import DriverDNATest from "@/components/skill/DriverDNATest";
import SkillProblem from "@/components/skill/SkillProblem";
import SkillCurriculum from "@/components/skill/SkillCurriculum";
import SkillCTA from "@/components/skill/SkillCTA";

// Practice Components
import PracticeHero from "@/components/practice/PracticeHero";
import CurriculumBuilder from "@/components/practice/CurriculumBuilder";
import PracticeProblem from "@/components/practice/PracticeProblem";
import PracticeCurriculum from "@/components/practice/PracticeCurriculum";
import PracticeCTA from "@/components/practice/PracticeCTA";

// Cost (Default) Components
import Hero from "@/components/Hero";
import CostCalculator from "@/components/CostCalculator";
import USP from "@/components/USP";
import Curriculum from "@/components/Curriculum";
import Offer from "@/components/Offer";

// Shared Components
import SocialProof from "@/components/SocialProof";
import LocationSection from "@/components/LocationSection";
import NewYearEvent from "@/components/NewYearEvent";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export function generateStaticParams() {
    const params: { slug: string; intent: string }[] = [];

    locationData.forEach((location) => {
        intentData.forEach((intent) => {
            params.push({
                slug: location.slug,
                intent: intent,
            });
        });
    });

    return params;
}

interface Props {
    params: Promise<{
        slug: string;
        intent: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, intent } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const locationInfo = locationData.find((loc) => loc.slug === decodedSlug);
    const locationName = locationInfo ? locationInfo.name : decodedSlug;
    const landmark = locationInfo?.landmarks[Math.floor(Math.random() * locationInfo.landmarks.length)] || "지하철역";

    const intentMap: Record<string, { keyword: string; desc: string }> = {
        speed: { keyword: "속성 운전면허", desc: "3일 만에 면허 취득이 가능한 속성 코스." },
        phobia: { keyword: "장롱면허 연수", desc: "운전 공포증 극복을 위한 심리 케어 연수." },
        cost: { keyword: "저렴한 운전면허", desc: "학원비 절반 가격으로 합격할 때까지 무제한." },
        practice: { keyword: "운전연습장", desc: "부족한 주차, 주행 스킬만 골라 연습하는 핀셋 과외." },
        skill: { keyword: "운전면허 공식", desc: "기능, 도로주행 합격 공식을 전수하는 전문 교육." },
    };

    const { keyword, desc } = intentMap[intent] || intentMap.cost;

    return {
        title: `${locationName} ${keyword} | 고수의 운전면허`,
        description: `${locationName} ${landmark} 근처 운전연수. ${desc} 고수의 운전면허에서 시작하세요.`,
        alternates: {
            canonical: `https://www.gosudriving.com/locations/${slug}/${intent}`,
        },
    };
}

export default async function Page({ params }: Props) {
    const { slug, intent } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const locationInfo = locationData.find((loc) => loc.slug === decodedSlug);
    const locationName = locationInfo ? locationInfo.name : "";

    // Validate intent
    if (!intentData.includes(intent)) {
        return notFound();
    }

    const theme = landingData[intent]?.theme || landingData.cost.theme;

    const renderContent = () => {
        switch (intent) {
            case "speed":
                return (
                    <>
                        <SpeedHero locationName={locationName} />
                        <LicenseDDayCalculator />
                        <SpeedProblem />
                        <SpeedStory />
                        <SpeedCurriculum />
                        <SpeedCTA />
                    </>
                );
            case "phobia":
                return (
                    <>
                        <PhobiaHero locationName={locationName} />
                        <AnxietyReliefPrescription />
                        <PhobiaProblem />
                        <PhobiaCurriculum />
                        <PhobiaCTA />
                    </>
                );
            case "skill":
                return (
                    <>
                        <SkillHero locationName={locationName} />
                        <DriverDNATest />
                        <SkillProblem />
                        <SkillCurriculum />
                        <SkillCTA />
                    </>
                );
            case "practice":
                return (
                    <>
                        <PracticeHero locationName={locationName} />
                        <CurriculumBuilder />
                        <PracticeProblem />
                        <PracticeCurriculum />
                        <PracticeCTA />
                    </>
                );
            case "cost":
            default:
                const costData = landingData.cost;
                return (
                    <>
                        <Hero data={costData.hero} theme={theme} locationName={locationName} />
                        <CostCalculator />
                        <USP data={costData.problem} theme={theme} />
                        <Curriculum
                            title={costData.curriculum.title}
                            steps={costData.curriculum.steps}
                            theme={theme}
                        />
                        <Offer offer={costData.offer} theme={theme} />
                    </>
                );
        }
    };

    return (
        <main className="min-h-screen bg-brand-black font-sans text-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden relative">
            <div className="relative z-10">
                <Header />
                {/* Note: TypeSwitcher currently links to root paths. Consider updating if location persistence is needed. */}
                <TypeSwitcher />

                {renderContent()}

                {/* Shared Sections */}
                <SocialProof theme={theme} />
                <LocationSection theme={theme} />
                <NewYearEvent theme={theme} />
                <FAQ theme={theme} />
                <Footer theme={theme} />
                <FloatingCTA theme={theme} />
            </div>
        </main>
    );
}
