"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const TypeSwitcher = () => {
    const pathname = usePathname();

    // Determine current type based on pathname
    const getCurrentType = (path: string) => {
        if (path === "/" || path === "/cost") return "cost";
        return path.replace("/", "");
    };

    const currentType = getCurrentType(pathname);

    const types = [
        { id: "speed", label: "Speed (1주)", href: "/speed" },
        { id: "skill", label: "Skill (공식)", href: "/skill" },
        { id: "cost", label: "Cost (가성비)", href: "/" },
        { id: "phobia", label: "Phobia (장롱)", href: "/phobia" },
        { id: "practice", label: "Practice (핀셋)", href: "/practice" },
    ];

    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-black/80 backdrop-blur-md p-2 rounded-full border border-gray-700 shadow-2xl overflow-x-auto max-w-[95vw]">
            {types.map((type) => (
                <Link
                    key={type.id}
                    href={type.href}
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
