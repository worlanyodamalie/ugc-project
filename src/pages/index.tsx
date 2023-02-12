import Head from 'next/head'
import Image from 'next/image'
// import { Inter , Noto_Sans_Lepcha } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Companies } from '@/components/layout/index'
import { GenericButton , OutlineButton , ScribbleWrapper } from '@/components/common'

const items = [{
  title: '245%',
  text: 'More revenues for the brand'
},
{
  title: '130K+',
  text: 'Audiences reached across platform'
},
{
  title: '50+',
  text: 'brands work with us'
},
{
  title: '24+',
  text: 'Use this section to describe your '
}]

const hiwCards = [{
  img: 'campaign-icon.png',
  title: 'Campaign',
  text: 'Use this section to describe your company and the products you offer. You could share your company’s'
},{
  img: 'reward-type-icon.png',
  title: 'Reward Type',
  text: 'Use this section to describe your company and the products you offer. You could share your company’s'

},
{
  img: 'share-icon.png',
  title: 'Share',
  text: 'Use this section to describe your company and the products you offer. You could share your company’s'

},
{
  img: 'collect.png',
  title: 'collect',
  text: 'Use this section to describe your company and the products you offer. You could share your company’s'

}
]

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
                    width={200}
                    height={50}
                    priority
                  />
                </Link>
              </div>
              <div className="flex flex-row justify-items-center items-center justify-between w-2/5">
                <Link href="/" legacyBehavior>
                  <a className="font-inter font-bold">
                    For Social Media Brands
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="font-inter font-bold">For Ecom Brands</a>
                </Link>
                <a
                  href="#"
                  className="relative inline-block text-lg group text-center w-1/3"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                    <span className="relative ">Log in</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  />
                </a>
              </div>
            </div>
          </nav>
          <div className="grid max-w-screen-xl  py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="font-grifter max-w-2xl text-4xl md:text-5xl xl:text-6xl font-bold md:leading-normal	 xl:leading-snug">
                Turn your <span className="followers-highlight">followers</span>{" "}
                into your <span className="creative-highlight">creative</span>{" "}
                agency.
              </h1>

              <p className="font-noto font-normal max-w-xl mt-3 mb-10 md:text-lg lg:text-xl ">
                Engage and rewards your customers. Collect user-generated
                content from your social media followers, increase customer
                engagement and strengthen your brand&apos;s relationship with
                them.
              </p>
              <GenericButton buttonText="Start your campaign" />
            </div>
            <div className="hidden relative mx-auto lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/assets/images/turn-your-followers.png"
                alt="image of a woman smiling"
                width="369"
                height="503"
                // layout="fill"
                // objectFit="cover"
                // className="object-cover"
                // fill
              />
            </div>
          </div>

          <div>
            <Companies />
          </div>
        </div>
        <section className="w-full pt-12 px-5 bg-[#2B2A2B] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center mb-4 relative">
              <h1 className="font-grifter font-bold text-center text-white max-w-2xl text-4xl leading-snug">
                Transform your customer content into Marketing Asset
              </h1>
              <div className="lg:absolute lg:top-0 lg:right-[-12rem] lg:block hidden">
                <Image
                  src="/assets/images/hand-emoji.png"
                  alt="hand-emoji"
                  width="120"
                  height="111"
                />
              </div>
            </div>

            <p className="max-w-xl text-center text-white text-lg  my-5 font-noto font-normal">
              Engage and rewards your customers. Collect user-generated content
              from your social media followers and customers.
            </p>
            <div className="relative flex mt-4 w-full lg:w-2/5">
              <div className="lg:absolute lg:top-0 lg:left-[-12rem] lg:block hidden">
                <Image
                  src="/assets/images/love-eyes-emoji.png"
                  alt="hand-emoji"
                  width="120"
                  height="111"
                />
              </div>
              <Image
                src="/assets/images/transform-your-customer-content.png"
                alt="transform your customer content"
                className="w-full h-auto"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
        </section>
        <section className="container py-10">
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <Image
                src="/assets/images/collect-ugc-content.png"
                alt="transform your customer content"
                className="w-full h-auto"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col  w-1/2">
              <div className="mb-4">
                <OutlineButton buttonText="Collect" />
              </div>
              <h1 className="font-grifter font-bold text-[#212121] text-3xl mb-3">
                Collect UGC content
              </h1>
              <p className="font-noto font-normal text-ugc-blue mb-4">
                Send rewarding link to your customers in exchange for vertical
                content to be used on social media.
              </p>
              <div className="flex gap-3 mb-4">
                <Image
                  src="/assets/images/android.png"
                  alt="android"
                  width="56"
                  height="56"
                />
                <p className="font-inter font-normal text-lg text-ugc-blue">
                  <strong className="font-syne font-bold text-black-800 pr-1">
                    Android
                  </strong>
                  Leverage frameworks to provide a robust synopsis for high
                  overviews
                </p>
              </div>
              <div className="flex gap-3 mb-4">
                <Image
                  src="/assets/images/zapier.png"
                  alt="android"
                  width="56"
                  height="56"
                />
                <p className="font-inter font-normal text-lg text-ugc-blue">
                  <strong className="font-syne font-bold text-black-800 pr-1">
                    Zapier
                  </strong>
                  Bring to the table win-win survival strategies to ensure
                  domination.
                </p>
              </div>
              <div className="mt-8 w-2/3">
                <GenericButton buttonText="Start your campaign" />
              </div>
            </div>
          </div>
        </section>
        <ScribbleWrapper
          data={{
            src: "paperclip.png",
            width: 85,
            height: 116,
            alt: "paperclip",
          }}
        />

        <section className="container py-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col  w-1/2">
              <div className="mb-4">
                <OutlineButton buttonText="Reward" />
              </div>
              <h1 className="font-grifter mb-2 font-bold text-[#212121] text-4xl mb-3">
                Reward your customers
              </h1>
              <p className="font-noto font-normal text-ugc-blue mb-4">
                Engage with your customers and challenge their creativity to
                create your next creative ad or tik tok content.
              </p>

              <div className="mt-8 w-2/3">
                <GenericButton buttonText="Start your campaign" />
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/assets/images/reward-your-customers.png"
                alt="reward your customers"
                className="w-full h-auto"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
        </section>
        <ScribbleWrapper
          data={{
            src: "yellow-scribble.png",
            width: 164,
            height: 290,
            alt: "yellow scribble",
          }}
        />
        <section className="container relative">
          <div className="absolute top-[-8rem] p-10  mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full">
            <div className="flex ">
              <div className="w-1/3">
                <h1 className="font-grifter font-bold text-2xl">
                  Feel your feed with authentic content
                </h1>
              </div>
              <div className="flex w-full  flex-wrap">{
                ['Renforcer la relation avec son client','Increase reordering','Social Media licenced content','Reward your superfans'].map((item,index) => {
                      return (
                      <div className='w-1/2' key={"ugc--sec--"+ index}> 
                           <div  className="flex gap-1 items-center">
                        <div>
                        <Image
                          src="/assets/images/check.png"
                          alt="check"
                          width="24"
                          height="24"
                        />
                        </div>
                        
                        <h2 className="font-inter font-normal text-sm">{item}</h2>
                      </div>

                      </div>  
                        
                      )
                })
              }
                
              </div>
            </div>
          </div>
        </section>
        <section className="container py-10">
           <div className="flex gap-3 justify-center">
            {
              items.map((item,index) => {
                return (
                  <div key={"list--"+index} className='w-2/12'>
                    <h1 className='font-grifter font-bold text-6xl mb-3'>{item.title}</h1>
                    <div><p className="font-noto font-normal text-base">{item.text}</p></div>
                 </div>
                )
              })
            }
               
           </div>

        </section>
        <section className="container w-full max-w-7xl py-10">
            <div className="flex gap-5">
               <div className='flex flex-col w-1/2'>
                  <div className="mb-8">
                  <h1 className='font-grifter font-bold text-5xl mb-2'>How it works</h1>

                    <div className="w-2/3">
                      <p className='font-noto font-normal text-base'>Create A Reward campaign for your customer from our dashboard and share the link in their buying journey.</p>

                    </div>
                  </div>
                  <div className="relative pt-8">
                       <div className="absolute top-0 left-[-4rem]">
                        <Image
                              src={`/assets/images/scribble-green.png`}
                              alt="scribbles"
                              width="150"
                              height="185"
                            />
                       </div>
                       <div className="p-8 bg-white rounded-xl shadow-md overflow-hidden ">
                            <div className="flex flex-col">
                                  <div className='flex justify-center'>
                                     <h1 className="font-poppins font-bold text-3xl">Campaign Created</h1>
                                  </div>
                                  <div className='py-8 flex justify-center'>
                                    <Image 
                                      src="/assets/images/two-fingers.png"
                                      alt="icon two fingers"
                                      width="74"
                                      height="106"
                                    />
                                  </div>
                                  <div className='w-2/3 mx-auto p-6 bg-orange rounded-xl shadow-md overflow-hidden'>
                                      <div className='flex justify-center mb-3'>
                                          <p className='font-inter text-sm font-bold'>https://drop.in/adidas</p>
                                      </div>
                                  </div>
                                  <p className="py-5 font-inter font-normal text-center">You can know share your link in your newsletter, social media and more.</p>

                            </div>
                        </div> 
                        <div className="absolute bottom-0 right-[10rem]">
                        <Image
                              src={`/assets/images/scribble-blue.png`}
                              alt="scribbles"
                              width="150"
                              height="173"
                            />
                       </div>
                  </div>
                   
               </div>
               <div className='flex gap-4 w-1/2  flex-wrap'>
                 {
                  hiwCards.map((card,index) => {
                     return (
                      <div className="w-5/12" key={"hiw---cards--"+index}>
                        <div className="mb-3">
                         <Image 
                           src={`/assets/images/${card.img}`}
                           alt="campaign-icon"
                           width="102"
                           height="102"
                         />
                      </div>
                      <h1 className="font-grifter font-bold text-2xl mb-2">{card.title}</h1>
                      <div className="">
                         <p className="mb-2 font-noto text-sm">{card.text}</p>
                      </div>
                  </div>
                     )
                  })
                 }
                  
               </div>
            </div>
        </section>
      </main>
    </>
  );
}
