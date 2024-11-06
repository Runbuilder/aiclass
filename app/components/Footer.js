import Image from 'next/image';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image src="/logo.png" alt="에듀핏 로고" width={40} height={40} className="mr-2" />
            <h4 className="font-bold text-lg">에듀핏</h4>
          </div>
          <p className="text-gray-400">
            모두의 성장을 위한 미래교육 플랫폼
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
