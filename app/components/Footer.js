import Image from 'next/image';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-5">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="에듀핏 로고" width={40} height={40} className="mr-2" />
          <h4 className="font-bold text-lg">에듀핏</h4>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} 에듀핏. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
