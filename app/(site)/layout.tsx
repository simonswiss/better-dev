import { Poppins } from 'next/font/google'

import Head from '@components/head'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <Head />
      <body className="bg-gradient-to-b from-transparent via-transparent to-cyan-100 text-slate-900">
        <div className="flex flex-col h-full min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
