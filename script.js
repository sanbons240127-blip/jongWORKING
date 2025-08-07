
// 자동차 브랜드 데이터베이스
const carBrands = {
    '현대': {
        name: '현대자동차',
        country: '대한민국',
        year: '1967',
        features: '신뢰성, 경제성, 첨단 기술',
        models: '소나타, 아반떼, 투싼, 팰리세이드',
        description: '대한민국 최대 자동차 제조업체로, 전 세계적으로 품질과 신뢰성을 인정받고 있습니다. 친환경 기술과 첨단 안전 시스템으로 유명합니다.',
        logo: '현',
        techFeatures: 'SmartSense 안전시스템, Blue Link 커넥티드카, HTRAC AWD',
        strengths: '합리적 가격, 긴 보증기간, 연비 효율성, A/S 네트워크',
        weaknesses: '브랜드 프리미엄 부족, 일부 모델 디자인 아쉬움',
        specialTech: '수소연료전지차 NEXO, 전기차 아이오닉 시리즈'
    },
    '기아': {
        name: '기아자동차',
        country: '대한민국',
        year: '1944',
        features: '디자인, 혁신성, 스포티함',
        models: 'K5, 쏘렌토, 스포티지, EV6',
        description: '혁신적인 디자인과 스포티한 성능으로 유명한 브랜드입니다. 전기차 분야에서도 선도적인 역할을 하고 있습니다.',
        logo: 'KIA',
        techFeatures: 'GT 라인 스포츠 패키지, UVO 인포테인먼트, CVVD 엔진기술',
        strengths: '젊고 역동적인 디자인, 우수한 전기차 기술, 스포티한 주행성능',
        weaknesses: '일부 모델 실내 공간 부족, 고급 마감재 아쉬움',
        specialTech: 'E-GMP 전기차 플랫폼, 800V 초고속 충전, Face Connect'
    },
    'BMW': {
        name: 'BMW',
        country: '독일',
        year: '1916',
        features: '고성능, 럭셔리, 드라이빙 플레저',
        models: '3시리즈, 5시리즈, X3, X5',
        description: '독일의 프리미엄 자동차 브랜드로 "궁극의 드라이빙 머신"이라는 슬로건으로 유명합니다. 뛰어난 엔진 기술과 운전의 즐거움을 제공합니다.',
        logo: 'BMW',
        techFeatures: 'xDrive 4륜구동, iDrive 시스템, M 퍼포먼스 패키지',
        strengths: '뛰어난 주행성능, 균형잡힌 핸들링, 고급 인테리어, 브랜드 가치',
        weaknesses: '높은 유지비용, 복잡한 전자장비, 딜러망 부족',
        specialTech: 'BMW i 전기차 라인, 카본파이버 바디, 레이저 헤드라이트'
    },
    '벤츠': {
        name: '메르세데스-벤츠',
        country: '독일',
        year: '1926',
        features: '럭셔리, 안전성, 혁신',
        models: 'C클래스, E클래스, S클래스, GLE',
        description: '세계 최고의 럭셔리 자동차 브랜드 중 하나로, 자동차의 발명자로 불리며 최고급 품질과 혁신적인 기술력으로 유명합니다.',
        logo: 'MB',
        techFeatures: '4MATIC 4륜구동, MBUX 인포테인먼트, AMG 퍼포먼스',
        strengths: '최고급 럭셔리, 탁월한 안전성, 혁신적 기술, 우수한 승차감',
        weaknesses: '매우 높은 가격, 비싼 유지비, 복잡한 전자시스템',
        specialTech: 'EQS 전기차 시리즈, Magic Body Control, 자율주행 기술'
    },
    '아우디': {
        name: '아우디',
        country: '독일',
        year: '1909',
        features: '첨단 기술, 콰트로 AWD, 프리미엄',
        models: 'A4, A6, Q5, Q7',
        description: '독일의 프리미엄 브랜드로 콰트로(quattro) 4륜구동 시스템과 첨단 기술력으로 유명합니다. 스포티함과 럭셔리함을 동시에 추구합니다.',
        logo: 'AUDI',
        techFeatures: 'Quattro AWD, Virtual Cockpit, Bang & Olufsen 사운드',
        strengths: '뛰어난 4륜구동 기술, 스포티한 주행감, 하이테크 인테리어',
        weaknesses: '높은 유지비용, 전자장비 고장 위험, 딜러 서비스 아쉬움',
        specialTech: 'e-tron 전기차 라인업, Matrix LED 헤드라이트, 12V 마일드 하이브리드'
    },
    '토요타': {
        name: '토요타',
        country: '일본',
        year: '1937',
        features: '신뢰성, 내구성, 하이브리드',
        models: '캠리, 프리우스, RAV4, 하이랜더',
        description: '세계 최대 자동차 제조업체 중 하나로, 뛰어난 품질과 신뢰성으로 유명합니다. 하이브리드 기술의 선구자이기도 합니다.',
        logo: 'T',
        techFeatures: 'Toyota Safety Sense, 하이브리드 시너지 드라이브, AWD-i',
        strengths: '뛰어난 내구성, 높은 중고차 가치, 저렴한 유지비, 글로벌 A/S',
        weaknesses: '디자인 보수성, 주행 재미 부족, 일부 모델 실내 품질',
        specialTech: '수소연료전지차 미라이, THS 하이브리드 시스템, TNGA 플랫폼'
    },
    '혼다': {
        name: '혼다',
        country: '일본',
        year: '1948',
        features: '실용성, 연비, 엔진 기술',
        models: '어코드, 시빅, CR-V, 파일럿',
        description: '뛰어난 엔진 기술과 실용성으로 유명한 일본 브랜드입니다. 모터사이클에서 시작해 자동차까지 다양한 분야에서 혁신을 이루고 있습니다.',
        logo: 'H',
        techFeatures: 'Honda SENSING, i-VTEC 엔진, Real Time AWD',
        strengths: '우수한 엔진 기술, 실용적인 설계, 합리적 가격, 뛰어난 연비',
        weaknesses: '브랜드 인지도 부족, 일부 모델 NVH 아쉬움, 디자인 평범함',
        specialTech: 'i-MMD 하이브리드, Honda CONNECT, 어스 드림즈 엔진'
    },
    '폭스바겐': {
        name: '폭스바겐',
        country: '독일',
        year: '1937',
        features: '실용성, 견고함, 독일 공학',
        models: '골프, 파사트, 티구안, 아틀라스',
        description: '독일의 대중적인 자동차 브랜드로 견고하고 실용적인 차량으로 유명합니다. "Das Auto"라는 슬로건으로 독일 공학의 우수성을 강조합니다.',
        logo: 'VW',
        techFeatures: '4MOTION AWD, TSI 터보엔진, MQB 플랫폼',
        strengths: '견고한 독일 품질, 실용적 설계, 우수한 안전성, 균형잡힌 성능',
        weaknesses: '높은 부품비, 전자장비 복잡성, 디젤게이트 이미지',
        specialTech: 'ID 전기차 시리즈, MEB 전기차 플랫폼, Travel Assist'
    },
    '포르쉐': {
        name: '포르쉐',
        country: '독일',
        year: '1931',
        features: '고성능, 스포츠카, 프리미엄',
        models: '911, 카이엔, 마칸, 타이칸',
        description: '세계 최고의 스포츠카 브랜드로, 뛰어난 성능과 독특한 디자인으로 유명합니다. 레이싱 기술을 일반 차량에 적용하는 것으로 유명합니다.',
        logo: 'P',
        techFeatures: 'PDK 변속기, PASM 서스펜션, 스포츠 크로노 패키지',
        strengths: '최고 수준의 주행성능, 독특한 디자인, 뛰어난 브랜드 가치',
        weaknesses: '매우 높은 가격, 비싼 옵션, 실용성 부족, 높은 유지비',
        specialTech: '타이칸 전기 스포츠카, 800V 충전시스템, 액티브 에어로다이나믹스'
    },
    '테슬라': {
        name: '테슬라',
        country: '미국',
        year: '2003',
        features: '전기차, 자율주행, 혁신',
        models: 'Model S, Model 3, Model X, Model Y',
        description: '전기차 혁명을 이끌고 있는 미국의 혁신적인 브랜드입니다. 자율주행 기술과 지속가능한 에너지 솔루션으로 미래 모빌리티를 선도하고 있습니다.',
        logo: 'T',
        techFeatures: 'Autopilot 자율주행, 슈퍼차저 네트워크, OTA 업데이트',
        strengths: '혁신적인 전기차 기술, 뛰어난 가속성능, 첨단 소프트웨어',
        weaknesses: '품질 편차, 높은 수리비용, A/S 네트워크 부족, 디자인 호불호',
        specialTech: 'Full Self-Driving, 4680 배터리셀, heat pump 시스템'
    }
};

