import { Laptop, UserCircle, FolderKanban } from 'lucide-react';

const PlatformFeature = ({ icon: Icon, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-4 text-center md:text-left flex items-center">
      <Icon className="w-6 h-6 mr-2 text-blue-600" />
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Platform = () => (
  <section id="platform" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">플랫폼 특징</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <PlatformFeature
          icon={Laptop}
          title="하이브리드 학습 시스템"
          items={[
            "온라인 강의 플랫폼",
            "오프라인 워크샵 및 멘토링",
            "실시간 화상 코칭",
            "커뮤니티 기반 학습"
          ]}
        />
        <PlatformFeature
          icon={UserCircle}
          title="개인화 학습 경험"
          items={[
            "AI 기반 학습자 분석",
            "맞춤형 커리큘럼 추천",
            "학습 진행 현황 관리",
            "전문가 1:1 매칭"
          ]}
        />
        <PlatformFeature
          icon={FolderKanban}
          title="통합 포트폴리오 시스템"
          items={[
            "포트폴리오 생성 및 기록",
            "AI 기반 역량 분석 리포트",
            "교육자-기업 연계 시스템",
            "맞춤형 진로 추천"
          ]}
        />
      </div>
    </div>
  </section>
);

export default Platform;
