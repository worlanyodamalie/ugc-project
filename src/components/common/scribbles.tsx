import React from "react";
import Image from 'next/image'

interface IScribble{
    data: {
        src: string,
        width: number,
        height: number,
        alt: string
        scribbleHeight: string
        scribbleWidth: string
    }
}

export function ScribbleWrapper({data}: IScribble){
    return (
        <div className={`relative `}>
          <div> 
              <Image
                src={`/assets/images/${data.src}`}
                alt={data.alt}
                width={data.width}
                height={data.height}
              />
          </div>  
        </div>
    )
}