import Link from "next/link";
import React from "react";
import Image from 'next/image'
import { GenericButton  } from '@/components/common'



export function NavWrapper(){
    return (
        <>
    
    <nav className="">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    {/* <a href="#" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
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
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col items-center  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
        <li><Link href="/" legacyBehavior><a className="font-inter font-bold">For Social Media Brands</a></Link></li>
        <li><Link href="/" legacyBehavior><a className="font-inter font-bold">For Ecom Brands</a></Link></li>
        <li>
        <a  href="#"
            className="relative inline-block text-lg group text-center "
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
        </li>
        {/* <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative text-white">Button Text</span>
</a> */}
        {/* <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
           
            <div id="dropdownNavbar" className="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li><Link href="/" legacyBehavior><a className="font-inter font-bold">For Social Media Brands</a></Link></li>
                    <li><Link href="/" legacyBehavior><a className="font-inter font-bold">For Ecom Brands</a></Link></li>
                </ul>
            </div>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>         







             




   {/* <nav className="w-full">
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
          </nav> */}
        </>
    )
}