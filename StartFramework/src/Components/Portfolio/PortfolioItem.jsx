import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'





export default function PortfolioItem({img}) {
  return (
    <div  className='relative overflow-hidden rounded-lg z-10 group'>
    <img src={img} className="rounded-lg" alt="portfolio image" />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1abc9c] bg-opacity-85 opacity-0 transition-all duration-700 cursor-pointer flex justify-center align-middle items-center z-20 group-hover:opacity-100">
    <FontAwesomeIcon icon={faPlus} className="text-white text-8xl font-semibold" />
    </div>
    </div>
  )
}
