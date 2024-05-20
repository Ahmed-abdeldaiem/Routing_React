import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Eror() {
  return (
    <>
     <div className='bg-[#1abc9c] '>
    <div className=" flex flex-col content-center items-center pt-40 pb-20 justify-center align-middle">
        <img src="https://e7.pngegg.com/pngimages/902/706/png-clipart-computer-icons-emoticon-sadness-others-face-smiley-thumbnail.png" width={260} className='' alt="" srcset="" />
        <h2 className='text-white text-4xl font-bold my-6'>404 Page Not Found</h2>
        <div className='flex gap-4 align-middle items-center justify-center text-center'>
            <div className='w-20 h-1 bg-white'></div>
            <FontAwesomeIcon icon={faStar} className="text-white" />
            <div className='w-20 h-1 bg-white'></div>
        </div>
        <h5 className='text-white my-4'>Try to Routing in right path</h5>
    </div>
  </div>
    </>
  )
}
