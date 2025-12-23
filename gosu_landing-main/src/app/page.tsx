"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Phone, Star, ArrowRight, Menu, X, MapPin, Award, Users, ShieldCheck, Monitor, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { landingData } from "@/data/landingData";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamic Imports
const ReviewModal = dynamic(() => import("@/components/ReviewModal"), { ssr: false });
const SocialProof = dynamic(() => import("@/components/SocialProof"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const LocationSection = dynamic(() => import("@/components/LocationSection"));
// const StudentEvent = dynamic(() => import("@/components/StudentEvent"));
const NewYearEvent = dynamic(() => import("@/components/NewYearEvent"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"), { ssr: false });
const Curriculum = dynamic(() => import("@/components/Curriculum"));
const Offer = dynamic(() => import("@/components/Offer"));
const TypeSwitcher = dynamic(() => import("@/components/TypeSwitcher"), { ssr: false });

// Speed Components
const SpeedHero = dynamic(() => import("@/components/speed/SpeedHero"));
const SpeedProblem = dynamic(() => import("@/components/speed/SpeedProblem"));
const SpeedCurriculum = dynamic(() => import("@/components/speed/SpeedCurriculum"));
const SpeedCTA = dynamic(() => import("@/components/speed/SpeedCTA"));
const SpeedStory = dynamic(() => import("@/components/speed/SpeedStory"), { ssr: false });
const LicenseDDayCalculator = dynamic(() => import("@/components/speed/LicenseDDayCalculator"), { ssr: false });

// Skill Components
const SkillHero = dynamic(() => import("@/components/skill/SkillHero"));
const SkillProblem = dynamic(() => import("@/components/skill/SkillProblem"));
const SkillCurriculum = dynamic(() => import("@/components/skill/SkillCurriculum"));
const SkillCTA = dynamic(() => import("@/components/skill/SkillCTA"));
const DriverDNATest = dynamic(() => import("@/components/skill/DriverDNATest"), { ssr: false });

// Phobia Components
const PhobiaHero = dynamic(() => import("@/components/phobia/PhobiaHero"), { ssr: false });
const PhobiaProblem = dynamic(() => import("@/components/phobia/PhobiaProblem"), { ssr: false });
const PhobiaCurriculum = dynamic(() => import("@/components/phobia/PhobiaCurriculum"), { ssr: false });
const PhobiaCTA = dynamic(() => import("@/components/phobia/PhobiaCTA"), { ssr: false });
const AnxietyReliefPrescription = dynamic(() => import("@/components/phobia/AnxietyReliefPrescription"), { ssr: false });

// Practice Components
const PracticeHero = dynamic(() => import("@/components/practice/PracticeHero"), { ssr: false });
const PracticeProblem = dynamic(() => import("@/components/practice/PracticeProblem"), { ssr: false });
const PracticeCurriculum = dynamic(() => import("@/components/practice/PracticeCurriculum"), { ssr: false });
const PracticeCTA = dynamic(() => import("@/components/practice/PracticeCTA"), { ssr: false });
const CurriculumBuilder = dynamic(() => import("@/components/practice/CurriculumBuilder"), { ssr: false });



// --- Components ---

// 1. Header
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 py-5 bg-brand-black/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="고수의 운전면허 도봉점"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium text-gray-300">
              <a href="#calculator" className="hover:text-white transition-colors">비용 계산기</a>
              <a href="#usp" className="hover:text-white transition-colors">특장점</a>
              <a href="#reviews" className="hover:text-white transition-colors">후기</a>
              <a href="#location" className="hover:text-white transition-colors">약도</a>
              <a href="#event" className="hover:text-white transition-colors">이벤트</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
            <a
              href="tel:02-930-9394"
              className="flex items-center gap-2 bg-brand-yellow text-brand-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              <Phone size={18} />
              <span>전화 상담</span>
            </a>
          </div>

          {/* Mobile: Phone Button + Hamburger Menu */}
          <div className="md:hidden flex items-center gap-3">
            {/* Phone Button */}
            <a
              href="tel:02-930-9394"
              className="flex items-center justify-center gap-1.5 bg-brand-yellow text-brand-black px-3 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors"
            >
              <Phone size={16} />
              <span>전화</span>
            </a>

            {/* Hamburger Button */}
            <button
              className="p-2 text-white touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴"
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Dropdown - Outside header for proper z-index */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-0 right-0 z-40 md:hidden bg-brand-black border-t border-b border-gray-800 shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors px-4 py-4 rounded-lg text-base font-medium touch-manipulation"
              >
                비용 계산기
              </a>
              <a
                href="#usp"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('usp')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors px-4 py-4 rounded-lg text-base font-medium touch-manipulation"
              >
                특장점
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors px-4 py-4 rounded-lg text-base font-medium touch-manipulation"
              >
                후기
              </a>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors px-4 py-4 rounded-lg text-base font-medium touch-manipulation"
              >
                약도
              </a>
              <a
                href="#event"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('event')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors px-4 py-4 rounded-lg text-base font-medium touch-manipulation"
              >
                이벤트
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors px-4 py-4 rounded-lg text-base font-medium touch-manipulation"
              >
                FAQ
              </a >
            </nav >
          </motion.div >
        )}
      </AnimatePresence >
    </>
  );
};

