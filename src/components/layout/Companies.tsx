import React from 'react'
import Image from 'next/image'

const imagesArray = ['chase','asana','google','buzzfeed','toggl',]

export function Companies({}){
    return (
        <div className="px-4 mx-auto text-center ">
               <p className="font-lato font-bold text-[#b2b7be] mb-5">INTEGRATING SOON WITH</p>
               <div className="flex flex-wrap  items-center justify-between">
                {
                    imagesArray.map((image,index) => {
                        return (
                            
                            <Image key={image+"__"+index} src={`/assets/images/${image}.png`}   alt="company logo" width="110" height="50"/>

                        )
                    })
                }
               
              </div>
          </div>
    )
}