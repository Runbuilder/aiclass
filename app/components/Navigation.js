"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src="/logo.png" alt="에듀핏 로고" width={40} height={40} className="mr-2" />
            <div className="text-2xl font-bold text-blue-600">에듀핏</div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-600">소개</Link>
            <Link href="#programs" className="text-gray-600 hover:text-blue-600">교육과정</Link>
            <Link href="#platform" className="text-gray-600 hover:text-blue-600">플랫폼</Link>
            <Link href="#business" className="text-gray-600 hover:text-blue-600">비즈니스</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">문의하기</Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">소개</Link>
              <Link href="#programs" className="block px-3 py-2 text-gray-600 hover:text-blue-600">교육과정</Link>
              <Link href="#platform" className="block px-3 py-2 text-gray-600 hover:text-blue-600">플랫폼</Link>
              <Link href="#business" className="block px-3 py-2 text-gray-600 hover:text-blue-600">비즈니스</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">문의하기</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
