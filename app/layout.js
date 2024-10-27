import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '에듀핏 - AI 시대, 모두를 위한 미래교육 플랫폼',
  description: '에듀핏은 학생, 직장인, 교사, 시니어 모두가 디지털 대전환 시대에 적응하고 성장할 수 있도록 돕는 종합 교육 플랫폼입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
