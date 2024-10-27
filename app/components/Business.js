import { BarChart3, Users, Award } from 'lucide-react';

const BusinessCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start">
      <Icon className="w-6 h-6 mr-2 text-blue-600" />
      {title}
    </h3>
    <ul className="space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index} className="text-center md:text-left">• {item}</li>
      ))}
    </ul>
  </div>
);

const Business = () => (
  <section id="business" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">비즈니스 모델</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <BusinessCard
          icon={BarChart3}
          title="수익 구조"
          items={[
            "구독형 멤버십",
            "교육 프로그램 판매",
            "전문가 서비스",
            "기업 솔루션"
          ]}
        />
        <BusinessCard
          icon={Users}
          title="목표 시장"
          items={[
            "교육기관",
            "기업 인사팀",
            "공공기관",
            "개인 학습자"
          ]}
        />
        <BusinessCard
          icon={Award}
          title="경쟁 우위"
          items={[
            "실무 중심 교육",
            "산업계 파트너십",
            "지속적 콘텐츠 업데이트",
            "개인화 학습 경험"
          ]}
        />
      </div>
    </div>
  </section>
);

export default Business;
