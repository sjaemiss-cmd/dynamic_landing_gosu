import { Metadata } from "next";
import React from "react";
import { landingData } from "@/data/landingData";
import { locationData } from "@/data/seoData";

// Components
// Components
import Header from "@/components/Header";
import TypeSwitcher from "@/components/TypeSwitcher";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import USP from "@/components/USP";
import ProgramTeaser from "@/components/ProgramTeaser";

// Shared Components
import SocialProof from "@/components/SocialProof";
import LocationSection from "@/components/LocationSection";
import FAQ from "@/components/FAQ";
import FloatingCTA from "@/components/FloatingCTA";

export function generateStaticParams() {
  return locationData.map((location) => ({
    slug: location.slug,
  }));
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const locationInfo = locationData.find((loc) => loc.slug === decodedSlug);
  const locationName = locationInfo ? locationInfo.name : decodedSlug;
  const keyword = locationInfo?.keyword || "운전연수";
  const landmark = locationInfo?.landmarks[0] || "지하철역";

  return {
    title: `${locationName} ${keyword} 추천 | 고수의 운전면허`,
    description: `${locationName} ${landmark} 근처 쾌적한 실내 운전연습장. ${keyword} 고민 해결! 속성 면허부터 장롱면허 탈출까지, 합리적인 비용으로 시작하세요.`,
    alternates: {
      canonical: `https://www.gosudriving.com/locations/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const locationInfo = locationData.find((loc) => loc.slug === decodedSlug);
  const locationName = locationInfo ? locationInfo.name : "";
  const keyword = locationInfo?.keyword; // Extract keyword

  // Use Cost Data for the main Hero (Broad Appeal)
  const heroData = landingData.cost.hero;
  const heroTheme = landingData.cost.theme || "#FECE48";

  // Use Cost Problem Data for USP (or a dedicated USP data if available)
  const uspData = landingData.cost.problem;

  return (
    <main className="min-h-screen bg-brand-black font-sans text-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden relative">
      <div className="relative z-10">
        <Header />
        <TypeSwitcher />

        {/* 1. Main Hub Hero (Broad Appeal) */}
        <Hero
          data={heroData}
          theme={heroTheme}
          locationName={locationName}
          keyword={keyword}
        />

        {/* 2. USP Section (Video Grid) */}
        <USP data={uspData} theme={heroTheme} />

        {/* 3. Program Teaser (Course Selection) */}
        <ProgramTeaser slug={slug} />

        {/* Shared Sections */}
        <SocialProof theme={heroTheme} />
        <LocationSection theme={heroTheme} />
        <FAQ theme={heroTheme} />
        <Footer theme={heroTheme} />
        <FloatingCTA theme={heroTheme} />
      </div>
    </main>
  );
}
