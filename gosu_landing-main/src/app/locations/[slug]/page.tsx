import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landingData } from "@/data/landingData";
import { locationData } from "@/data/seoData";

// Components
import Header from "@/components/Header";
import TypeSwitcher from "@/components/TypeSwitcher";
import Footer from "@/components/Footer";
import SpeedHero from "@/components/speed/SpeedHero";
import PhobiaHero from "@/components/phobia/PhobiaHero";
import Hero from "@/components/Hero"; // Used for CostHero

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

  const costData = landingData.cost;
  const costTheme = costData.theme || "#FECE48";

  return (
    <main className="min-h-screen bg-brand-black font-sans text-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden relative">
      <div className="relative z-10">
        <Header />
        <TypeSwitcher />

        {/* 1. Speed Section (Main Hero) */}
        <section className="relative">
          <SpeedHero locationName={locationName} keyword={keyword} />
        </section>

        {/* Divider */}
        <div className="h-4 bg-brand-black"></div>

        {/* 2. Phobia Section */}
        <section className="relative">
          <PhobiaHero locationName={locationName} keyword={keyword} />

          {/* Phobia Detail Link CTA */}
          <div className="bg-brand-black py-12 flex justify-center">
            <Link
              href={`/locations/${slug}/phobia`}
              className="group flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/50 rounded-full text-green-400 font-bold text-lg hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              <span>{locationName} 장롱면허 탈출반 자세히 보기</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Divider */}
        <div className="h-4 bg-brand-black"></div>

        {/* 3. Cost Section */}
        <section className="relative">
          <Hero data={costData.hero} theme={costTheme} locationName={locationName} keyword={keyword} />

          {/* Cost Detail Link CTA */}
          <div className="bg-brand-black py-12 flex justify-center">
            <Link
              href={`/locations/${slug}/cost`}
              className="group flex items-center gap-3 px-8 py-4 bg-yellow-500/10 border border-yellow-500/50 rounded-full text-yellow-400 font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <span>{locationName} 비용 절약반 자세히 보기</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Shared Sections */}
        <SocialProof theme={costTheme} />
        <LocationSection theme={costTheme} />
        <FAQ theme={costTheme} />
        <Footer theme={costTheme} />
        <FloatingCTA theme={costTheme} />
      </div>
    </main>
  );
}
