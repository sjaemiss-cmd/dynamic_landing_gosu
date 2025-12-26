"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { locationData, intentKeywordMap } from "@/data/seoData";

const TypeSwitcher = () => {
    const pathname = usePathname();
    const params = useParams();
    const slug = params?.slug as string | undefined;

    // Determine current type based on pathname
    const getCurrentType = (path: string) => {
        if (path === "/" || path === "/cost") return "cost";
        // /locations/[slug]/[intent] 패턴 처리
        const parts = path.split('/');
        if (parts.includes('locations') && parts.length >= 4) {
            return parts[parts.length - 1]; // 마지막 부분이 intent
        }
        return path.replace("/", "");
    };

    const currentType = getCurrentType(pathname);

    // 현재 지역 정보 찾기
    const decodedSlug = slug ? decodeURIComponent(slug) : "";
    // slug가 "지역명-키워드" 형식이므로, 지역명으로 시작하는지 확인하거나 locationData에서 찾음
    // 정확히는 locationData의 slug와 일치하는 것을 찾는게 아니라, 현재 slug의 "지역명" 부분을 찾아야 함.
    // 하지만 locationData에는 "도봉구-운전면허" 같은 slug만 있음.
    // 따라서 현재 slug에서 지역명을 추출해야 함.
    // locationData의 name이 현재 slug에 포함되어 있는지 확인.
    const currentLocation = locationData.find(loc => decodedSlug.startsWith(loc.name));

    const types = [
        { id: "speed", label: "Speed (1주)" },
        { id: "skill", label: "Skill (공식)" },
        { id: "cost", label: "Cost (가성비)" },
        { id: "phobia", label: "Phobia (장롱)" },
        { id: "practice", label: "Practice (핀셋)" },
    ];

    const getHref = (typeId: string) => {
        if (currentLocation) {
            // 현재 지역 컨텍스트가 있는 경우
            const targetKeywords = intentKeywordMap[typeId];
            const targetKeyword = targetKeywords ? targetKeywords[0] : "운전면허"; // 기본값
            const newSlug = `${currentLocation.name}-${targetKeyword}`;
            return `/locations/${newSlug}/${typeId}`;
        }
        // 기본 루트 경로인 경우
        return typeId === "cost" ? "/" : `/${typeId}`;
    };

    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-black/80 backdrop-blur-md p-2 rounded-full border border-gray-700 shadow-2xl overflow-x-auto max-w-[95vw]">
            {types.map((type) => (
                <Link
                    key={type.id}
                    href={getHref(type.id)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                        currentType === type.id
                            ? "bg-brand-yellow text-brand-black shadow-[0_0_10px_rgba(254,206,72,0.5)]"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                    )}
                >
                    {type.label}
                </Link>
            ))}
        </div>
    );
};

export default TypeSwitcher;
