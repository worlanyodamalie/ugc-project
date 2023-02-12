import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter , Noto_Sans_Lepcha , Lato , Syne , Poppins } from '@next/font/google'
import localFont from '@next/font/local'

const inter = Inter({ 
  subsets: ['latin'] , 
  variable: "--font-inter" 
})
const noto = Noto_Sans_Lepcha({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-noto"
})
const lato = Lato({
  subsets: ['latin'],
  weight: ["400","700"],
  variable: "--font-lato"
})

const syne = Syne({
  subsets: ['latin'],
  variable: "--font-syne"
})

const grifter = localFont({
  src: './font/grifterbold.otf' , 
  variable: "--font-grifter"
})

const poppins = Poppins({ 
  weight: "700",
  subsets: ['latin'] , 
  variable: "--font-poppins" 
})

// console.log("grifter",grifter)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${grifter.variable} ${noto.variable} ${lato.variable} ${syne.variable} ${poppins.variable}} font-sans`}>
       <style jsx global>{
        `
        :root {
          --inter-font: ${inter.style.fontFamily};
          --noto_sans_lepta: ${noto.style.fontFamily}  ;
          --grifter: ${grifter.style.fontFamily};    
           
         } 
        `
       }
         
       </style>
      <Component {...pageProps} />
    </main>
  );
   
  
}
