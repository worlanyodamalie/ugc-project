import React from 'react'
import Image from 'next/image'

const imagesArray = ['chase','asana','google','buzzfeed','toggl','walmart']

export function Companies({}){
    return (
        <div className="px-4 mx-auto text-center ">
               <p className="font-lato font-bold text-[#b2b7be] mb-5">INTEGRATING SOON WITH</p>
               <div className="flex flex-wrap items-center justify-between lg:gap-0  md:gap-1 gap-2">
                  
                        {
                            imagesArray.map((image,index) => {
                                return (
                                 <div key={image+"__"+index}>   
                                    <Image  src={`/assets/images/${image}.png`}   alt="company logo" width="110" height="50"/>
                                    </div>
                                )
                            })
                        }
                  
                
                
                <div className="absolute top-[-9rem] right-[-3rem] w-16">
                    <Image
                    src="/assets/images/company-scribble.png"
                    alt="company scribble"
                    width={98}
                    height={358}
                    
                    />
                </div>
              </div>
          </div>
    )
}