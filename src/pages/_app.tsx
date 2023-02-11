import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter , Noto_Sans_Lepcha } from '@next/font/google'
import localFont from '@next/font/local'

const inter = Inter({ 
  subsets: ['latin'] , 
  variable: "--font-inter" 
})
const noto_sans_lepta = Noto_Sans_Lepcha({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-noto"
})
const grifter = localFont({
  src: './font/grifterbold.otf' , 
  variable: "--font-grifter"
})

// console.log("grifter",grifter)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${grifter.variable} ${noto_sans_lepta.variable} font-sans`}>
       <style jsx global>{
        `
        :root {
          --inter-font: ${inter.style.fontFamily};
          --noto_sans_lepta: ${noto_sans_lepta.style.fontFamily}  ;
          --grifter: ${grifter.style.fontFamily};    
           
         } 
        `
       }
         
       </style>
      <Component {...pageProps} />
    </main>
  );
   
  
}
