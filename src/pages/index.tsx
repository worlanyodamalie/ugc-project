import Head from 'next/head'
import Image from 'next/image'
// import { Inter , Noto_Sans_Lepcha } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Companies } from '@/components/layout/index'


export default function Home() {
  return (
    <>
      <Head>
        <title>UGC</title>
        <meta name="description" content="UGC Landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="w-full h-screen py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-500 font-semibold">Good Morning</h2>
          <p className="mt-2 text-blue-800 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Welcome to Sling Academy</p>
        </div>

        <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div
            className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
            <div className="mt-2 font-bold">John Doe</div>
            <div className="font-light">Some description</div>
          </div>

          <div
            className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
            <div className="mt-2 font-bold">John Doe</div>
            <div className="font-light">Some description</div>
          </div>

          <div
            className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
            <div className="mt-2 font-bold">John Doe</div>
            <div className="font-light">Some description</div>
          </div>

          <div
            className="bg-purple-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
            <div className="mt-2 font-bold">John Doe</div>
            <div className="font-light">Some description</div>
          </div>
        </div>


      </div>
    </div> */}
      <main className={styles.main}>
        <div className="container p-8">
          <nav className="w-full">
            <div className="flex justify-between justify-items-center items-center">
              <div>
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="UGC Logo"
                    // className={styles.vercelLogo}
                    width={100}
                    height={50}
                    priority
                  />
                </Link>
              </div>
              <div className="flex flex-row justify-items-center items-center justify-between w-2/5">
                <Link href="/" legacyBehavior>
                  <a className="font-inter font-bold">For Social Media Brands</a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="font-inter font-bold">For Ecom Brands</a>
                </Link>
                <a href="#" className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                    <span className="relative">Log in</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  />
                </a>
              </div>
            </div>
          </nav>
          <div className="flex flex-row">
              <div className="w-1/2">
                 <h1 className="font-grifter text-6xl font-bold">Turn your  <span className="followers-highlight">followers</span>  into your <span className="creative-highlight">creative</span> agency.</h1>
                 <p>Engage and rewards your customers. Collect user-generated content from your social media followers, increase customer engagement and strengthen your brand&apos;s relationship with them. </p>
                 <a href="#" className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                    <span className="relative">Start your campaign</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  />
                </a>
              </div>
              <div className="w-1/2">
                <div className="mx-auto ">
                  <Image
                    src="/assets/images/turn-your-followers.png"
                    alt="image of a woman smiling"
                    width="500"
                    height="800"
                    // layout="fill"
                    // objectFit="cover"
                    // className={styles.vercelLogo}
                    
                  />
                </div>
              
              </div>

          </div>
          <div>
             <Companies />
          </div>
          
        </div>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  );
}
