import { GraduationCap, Building2, BookOpen, Users } from 'lucide-react';

const ProgramCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="w-12 h-12 text-blue-600 mb-4 mx-auto md:mx-0" />
    <h3 className="text-xl font-semibold mb-3 text-center md:text-left">{title}</h3>
    <p className="text-gray-600 text-center md:text-left">{description}</p>
  </div>
);

const Programs = () => (
  <section id="programs" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">맞춤형 교육 프로그램</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <ProgramCard
          icon={GraduationCap}
          title="학생"
          description="AI 활용 학습법, 미래직업 탐색, 디지털 포트폴리오 제작, 프로젝트 기반 창업 실습"
        />
        <ProgramCard
          icon={BookOpen}
          title="교사"
          description="교육현장 AI 활용법, 디지털 교수법, 개별화 학습 전략, 에듀테크 활용"
        />
        <ProgramCard
          icon={Building2}
          title="직장인"
          description="업종별 AI 도구 활용, 디지털 전환 전략, 경력 전환 설계, 부업/투잡 시작하기"
        />
        <ProgramCard
          icon={Users}
          title="시니어"
          description="디지털 기초 역량, 온라인 커뮤니티 활용, 디지털 창업, 노후 설계"
        />
      </div>
    </div>
  </section>
);

export default Programs;
