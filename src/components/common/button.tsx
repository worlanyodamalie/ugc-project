import React from 'react'

export function GenericButton({buttonText}: {buttonText: string}){
    return (
        <>
          <a href="#" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg ">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 " />
                  <span className="relative font-noto font-normal">{buttonText}</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                />
              </a>
        </>
    )
}
export function OutlineButton({buttonText}: {buttonText: string}){
    return (
      <>
        <a
          href="#_"
          className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-bold rounded-full group"
        >
          <span className="w-32  rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 "></span>
          <span className="relative w-full text-left text-black-800 ">
            {buttonText}
          </span>
          <span className="font-inter text-sm absolute inset-0 border-2 border-black-900 rounded-full"></span>
        </a>
      </>
    );
}