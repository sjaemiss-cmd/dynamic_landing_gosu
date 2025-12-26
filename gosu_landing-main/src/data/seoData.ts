// Intent types for landing pages
export const intentData = ['speed', 'phobia', 'cost', 'practice', 'skill'];

// 면허취득 계열 키워드 (speed, skill, cost 페이지용)
const licenseKeywords = ['운전면허', '면허취득'];

// 도로연수 계열 키워드 (phobia, practice 페이지용)
const practiceKeywords = ['운전연수', '도로연수'];

// Intent별 적합한 키워드 그룹 매핑
export const intentKeywordMap: Record<string, string[]> = {
    speed: licenseKeywords,
    skill: licenseKeywords,
    cost: licenseKeywords,
    phobia: practiceKeywords,
    practice: practiceKeywords,
};

// 모든 키워드 (locationData 생성용)
const keywords = [...licenseKeywords, ...practiceKeywords];

// Base region data with landmarks
const regions = [
    { name: '도봉구', en: 'dobong', landmarks: ['도봉산', '서울창포원', '도봉구청'] },
    { name: '노원구', en: 'nowon', landmarks: ['화랑대 철도공원', '경춘선 숲길', '노원역'] },
    { name: '강북구', en: 'gangbuk', landmarks: ['북서울꿈의숲', '수유시장', '4.19 민주묘지'] },
    { name: '성북구', en: 'seongbuk', landmarks: ['성북동 역사문화지구', '정릉', '고려대학교'] },
    { name: '의정부', en: 'uijeongbu', landmarks: ['의정부역', '부대찌개 거리', '예술의전당'] },
    { name: '도봉동', en: 'dobongdong', landmarks: ['도봉산', '서울창포원', '도봉서원'] },
    { name: '쌍문동', en: 'ssangmun', landmarks: ['둘리뮤지엄', '쌍리단길', '쌍문역'] },
    { name: '방학동', en: 'banghak', landmarks: ['연산군묘', '은행나무', '도깨비시장'] },
    { name: '창동', en: 'changdong', landmarks: ['플랫폼창동61', '씨드큐브', '창동역'] },
    { name: '상계동', en: 'sanggye', landmarks: ['불암산 나비정원', '노원 롯데백화점', '상계역'] },
    { name: '중계동', en: 'junggye', landmarks: ['은행사거리', '노원문화예술회관', '중계근린공원'] },
    { name: '하계동', en: 'hagye', landmarks: ['을지대학교병원', '하계역', '세이브존'] },
    { name: '월계동', en: 'wolgye', landmarks: ['인덕대학교', '월계역', '초안산 캠핑장'] },
    { name: '미아동', en: 'mia', landmarks: ['미아사거리', '롯데백화점 미아점', '오동근린공원'] },
    { name: '번동', en: 'beondong', landmarks: ['북서울꿈의숲', '강북구민운동장', '번동사거리'] },
    { name: '수유동', en: 'suyu', landmarks: ['수유역', '4.19 국립묘지', '화계사'] },
    { name: '우이동', en: 'ui', landmarks: ['도선사', '북한산 우이역', '우이동 계곡'] },
];

// Generate locationData by combining regions × keywords
export const locationData = regions.flatMap((region) =>
    keywords.map((keyword) => ({
        slug: `${region.name}-${keyword}`,
        name: region.name,
        landmarks: region.landmarks,
        keyword: keyword,
    }))
);

// Export region and keyword data for reference
export { regions, keywords };
