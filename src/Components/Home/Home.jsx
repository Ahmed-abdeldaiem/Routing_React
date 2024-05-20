import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return <>
  
  <div className='bg-[#1abc9c] '>
    <div className=" flex flex-col content-center items-center pt-40 pb-20 justify-center align-middle">
        <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" width={260} className='' alt="" srcset="" />
        <h2 className='text-white text-4xl font-bold my-6'>START FRAMEWORK</h2>
        <div className='flex gap-4 align-middle items-center justify-center text-center'>
            <div className='w-20 h-1 bg-white'></div>
            <FontAwesomeIcon icon={faStar} className="text-white" />
            <div className='w-20 h-1 bg-white'></div>
        </div>
        <h5 className='text-white my-4'>Graphic Artist - Web Designer - Illustrator</h5>
    </div>
  </div>
  
  </>
}
