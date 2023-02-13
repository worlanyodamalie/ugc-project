import React from "react";
import Image from 'next/image'

interface IScribble{
    data: {
        src: string,
        width: number,
        height: number,
        alt: string

    }
}

export function ScribbleWrapper({data}: IScribble){
    return (
        <div className="relative w-full">
          <Image
            src={`/assets/images/${data.src}`}
            alt={data.alt}
            width={data.width}
            height={data.height}
          />
        </div>
    )
}