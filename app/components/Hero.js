import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => (
  <div className="relative pt-24 pb-5">
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-6">
          <Image src="/logo.png" alt="에듀핏 로고" width={60} height={60} className="mr-4" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            모두를 위한 미래교육 플랫폼
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          맞춤형 미래교육을 지향하는 에듀핏은 학생, 교사, 직장인, 시니어 모두가 AI디지털 대전환 시대에
          적응하고 성장할 수 있도록 돕는 종합 교육 플랫폼입니다.🚀
        </p>
        <button className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg flex items-center mx-auto md:mx-0 hover:bg-blue-700">
          자세히 알아보기 <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

export default Hero;