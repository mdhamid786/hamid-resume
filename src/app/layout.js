import { Inter,Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

// for font 
const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'hamid portfolio',
  description: 'full stack developer',
}

export default function RootLayout({ children }) {
  return (
   <>
    <Head>
      <meta name='viewport' content="width=device-width, initial-scale=1"/>
      <link ref="icon" href='/favicon.ico'/>
      
    </Head>
    <html lang="en">
     
      <body className={`${inter.className} bg-light dark:bg-dark w-full min-h-screen`} >
        <Script id="theme-switcher" strategy='beforeInteractive'>
          {
            `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            `
          }
        </Script>
         <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
   </>
  )
}