// 2. Hero Section
const Hero = ({ data, theme }: { data: any, theme: string }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero3.webp"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-8 break-keep tracking-tight font-hakgyoansim"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />

            <p
              className="text-gray-300 text-lg md:text-2xl mb-10 leading-relaxed break-keep max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: data.subtitle }}
            />

            <motion.a
              href="#offer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: theme,
                color: theme === '#FECE48' ? '#000' : '#FFF',
                boxShadow: `0 0 20px ${theme}66`
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {data.ctaText}
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <ArrowRight className="rotate-90" size={20} />
      </motion.div>
    </section>
  );
};

// 3. Cost Calculator
const CostCalculator = () => {
  const [fails, setFails] = useState(2);

  // Costs
  const academyBase = 1000000;
  const academyFailCost = 150000;
  const gosuBase = 550000;
  const gosuFailCost = 25000;

  const academyTotal = academyBase + (fails * academyFailCost);
  const gosuTotal = gosuBase + (fails * gosuFailCost);
  const savings = academyTotal - gosuTotal;

  const maxCost = academyBase + (5 * academyFailCost); // Max possible cost for scaling

  return (
    <section id="calculator" className="min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 break-keep font-hakgyoansim">
            운전면허 취득 비용,<br className="md:hidden" /> <span className="text-status-red">얼마나 낭비하시겠습니까?</span>
          </h2>
          <p className="text-gray-400 break-keep">슬라이더를 움직여서 절약 금액을 확인해보세요.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl shadow-xl p-6 md:p-12 border border-gray-800">
          {/* Custom Interactive Slider */}
          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <span className="text-gray-400 text-sm font-medium bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                👇 아래 버튼을 좌우로 움직여보세요
              </span>
            </div>

            <div className="relative h-12 flex items-center justify-center select-none touch-none">
              {/* Hidden Native Input for Interaction */}
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={fails}
                onChange={(e) => setFails(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 z-30 cursor-pointer"
                aria-label="예상 불합격 횟수 설정"
              />

              {/* Visual Track Container */}
              <div className="relative w-full h-4 bg-gray-800 rounded-full shadow-inner border border-gray-700 overflow-hidden">
                {/* Filled Track */}
                <motion.div
                  className="absolute top-0 left-0 h-full bg-brand-yellow"
                  initial={{ width: "40%" }}
                  animate={{ width: `${(fails / 5) * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Ticks */}
              <div className="absolute inset-0 w-full h-4 top-1/2 -translate-y-1/2 flex justify-between items-center px-1 pointer-events-none">
                {[0, 1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className={`w-1 h-1 rounded-full transition-colors duration-300 z-10 ${step <= fails ? 'bg-brand-black/50' : 'bg-gray-600'}`} />
                ))}
              </div>

              {/* Visual Thumb */}
              <motion.div
                className="absolute top-1/2 w-8 h-8 bg-white border-4 border-brand-yellow rounded-full shadow-[0_0_15px_rgba(254,206,72,0.5)] z-20 flex items-center justify-center pointer-events-none"
                initial={{ left: "40%" }}
                animate={{ left: `${(fails / 5) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ x: "-50%", y: "-50%" }}
              >
                <div className="w-2 h-2 bg-brand-black rounded-full" />
              </motion.div>

              {/* Floating Label */}
              <motion.div
                className="absolute -top-10 bg-brand-yellow text-brand-black font-bold px-3 py-1 rounded-lg text-sm shadow-lg pointer-events-none whitespace-nowrap"
                initial={{ left: "40%" }}
                animate={{ left: `${(fails / 5) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ x: "-50%" }}
              >
                {fails}회 불합격
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-yellow rotate-45"></div>
              </motion.div>
            </div>

            <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2 font-medium px-1">
              <span>0회 (한방 합격)</span>
              <span>5회 (보통)</span>
            </div>
          </div>

          {/* Horizontal Stacked Bar Chart */}
          <div className="flex flex-col gap-6 mb-12">
            {/* Academy Row */}
            <div className="w-full">
              <div className="flex justify-between mb-2 text-sm font-bold text-gray-400">
                <span>일반 학원</span>
                <span>{academyTotal.toLocaleString()}원</span>
              </div>
              <div className="w-full h-12 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(academyTotal / maxCost) * 100}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="h-full bg-status-red flex items-center justify-end px-4"
                >
                  <span className="text-white font-bold whitespace-nowrap text-sm md:text-base">비용 발생</span>
                </motion.div>
              </div>
            </div>

            {/* Gosu Row */}
            <div className="w-full">
              <div className="flex justify-between mb-2 text-sm font-bold text-gray-400">
                <span>고수의 운전면허</span>
                <span>{gosuTotal.toLocaleString()}원</span>
              </div>
              <div className="w-full h-12 bg-gray-800 rounded-full overflow-hidden relative flex">
                {/* Gosu Cost */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(gosuTotal / maxCost) * 100}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="h-full bg-white flex items-center justify-start px-4 z-10"
                >
                  <span className="text-brand-black font-bold whitespace-nowrap text-sm md:text-base">고수</span>
                </motion.div>

                {/* Savings (The Gap) */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(savings / maxCost) * 100}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="h-full bg-brand-yellow flex items-center justify-center relative"
                >
                  {/* Animated Stripes Pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>

                  <span className="text-brand-black font-extrabold whitespace-nowrap z-10 px-2 text-sm md:text-base">
                    {savings.toLocaleString()}원 SAVE!
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-gray-800 border border-brand-yellow/30 text-white rounded-2xl p-6 text-center transform scale-100 md:scale-105 shadow-2xl">
            <p className="text-gray-400 text-sm mb-1">고수에서 시작하면</p>
            <div className="text-3xl md:text-5xl font-extrabold text-brand-yellow mb-2 break-keep">
              총 {savings.toLocaleString()}원 절약!
            </div>
            <p className="text-sm text-gray-500 break-keep">
              * 일반 학원 평균 재시험 비용 기준<br className="md:hidden" /> (2시간 추가연습 + 재시험 응시료)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. USP (Unique Selling Proposition)
const USP = ({ data, theme }: { data: any, theme: string }) => {
  const stationVideoRef = React.useRef<HTMLVideoElement>(null);
  const accidentVideoRef = React.useRef<HTMLVideoElement>(null);
  const realisticVideoRef = React.useRef<HTMLVideoElement>(null);
  const celebVideoRef = React.useRef<HTMLVideoElement>(null);

  // State for Realistic Card Playlist
  const [realisticVideoSrc, setRealisticVideoSrc] = useState<'/function.mp4' | '/motion.mp4'>('/function.mp4');

  // Video effects logic (kept same as before)
  useEffect(() => {
    const stationVideo = stationVideoRef.current;
    if (!stationVideo) return;
    stationVideo.playbackRate = 2.0;
    const handleStationTimeUpdate = () => {
      if (stationVideo.duration) {
        const endTime = Math.max(0, stationVideo.duration - 5);
        if (stationVideo.currentTime >= endTime) {
          stationVideo.currentTime = 0;
          stationVideo.play();
        }
      }
    };
    stationVideo.addEventListener('timeupdate', handleStationTimeUpdate);
    return () => stationVideo.removeEventListener('timeupdate', handleStationTimeUpdate);
  }, []);

  useEffect(() => {
    const accidentVideo = accidentVideoRef.current;
    if (!accidentVideo) return;
    const handleTimeUpdate = () => {
      if (accidentVideo.duration) {
        const startTime = Math.max(0, accidentVideo.duration - 15);
        if (accidentVideo.currentTime < startTime) accidentVideo.currentTime = startTime;
        if (accidentVideo.ended || accidentVideo.currentTime >= accidentVideo.duration) {
          accidentVideo.currentTime = startTime;
          accidentVideo.play();
        }
      }
    };
    const handleLoadedMetadata = () => {
      if (accidentVideo.duration) accidentVideo.currentTime = Math.max(0, accidentVideo.duration - 15);
    };
    accidentVideo.addEventListener('timeupdate', handleTimeUpdate);
    accidentVideo.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      accidentVideo.removeEventListener('timeupdate', handleTimeUpdate);
      accidentVideo.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const video = realisticVideoRef.current;
    if (!video) return;
    video.playbackRate = 2.0;
    const handleTimeUpdate = () => {
      if (!video.duration) return;
      if (realisticVideoSrc === '/motion.mp4') {
        const startTime = 10;
        const endTime = Math.max(10, video.duration - 10);
        if (video.currentTime < startTime) video.currentTime = startTime;
        if (video.currentTime >= endTime) setRealisticVideoSrc('/function.mp4');
      } else {
        const endTime = Math.max(0, video.duration - 10);
        if (video.currentTime >= endTime) setRealisticVideoSrc('/motion.mp4');
      }
    };
    const handleLoadedMetadata = () => {
      if (realisticVideoSrc === '/motion.mp4') video.currentTime = 10;
      video.playbackRate = 2.0;
      video.play().catch(() => { });
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [realisticVideoSrc]);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) video.play().catch(() => { });
        else video.pause();
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (stationVideoRef.current) observer.observe(stationVideoRef.current);
    if (accidentVideoRef.current) observer.observe(accidentVideoRef.current);
    if (realisticVideoRef.current) observer.observe(realisticVideoRef.current);
    if (celebVideoRef.current) observer.observe(celebVideoRef.current);
    return () => observer.disconnect();
  }, [realisticVideoSrc]);

  // If we have features (Speed/Skill), render the feature list
  if (data.features && data.features.length > 0) {
    return (
      <section id="usp" className="min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 break-keep font-hakgyoansim"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p
              className="text-gray-400 text-lg break-keep"
              dangerouslySetInnerHTML={{ __html: data.subtitle }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] border transition-all duration-300",
                  feature.highlight
                    ? "bg-gray-900 border-2"
                    : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                )}
                style={{
                  borderColor: feature.highlight ? theme : undefined,
                  boxShadow: feature.highlight ? `0 0 30px -10px ${theme}33` : undefined
                }}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: feature.highlight ? theme : '#1f2937' }}
                  >
                    {/* Icon placeholder logic - can be expanded */}
                    {feature.icon === 'clock' && <Clock className="w-8 h-8" style={{ color: feature.highlight ? '#000' : theme }} />}
                    {feature.icon === 'shield' && <ShieldCheck className="w-8 h-8" style={{ color: feature.highlight ? '#000' : theme }} />}
                    {feature.icon === 'check' && <Award className="w-8 h-8" style={{ color: feature.highlight ? '#000' : theme }} />}
                    {feature.icon === 'monitor' && <Monitor className="w-8 h-8" style={{ color: feature.highlight ? '#000' : theme }} />}
                    {!feature.icon && <Star className="w-8 h-8" style={{ color: feature.highlight ? '#000' : theme }} />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 break-keep font-hakgyoansim">
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-400 leading-relaxed break-keep"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default USP (Cost/Original) - Video Grid
  return (
    <section id="usp" className="min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 break-keep font-hakgyoansim">
            왜 <span className="text-brand-yellow">고수의 운전면허 도봉점</span>인가요?
          </h2>
          <p className="text-gray-400 text-lg break-keep">다른 곳과는 비교할 수 없는 압도적인 차이</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* 1. 합격 무제한 보장 (Text Card - Highlight) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-brand-yellow rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative z-10">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Award className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 break-keep font-hakgyoansim">
                합격할 때까지<br />무제한 보장
              </h3>
              <p className="text-brand-black/80 font-medium text-lg leading-relaxed break-keep">
                첫 결제후엔 걱정하지 마세요.<br />
                추가 비용 없이 끝까지 책임집니다.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          {/* 2. 연예인 선택 (Video Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden min-h-[320px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <video
              ref={celebVideoRef}
              src="/celebv.mp4"
              loop
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full inline-flex items-center w-fit mb-3">
                <Star className="w-3 h-3 mr-1" fill="currentColor" /> CELEB's PICK
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 break-keep font-hakgyoansim">
                연예인도 믿고 찾는<br />검증된 운전 연습장
              </h3>
              <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                수많은 셀럽들이 선택한 이유가 있습니다.
              </p>
            </div>
          </motion.div>

          {/* 3. 최고의 접근성 (Video Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden min-h-[320px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <video
              ref={stationVideoRef}
              src="/stationmosaic.mp4"
              loop
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full inline-flex items-center w-fit mb-3">
                <MapPin className="w-3 h-3 mr-1" /> 2min WALK
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 break-keep font-hakgyoansim">
                노원역 3번 출구<br />도보 2분 컷!
              </h3>
              <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                도봉면허시험장도 걸어서 2분이면 도착해요.
              </p>
            </div>
          </motion.div>

          {/* 4. 1:1 밀착 코칭 (Text Card - Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:border-gray-700"
          >
            <div className="relative z-10">
              <div className="bg-gray-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                <Users className="w-8 h-8 text-brand-yellow" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 break-keep font-hakgyoansim">
                1:1 밀착<br />맞춤 코칭
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed break-keep">
                나의 운전 실력과 습관을 분석하여<br />
                부족한 부분을 집중적으로 케어해드립니다.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl group-hover:bg-brand-yellow/10 transition-colors duration-500" />
          </motion.div>

          {/* 5. 실수해도 괜찮아 (Video Card - Accident) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden min-h-[320px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <video
              ref={accidentVideoRef}
              src="/accident.mp4"
              loop
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full inline-flex items-center w-fit mb-3">
                <ShieldCheck className="w-3 h-3 mr-1" /> SAFE & EASY
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 break-keep font-hakgyoansim">
                실수해도 괜찮아요<br />사고 걱정 ZERO
              </h3>
              <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                교통사고 걱정 없이 마음껏 실수하며<br />진짜 실력을 키우세요.
              </p>
            </div>
          </motion.div>

          {/* 6. 현실감 (Video Card - Realistic) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden min-h-[320px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <video
              ref={realisticVideoRef}
              src={realisticVideoSrc}
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full inline-flex items-center w-fit mb-3">
                <Monitor className="w-3 h-3 mr-1" /> REALISTIC
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 break-keep font-hakgyoansim">
                풀 한 포기, 흔들림까지<br />그대로 재현
              </h3>
              <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                전국 시험장을 완벽하게 구현하고<br />모션 베이스로 현장감까지!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function LandingPageContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "cost";
  const content = landingData[type] || landingData["cost"];
  const theme = content.theme || "#FECE48";

  return (
    <main className="min-h-screen bg-brand-black font-sans text-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
        style={{ scaleX, backgroundColor: theme }}
      />

      <div className="relative z-10">
        <Header />
        <TypeSwitcher />

        {type === 'speed' ? (
          // Speed Layout
          <>
            <SpeedHero />
            <LicenseDDayCalculator />
            <SpeedProblem />
            <SpeedStory />
            <SpeedCurriculum />
            <SpeedCTA />
          </>
        ) : type === 'skill' ? (
          // Skill Layout
          <>
            <SkillHero />
            <DriverDNATest />
            <SkillProblem />
            <SkillCurriculum />
            <SkillCTA />
          </>
        ) : type === 'phobia' ? (
          // Phobia Layout
          <>
            <PhobiaHero />
            <AnxietyReliefPrescription />
            <PhobiaProblem />
            <PhobiaCurriculum />
            <PhobiaCTA />
          </>
        ) : type === 'practice' ? (
          // Practice Layout
          <>
            <PracticeHero />
            <CurriculumBuilder />
            <PracticeProblem />
            <PracticeCurriculum />
            <PracticeCTA />
          </>
        ) : (
          // Default / Cost Layout
          <>
            <Hero data={content.hero} theme={theme} />
            {/* Only show CostCalculator for 'cost' type or if it's the default */}
            {type === 'cost' && <CostCalculator />}

            <USP data={content.problem} theme={theme} />

            {/* Dynamic Sections */}
            <Curriculum
              title={content.curriculum.title}
              steps={content.curriculum.steps}
              theme={theme}
            />
            <Offer
              offer={content.offer}
              theme={theme}
            />
          </>
        )}

        {/* Shared Sections */}
        <SocialProof theme={theme} />
        <LocationSection theme={theme} />
        {/* Event Section */}
        {/* <StudentEvent /> */}
        <NewYearEvent theme={theme} />
        <FAQ theme={theme} />
        <Footer theme={theme} />
        <FloatingCTA theme={theme} />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-black flex items-center justify-center text-white">Loading...</div>}>
      <LandingPageContent />
    </Suspense>
  );
}