// DOM 요소들
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const brandCard = document.getElementById('brandCard');
const noResults = document.getElementById('noResults');
const brandChips = document.querySelectorAll('.chip');

// 브랜드 정보를 표시하는 함수
function displayBrandInfo(brandKey) {
    const brand = carBrands[brandKey];
    
    if (brand) {
        // 브랜드 정보 표시
        document.getElementById('brandName').textContent = brand.name;
        document.getElementById('brandLogo').textContent = brand.logo;
        document.getElementById('brandCountry').textContent = brand.country;
        document.getElementById('brandYear').textContent = brand.year + '년';
        document.getElementById('brandFeatures').textContent = brand.features;
        document.getElementById('brandModels').textContent = brand.models;
        document.getElementById('brandTechFeatures').textContent = brand.techFeatures;
        document.getElementById('brandStrengths').textContent = brand.strengths;
        document.getElementById('brandWeaknesses').textContent = brand.weaknesses;
        document.getElementById('brandSpecialTech').textContent = brand.specialTech;
        document.getElementById('brandDescription').textContent = brand.description;
        
        // 카드 표시, 검색 결과 없음 숨김
        brandCard.style.display = 'block';
        noResults.style.display = 'none';
    } else {
        // 검색 결과가 없을 때
        brandCard.style.display = 'none';
        noResults.style.display = 'block';
    }
}

// 검색 함수
function searchBrand() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('브랜드명을 입력해주세요.');
        return;
    }
    
    // 브랜드 검색 (대소문자 구분 없이)
    let foundBrand = null;
    for (const [key, brand] of Object.entries(carBrands)) {
        if (key.toLowerCase().includes(searchTerm) || 
            brand.name.toLowerCase().includes(searchTerm)) {
            foundBrand = key;
            break;
        }
    }
    
    if (foundBrand) {
        displayBrandInfo(foundBrand);
    } else {
        brandCard.style.display = 'none';
        noResults.style.display = 'block';
    }
}

// 이벤트 리스너들
searchBtn.addEventListener('click', searchBrand);

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBrand();
    }
});

// 브랜드 칩 클릭 이벤트
brandChips.forEach(chip => {
    chip.addEventListener('click', function() {
        const brandName = this.getAttribute('data-brand');
        searchInput.value = brandName;
        displayBrandInfo(brandName);
    });
});

// 페이지 로드 시 초기 상태
window.addEventListener('load', function() {
    searchInput.focus();
});
