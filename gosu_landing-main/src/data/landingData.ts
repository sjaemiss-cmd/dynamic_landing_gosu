import { ReactNode } from 'react';

export interface FeatureItem {
    title: string;
    description: string;
    icon?: 'award' | 'clock' | 'check' | 'users' | 'shield' | 'monitor' | 'ShieldCheck' | 'Smile' | 'Repeat';
    highlight?: boolean;
}

export interface CurriculumStep {
    step: string;
    title: string;
    description: string;
}

export interface OfferContent {
    title: string;
    priceDescription: string;
    points: string[];
    ctaText: string;
}

export interface LandingContent {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        ctaText: string;
    };
    problem: {
        title: string;
        subtitle: string;
        features: FeatureItem[];
    };
    curriculum: {
        title: string;
        steps: CurriculumStep[];
    };
    offer: OfferContent;
    usp?: { // Keeping for backward compatibility if needed, but we'll map problem to USP component
        title: string;
        subtitle: string;
        features: FeatureItem[];
    };
    theme?: string; // Hex color code for the primary theme color
    designStyle?: 'aggressive' | 'trust' | 'premium';
    cta?: {
        title: string;
        subtitle: string;
        button: string;
    };
}

export const landingData: Record<string, LandingContent> = {
    speed: {
        theme: "#EF4444", // Red for Urgency/Speed
        designStyle: 'aggressive',
        hero: {
            badge: "고객의 의심을 확신으로 바꿔주는 한 방",
            title: "학원들의 '3일 완성' 광고,<br/>솔직히 말씀드립니다.<br/>불가능합니다.",
            subtitle: "재능 타고난 상위 1%가 아니라면 현실적으로 어렵습니다.<br/>희망 고문 대신, 누구나 가능한 <strong class='text-brand-yellow'>'가장 빠른 1주일'</strong> 플랜을 제시합니다.",
            ctaText: "현실적인 1주 완성반 보기"
        },
        problem: {
            title: "왜 3일 만에 따려다<br/><span class='text-status-red'>3주가 걸릴까요?</span>",
            subtitle: "팩트 체크: 3일 완성이 실패하는 이유",
            features: [
                {
                    title: "90%는 불합격",
                    description: "기능 4시간, 주행 6시간...<br/>법정 최소 시간만 타보고 시험장 가면<br/>대부분 떨어집니다.",
                    icon: 'shield',
                    highlight: false
                },
                {
                    title: "시간 2배 소요",
                    description: "한 번 떨어지면 재접수까지 3일 대기.<br/>결국 시간은 2배로 듭니다.",
                    icon: 'clock',
                    highlight: true
                },
                {
                    title: "비용 추가 발생",
                    description: "돈과 시간 아끼려다<br/>재시험 비용으로 15만 원 더 씁니다.",
                    icon: 'award',
                    highlight: false
                }
            ]
        },
        curriculum: {
            title: "재수 없는(One-Pass)<br/><span class='text-brand-yellow'>1주일 루틴</span>",
            steps: [
                {
                    step: "Step 1 (1~2일차)",
                    title: "감각 익히기",
                    description: "핸들링, 페달 감각이 손에 붙을 때까지<br/>무한 리셋 (사고 걱정 없음)"
                },
                {
                    step: "Step 2 (3~4일차)",
                    title: "공식 대입",
                    description: "T자 주차, 직각 주차...<br/>감이 아니라 '수학 공식'처럼 외우게 만듭니다."
                },
                {
                    step: "Step 3 (5~6일차)",
                    title: "도로 주행",
                    description: "시험장 코스 A, B, C, D 그대로 시뮬레이션.<br/>네비게이션 소리까지 외워버립니다."
                },
                {
                    step: "Step 4 (7일차)",
                    title: "시험 응시",
                    description: "떨지 않고 한 번에 합격."
                }
            ]
        },
        offer: {
            title: "1주 단기 완성반<br/>(The Real One-Week)",
            priceDescription: "운전면허 시험장 응시료 25,000원.<br/>한 번 떨어질 때마다 치킨 한 마리 날아갑니다.",
            points: [
                "여러 번 떨어져서 스트레스받지 말고,",
                "딱 1주일만 투자해서 한 번에 끝내세요."
            ],
            ctaText: "1주 완성 스케줄 상담하기"
        },
        get usp() {
            return this.problem;
        }
    },
    skill: {
        theme: "#3B82F6", // Blue for Trust/Logic
        designStyle: 'trust',
        hero: {
            badge: "기계치, 겁쟁이도 무조건 합격",
            title: "떨어질까 봐 걱정 마세요.<br/>합격할 때까지 <span class='text-brand-yellow'>추가 요금 0원.</span>",
            subtitle: "운전은 감각이 아니라 '공식'입니다.<br/>기계치도 공식만 외우면 무조건 붙습니다.",
            ctaText: "3개월 무제한 반 상담하기"
        },
        problem: {
            title: "운전, 타고난 감각이<br/>필요할까요?",
            subtitle: "아닙니다. 운전은 철저한 '공식'입니다.",
            features: [
                {
                    title: "감(Feeling) vs 공식(Logic)",
                    description: "모호한 감 대신<br/>명확한 수학 공식을 전수합니다.",
                    icon: 'monitor',
                    highlight: false
                },
                {
                    title: "Cheat Sheet 제공",
                    description: "시뮬레이터 화면에 표시되는<br/>가이드라인(정답선)만 따라가세요.",
                    icon: 'check',
                    highlight: true
                },
                {
                    title: "무제한 연습",
                    description: "횟수 제한 없이<br/>부족한 부분을 무한 반복하세요.",
                    icon: 'shield',
                    highlight: false
                }
            ]
        },
        curriculum: {
            title: "기계치도 합격하는<br/><span class='text-brand-yellow'>공식 암기 루틴</span>",
            steps: [
                {
                    step: "Step 1",
                    title: "공식 이해",
                    description: "주차, 차선 변경 등<br/>모든 동작을 공식화하여 학습"
                },
                {
                    step: "Step 2",
                    title: "가이드 주행",
                    description: "화면에 표시된 가이드라인을<br/>그대로 따라하는 반복 연습"
                },
                {
                    step: "Step 3",
                    title: "무한 반복",
                    description: "잘 안 되는 구간만<br/>집중적으로 무제한 반복"
                },
                {
                    step: "Step 4",
                    title: "실전 모의고사",
                    description: "시험장과 동일한 환경에서<br/>합격 점수 나올 때까지 테스트"
                }
            ]
        },
        offer: {
            title: "합격 보장반<br/>(Unlimited Pass)",
            priceDescription: "떨어져도 걱정 없습니다.<br/>붙을 때까지 끝까지 책임집니다.",
            points: [
                "합격할 때까지 추가 수강료 0원",
                "불합격 시 보충 교육 무제한 제공"
            ],
            ctaText: "합격 보장반 상담하기"
        },
        get usp() {
            return this.problem;
        }
    },
    cost: {
        theme: "#FECE48", // Yellow for Original/Cost
        designStyle: 'premium',
        hero: {
            badge: "노원·도봉지역 운전면허 합격률 1위",
            title: "운전면허 학원비 100만원?<br/>여기선 절반값으로 합격",
            subtitle: "학원 다니면 <strong class='text-status-red'>재시험마다 15만원</strong> 깨집니다.<br/>고수에서는 <strong class='text-brand-yellow'>합격할 때까지 추가비용 0원</strong>입니다.",
            ctaText: "비용 절약 상담하기"
        },
        problem: {
            title: "왜 <span class='text-brand-yellow'>고수의 운전면허 도봉점</span>인가요?",
            subtitle: "다른 곳과는 비교할 수 없는 압도적인 차이",
            features: [] // Will use default USP component if empty
        },
        curriculum: {
            title: "",
            steps: []
        },
        offer: {
            title: "",
            priceDescription: "",
            points: [],
            ctaText: ""
        }
    },
    phobia: {
        theme: "#4ADE80", // Green for Safety/Healing
        hero: {
            title: "도로 위가 무서우신가요?\n그건 당신의 잘못이 아닙니다.",
            subtitle: "사고 위험 0%의 안전한 시뮬레이터에서\n운전의 즐거움을 되찾아 드립니다.",
            badge: "장롱면허 탈출 솔루션",
            ctaText: "안전운전 체험 예약하기"
        },
        problem: {
            title: "왜 운전이 두려워졌을까요?",
            subtitle: "도로 연수의 두려움을 제거하고 심리적 안전을 제공합니다.",
            features: [
                {
                    title: "절대 안전",
                    description: "사고 위험 0%, 시뮬레이터만의 장점으로 두려움 극복",
                    icon: "ShieldCheck"
                },
                {
                    title: "친절한 교육",
                    description: "소리 지르지 않는 강사님과 함께하는 편안한 수업",
                    icon: "Smile"
                },
                {
                    title: "무한 반복",
                    description: "두려운 구간만 집중적으로 반복하여 자신감 회복",
                    icon: "Repeat"
                }
            ]
        },
        curriculum: {
            title: "두려움을 자신감으로 바꾸는 3단계",
            steps: [
                {
                    step: "STEP 01",
                    title: "기초 조작 & 심리적 안정",
                    description: "차량 조작법을 다시 익히고 시뮬레이터로 도로 환경에 적응합니다."
                },
                {
                    step: "STEP 02",
                    title: "두려움 극복 훈련",
                    description: "복잡한 교차로, 끼어들기 등 두려운 상황을 반복 연습합니다."
                },
                {
                    step: "STEP 03",
                    title: "실전 주행 시뮬레이션",
                    description: "실제 도로와 유사한 환경에서 주행하며 자신감을 완성합니다."
                }
            ]
        },
        offer: {
            title: "이제 운전이 즐거워집니다",
            priceDescription: "더 이상 두려워하지 마세요.",
            points: ["무료 상담", "체험 예약"],
            ctaText: "무료 상담 신청하기"
        },
        cta: {
            title: "이제 운전이 즐거워집니다",
            subtitle: "더 이상 두려워하지 마세요. 고수의 운전면허가 함께합니다.",
            button: "무료 상담 신청하기"
        }
    },
    practice: {
        theme: "#8B5CF6", // Purple for Mastery/Pinpoint
        hero: {
            badge: "초보 탈출 핀셋 과외",
            title: "10년째 직진만 하십니까?<br/>주차, 3시간이면 마스터합니다.",
            subtitle: "여행, 출장 앞두고 급하신가요?<br/>부족한 스킬만 쏙쏙 골라 채워드립니다.",
            ctaText: "원 포인트 레슨 예약"
        },
        problem: {
            title: "도로 연수는 <span class='text-status-red'>이동 시간이 절반</span>입니다.",
            subtitle: "시뮬레이터는 원하는 상황만 무한 반복하여 효율을 극대화합니다.",
            features: [
                {
                    title: "주차 무한 반복",
                    description: "평행 주차, 후진 주차, 골목길 주차 등<br/>가장 어려운 주차만 집중 훈련합니다.",
                    icon: "Repeat",
                    highlight: true
                },
                {
                    title: "상황별 시나리오",
                    description: "비 오는 날, 밤길 운전, 복잡한 골목길 등<br/>실제 도로에서 만나기 힘든 상황을 설정합니다.",
                    icon: "monitor",
                    highlight: false
                },
                {
                    title: "압도적 가성비",
                    description: "도로 연수 대비 1/3 가격으로<br/>원하는 만큼 충분히 연습하세요.",
                    icon: "award",
                    highlight: false
                }
            ]
        },
        curriculum: {
            title: "3시간 완성 <span class='text-brand-yellow'>핀셋 커리큘럼</span>",
            steps: [
                {
                    step: "STEP 01",
                    title: "실력 진단 & 취약점 파악",
                    description: "현재 운전 실력을 정밀 진단하여<br/>부족한 부분을 정확히 찾아냅니다."
                },
                {
                    step: "STEP 02",
                    title: "원 포인트 집중 훈련",
                    description: "주차, 차선 변경, 고속 주행 등<br/>취약한 스킬만 집중적으로 반복 연습합니다."
                },
                {
                    step: "STEP 03",
                    title: "실전 응용 & 마스터",
                    description: "다양한 시나리오에서 배운 스킬을 적용하며<br/>완벽하게 내 것으로 만듭니다."
                }
            ]
        },
        offer: {
            title: "필요한 만큼만 배우세요",
            priceDescription: "불필요한 시간 낭비 없이 핵심만 배웁니다.",
            points: ["주차 마스터", "고속도로 주행", "시내 주행"],
            ctaText: "원 포인트 레슨 상담받기"
        }
    }
};
