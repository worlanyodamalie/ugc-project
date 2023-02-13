import Head from 'next/head'
import Image from 'next/image'
// import { Inter , Noto_Sans_Lepcha } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Companies , NavWrapper } from '@/components/layout/index'
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
  title: 'Collect',
  text: 'Use this section to describe your company and the products you offer. You could share your company’s'

}
]

const plans = [{
  title: "Free",
  description: "Level up your Figma design workflow with full access to Clonify library components.",
  price: "$0",
  price_title: "Free forever",
  buttonText: "Join Free",
  btnBg: "bg-white",
  btnTextColor: "",
  btnBgShadow: ""
},
{
  title: "E-commerce store",
  description: "Level up your Figma design workflow with full access to Clonify library components.",
  price: "$39",
  price_title: "Per Month",
  buttonText: "Join Pro",
  btnBg: "bg-orange",
  btnTextColor: "",
  btnBgShadow: ""

},
{
  title: "DTC Brands",
  description: "Level up your Figma design workflow with full access to Clonify library components.",
  price: "$89",
  price_title: "Per Month",
  buttonText: "Join Pro +",
  btnBg: "bg-black-700",
  btnTextColor: "text-white",
  btnBgShadow: "bg-orange"

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
      
      <main className={styles.main}>
        <div className="container p-8">
          <NavWrapper />
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
                width="400"
                height="503"
                // layout="fill"
                // objectFit="cover"
                // className="object-cover"
                // fill
              />
            </div>
          </div>

          <div className="relative">
            <Companies />
            
          </div>
          {/* <div className="absolute inset-y-0 right-0 w-16">
                    <Image
                    src="/assets/images/company-scribble.png"
                    alt="company scribble"
                    width={98}
                    height={358}
                    
                    />
                </div> */}
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
        <section className="container max-w-7xl my-20 px-4">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/images/collect-ugc-content.png"
                alt="transform your customer content"
                className="w-full h-auto"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col  w-full md:w-1/2">
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
              <div className="flex flex-wrap lg:flex-nowrap gap-3 mb-4">
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
              <div className="flex flex-wrap lg:flex-nowrap gap-3 mb-4">
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
        <section className="container  relative">
       
            <div className="absolute h-32 w-32 lg:left-[0rem] xl:left-[-5rem] 2xl:left-[-32rem] top-[-5rem]"> 
                <Image
                  src={`/assets/images/paperclip.png`}
                  alt={"papper clip"}
                  width={85}
                  height={116}
                />
            </div>  
          
        </section>
        {/* <ScribbleWrapper
          data={{
            src: "paperclip.png",
            width: 85,
            height: 116,
            alt: "paperclip",
          }}
        /> */}

        <section className="container max-w-7xl my-20 px-8">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col  w-full md:w-1/2">
              <div className="mb-4">
                <OutlineButton buttonText="Reward" />
              </div>
              <h1 className="font-grifter  font-bold text-[#212121] text-4xl mb-3">
                Reward your customers
              </h1>
              <p className="font-noto font-normal text-ugc-blue mb-4">
                Engage with your customers and challenge their creativity to
                create your next creative ad or tik tok content.
              </p>

              <div className="mt-8 ">
                <GenericButton buttonText="Start your campaign"  />
              </div>
            </div>
            <div className="w-full md:w-1/2">
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
        <section className="container z-1 relative">
            <div className="absolute h-32 w-32 lg:left-[0rem] xl:left-[-5rem] 2xl:left-[-32rem] top-[-5rem]"> 
                <Image
                  src={`/assets/images/yellow-scribble.png`}
                  alt={"yellow scribble"}
                  width={164}
                  height={290}
                />
            </div>  
          
        </section>
        <section className="container relative max-w-7xl px-4 z-2">
          <div className="p-10  mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full">
            <div className="flex md:flex-nowrap flex-wrap max-w-3xl mx-auto">
              <div className="md:w-2/3 w-full">
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
          {/* <Image 
            src="/assets/images/scribble-purple.png"
            alt="scribbles"
            width={100}
            height={148}
          /> */}
        </section>
        <section className="container max-w-7xl my-20">
           <div className="relative  flex flex-wrap gap-5 justify-center">
            {
              items.map((item,index) => {
                return (
                  <div key={"list--"+index} className='w-1/2 lg:w-2/12 md:w-3/12 '>
                    <h1 className='font-grifter font-bold text-5xl mb-3'>{item.title}</h1>
                    <div><p className="font-noto font-normal text-base">{item.text}</p></div>
                 </div>
                )
              })
            }
               
           </div>

        </section>
        <section className="container w-full max-w-7xl my-20 px-8">
            <div className="flex flex-wrap lg:flex-nowrap gap-5">
               <div className='flex flex-col lg:w-1/2 w-full'>
                  <div className="mb-8 lg:text-start md:text-center">
                     <h1 className='font-grifter font-bold text-5xl mb-2'>How it works</h1>

                    <div className="w-full lg:w-2/3">
                      <p className='font-noto font-normal text-base'>Create A Reward campaign for your customer from our dashboard and share the link in their buying journey.</p>

                    </div>
                  </div>
                  <div className="relative pt-8">
                       <div className="hidden absolute top-0 lg:left-[-4rem] md:left-[6rem] md:block">
                        <Image
                              src={`/assets/images/scribble-green.png`}
                              alt="scribbles"
                              width="150"
                              height="185"
                            />
                       </div>
                       <div className="max-w-sm md:mx-auto lg:mx-0 p-8 bg-white rounded-xl shadow-md overflow-hidden ">
                            <div className="flex flex-col">
                                  <div className='flex justify-center'>
                                     <h1 className="font-poppins font-bold text-2xl">Campaign Created</h1>
                                  </div>
                                  <div className='py-8 flex justify-center'>
                                    <Image 
                                      src="/assets/images/two-fingers.png"
                                      alt="icon two fingers"
                                      width="74"
                                      height="106"
                                    />
                                  </div>
                                  <div className='w-2/3 mx-auto p-4 bg-orange rounded-xl shadow-md overflow-hidden'>
                                      <div className='flex justify-center '>
                                          <p className='font-inter text-sm font-bold'>https://drop.in/adidas</p>
                                      </div>
                                  </div>
                                  <p className="py-5 font-inter font-normal text-center">You can know share your link in your newsletter, social media and more.</p>

                            </div>
                        </div> 
                        <div className="hidden md:block absolute bottom-0 right-[10rem]">
                          <Image
                                src={`/assets/images/scribble-blue.png`}
                                alt="scribbles"
                                width="150"
                                height="173"
                              />
                       </div>
                  </div>
                   
               </div>
               <div className='flex gap-4 lg:w-1/2 w-full flex-wrap lg:justify-start md:justify-center'>
                 {
                  hiwCards.map((card,index) => {
                     return (
                      <div className="md:w-5/12" key={"hiw---cards--"+index}>
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
        <section className='container max-w-7xl py-10 px-4 '>
            <div className="flex flex-col mx-auto max-w-md">
                <p className="font-roboto font-bold mb-1">Testimonials</p>
                <h1 className="font-roboto font-bold text-2xl max-w-2xl mb-2">&quot;With Droppin, we collected few months worth of content from our customers in a week.&quot;</h1>
                <div className="flex gap-2 items-center">
                    <div>
                       <Image 
                          alt="avatar"
                          src="/assets/images/avatar.png"
                          width={80}
                          height={80} />
                    </div>
                    <div>
                       <h1 className="font-syne font-bold text-lg text-black-800">Mike Portnoy</h1>
                       <p className="font-inter font-normal text-sm">Social Media Agency owner</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="container max-w-7xl py-10 px-4">
            <h1 className='font-grifter font-bold text-4xl md:text-5xl text-center mb-4'>Choose a pricing plan</h1>
            <p className="font-noto font-normal text-xl mx-auto text-[#141414] max-w-3xl text-align-last:center">Meet Dropping — the most authentic way to collect customers content. Create a reward campaign and share with your superfans. Create content from your audience for your audience.</p>
        </section>
        <section className='container max-w-7xl px-4 py-10'>
             <div className='flex flex-wrap gap-5 w-full justify-center'>
              {
                plans.map((plan,index) => {
                  return (
                    <div key={"price-card--*-"+index+plan.price_title} className='lg:max-w-[25%] md:max-w-[30%] p-6 bg-white rounded-xl shadow-md overflow-hidden border border-[#505050]'>
                    <div className='flex flex-col'>
                        <h1 className="font-inter font-bold text-[#141414] text-xl mb-2">{plan.title}</h1>
                        <p className="font-noto text-sm text-ugc-blue max-w-sm">{plan.description}</p>
                        <h1 className="font-space_grotesk font-bold text-5xl text-[#141414] my-3">{plan.price}</h1>
                        <p className="text-sm text-ugc-blue font-noto pb-9">{plan.price_title}</p>
                        <div className="mb-6">
                        {
                           ['Access to full library','1 user license','Figma Plugin','Free Exclusives','Free Exclusives'].map((item,index) => {
                               return (
                                 <div key={"features--"+{index}} className="flex gap-2 items-center mb-4">
                                     <div>
                                       <Image
                                         src="/assets/images/check-black.png"
                                         alt="check"
                                         width="24"
                                         height="24"
                                       />
                                     </div>
                                     <h2 className="font-noto font-normal text-base">{item}</h2>
                                 </div>
                               )
                           })
                         }
                        </div>
                        
                         <GenericButton buttonText={plan.buttonText}  bgColor={plan.btnBg} btnTextColor={plan.btnTextColor} btnBgShadow={plan.btnBgShadow} />     
                    </div>
                 </div>
                  )
                })
              }
               
             </div>
             <h1 className='pt-8  font-grifter font-bold text-center '> Made with ❤️ in Casablanca 🇲🇦 - contact@dropppin.com</h1>
        </section>
      </main>
    </>
  );
}
