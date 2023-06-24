import { Header } from '@/components/Header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/footer'
import { StoreProvider } from '@/store/storeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id='modals' style={{zIndex: 5}}></div>
        <StoreProvider>
          <Header/>
          <div style={{minHeight: "100vh", overflow: 'auto', position: 'relative'}}>
            {children}
            <Footer/>
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}
