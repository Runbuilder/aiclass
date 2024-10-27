import Image from 'next/image';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image src="/logo.png" alt="에듀핏 로고" width={40} height={40} className="mr-2" />
            <h4 className="font-bold text-lg">에듀핏</h4>
          </div>
          <p className="text-gray-400">
            모두의 성장을 위한 미래교육 플랫폼
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">교육과정</h4>
          <ul className="space-y-2 text-gray-400">
            <li>학생</li>
            <li>교사</li>
            <li>직장인</li>
            <li>시니어</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">회사 소개</h4>
          <ul className="space-y-2 text-gray-400">
            <li>회사 소개</li>
            <li>채용 정보</li>
            <li>제휴 문의</li>
            <li>문의하기</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">소셜 미디어</h4>
          <ul className="space-y-2 text-gray-400">
            <li>유튜브</li>
            <li>카카오톡</li>
            <li>네이버카페</li>
            <li>인스타그램</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
