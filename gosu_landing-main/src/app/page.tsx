import React from "react";
import { landingData } from "@/data/landingData";

// Components
import Header from "@/components/Header";
import TypeSwitcher from "@/components/TypeSwitcher";
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

export const metadata = {
  title: "고수의 운전면허 도봉점 - 합격 무제한 보장 | 노원 운전면허",
  description: "노원/도봉 운전면허 합격률 1위! 실내 운전연습장에서 합리적인 비용으로 면허 취득하세요. 합격할 때까지 추가 비용 없는 무제한 보장반 운영.",
};

export default function Home() {
  const data = landingData.cost;
  const theme = data.theme || "#FECE48";

  return (
    <main className="min-h-screen bg-brand-black font-sans text-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden relative">
      <div className="relative z-10">
        <Header />
        <TypeSwitcher />

        <Hero data={data.hero} theme={theme} />
        <CostCalculator />
        <USP data={data.problem} theme={theme} />

        <Curriculum
          title={data.curriculum.title}
          steps={data.curriculum.steps}
          theme={theme}
        />
        <Offer
          offer={data.offer}
          theme={theme}
        />

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
