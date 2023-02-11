import React from 'react'
import Image from 'next/image'

const imagesArray = ['chase','asana','google','buzzfeed','toggl',]

export function Companies({}){
    return (
        <div>
               <p>INTEGRATING SOON WITH</p>
               <div className="flex flex-row">
                {
                    imagesArray.map((image,index) => {
                        return (
                            
                            <Image key={image+"__"+index} src={`/assets/images/${image}.png`}   alt="company logo" width="140" height="80"/>

                        )
                    })
                }
                
              </div>
          </div>
    )
}