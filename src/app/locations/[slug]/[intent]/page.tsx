import { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { locationData, intentData, intentKeywordMap } from "@/data/seoData";
import { getIntentComponents, isValidIntent, IntentType } from "@/config/intentConfig";

// Shared Components
import Header from "@/components/Header";

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
            // Intent에 맞는 키워드인 경우에만 페이지 생성
            const validKeywords = intentKeywordMap[intent] || [];
            if (validKeywords.includes(location.keyword)) {
                params.push({
                    slug: location.slug,
                    intent: intent,
                });
            }
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
    const slugKeyword = locationInfo?.keyword || "";
    // Fix: Use deterministic selection (first item) instead of random
    const landmark = locationInfo?.landmarks[0] || "지하철역";

    const intentMap: Record<string, { keyword: string; desc: string }> = {
        speed: { keyword: "속성 운전면허", desc: "3일 만에 면허 취득이 가능한 속성 코스." },
        phobia: { keyword: "장롱면허 연수", desc: "운전 공포증 극복을 위한 심리 케어 연수." },
        cost: { keyword: "저렴한 운전면허", desc: "학원비 절반 가격으로 합격할 때까지 무제한." },
        practice: { keyword: "운전연습장", desc: "부족한 주차, 주행 스킬만 골라 연습하는 핀셋 과외." },
        skill: { keyword: "운전면허 공식", desc: "기능, 도로주행 합격 공식을 전수하는 전문 교육." },
    };

    const { keyword: intentKeyword, desc } = intentMap[intent] || intentMap.cost;

    const title = slugKeyword
        ? `${locationName} ${slugKeyword} - ${intentKeyword} | 고수의 운전면허`
        : `${locationName} ${intentKeyword} | 고수의 운전면허`;

    return {
        title: title,
        description: `${locationName} ${landmark} 근처 ${slugKeyword} 전문. ${desc} 고수의 운전면허에서 시작하세요.`,
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
    const slugKeyword = locationInfo?.keyword || "";

    // Validate intent using type guard
    if (!isValidIntent(intent)) {
        return notFound();
    }

    // Validate keyword for intent (Runtime check)
    // Validate keyword for intent (Runtime check)
    // Only validate if we have a valid location info (SEO page)
    // If locationInfo is missing (e.g. /locations/cost), we treat it as a generic page and allow it
    const validKeywords = intentKeywordMap[intent] || [];
    if (slugKeyword && !validKeywords.includes(slugKeyword)) {
        return notFound();
    }

    // Get theme and data
    const intentKey = intent as IntentType;
    const data = siteConfig.landing[intentKey];
    const theme: string = data?.theme || siteConfig.landing.cost.theme || "#FECE48";

    // Get components from registry (OCP-compliant)
    const components = getIntentComponents(intent);
    const { Hero, InteractiveSection, Problem, Story, Curriculum, CTA, isDataDriven } = components;

    return (
        <main className="min-h-screen bg-brand-black font-sans text-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden relative">
            <div className="relative z-10">
                <Header />


                {/* Intent-specific content rendered via registry */}
                {isDataDriven ? (
                    // Data-driven pattern (cost page)
                    <>
                        <Hero data={data.hero} theme={theme} locationName={locationName} keyword={slugKeyword} designStyle={data.designStyle} />
                        <InteractiveSection />
                        <Problem data={data.problem} theme={theme} />
                        <Curriculum title={data.curriculum.title} steps={data.curriculum.steps} theme={theme} />
                        <CTA offer={data.offer} theme={theme} />
                    </>
                ) : (
                    // Self-contained pattern (speed, phobia, skill, practice)
                    <>
                        <Hero locationName={locationName} keyword={slugKeyword} />
                        <InteractiveSection />
                        <Problem />
                        {Story && <Story />}
                        <Curriculum />
                        <CTA />
                    </>
                )}

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
