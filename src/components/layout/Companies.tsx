import React from 'react'
import Image from 'next/image'

const imagesArray = ['chase','asana','google','buzzfeed','toggl',]

export function Companies({}){
    return (
        <div className="px-4 mx-auto text-center ">
               <p className="font-lato font-bold text-gray-200 mb-5">INTEGRATING SOON WITH</p>
               <div className="flex flex-wrap  items-center justify-between">
                {
                    imagesArray.map((image,index) => {
                        return (
                            
                            <Image key={image+"__"+index} src={`/assets/images/${image}.png`}   alt="company logo" width="110" height="50"/>

                        )
                    })
                }
                {/* <Image 
                    src="/assets/images/company-scribble.png"
                    alt="a scribble by the company logos"
                    width="78"
                    height="347"
                /> */}
              </div>
          </div>
    )
}