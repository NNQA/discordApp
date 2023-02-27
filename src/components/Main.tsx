import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import  bg1  from "../statics/bg_1.svg"
import  bg2  from "../statics/bg_2.svg"
import  bg3  from "../statics/bg_3.svg"

export default function Main() {
  return (
    <div className='bg-discord_blue w-full pb-8 md:pb-0 md:h-[81vh]'>
      <div className='p-7 py-9 md:flex relative flex flex-col'>
        <div className='text-white flex flex-col gap-7
          md:max-w-md lg:max-w-none mt-12 items-center'>
          <h1 className='font-sans text-2xl font-bold 
            font-fontmain tracking-wider lg:text-5xl sm:text-2xl'>IMAGINE A PLACE...</h1>
          <h2 className='text-1xl pt-4 lg:max-w-2xl tracking-wide'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
        </div>
        <div className='flex flex-col gap-6 sm:flex-row md:flex-col
          md:items-start lg:flex-row items-center justify-center mt-12'>
          <button className='flex flex-row space-x-4 w-68 bg-white font-medium items-center 
            text-lg hover:shadow-2xl hover:text-white hover:bg-gray-900 transition duration-300 
            hover:-translate-y-2 hover:translate-x-2 p-4 justify-center rounded-full'>
            <ArrowDownTrayIcon className='w-6 mr-2'/>
            Download for Windows</button>
          <button className='bg-gray-900 text-white w-72 rounded-full p-4 hover:shadow-2xl
            transition duration-300 hover:bg-white hover:text-black font-medium justify-center  
            hover:-translate-y-2 hover:translate-x-2
            items-center text-lg'>Open discord in your browser</button>
        </div>
        <div className='flex flex-grow overflow-hidden'>
          <img src={bg1} alt="Image Bg-1" className="translate-x-[200px] max-h-[250px] lg:flex hidden absolute" />
          <img src={bg2} alt="Image Bg-2" className='absolute lg:flex mt-[160px] -left-44 
          sm:-left-[180px] lg:-translate-x-32 top-24 sm:flex hidden '/>
          <img src={bg3} alt="Image Bg-3" className='absolute right-0 top-20 mt-[190px]
          h-[350px] w-[550px] sm:flex hidden'/>
        </div>
      </div>
    </div>
  )
}

