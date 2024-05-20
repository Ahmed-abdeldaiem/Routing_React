import React from 'react'
// import { faFacebook ,faTwitter ,faGlobe ,faLinkedin } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faStar} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return <>
   <footer className="bg-[#2c3e50] py-20 md:px-3 ">

    <div className=" flex justify-between items-center gap-10 md:gap-1 align-middle flex-col md:flex-row  text-center text-white">
    <div className='w-1/3'>
        <h3 className='text-3xl font-semibold text-center'>LOCATION</h3>
        <p className='pt-2 pb-3'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className='w-1/3'>
        <h2 className='text-3xl font-semibold text-center'>AROUND THE WEB</h2>
        <div className="icons flex gap-2 justify-center items-center mt-2">
         <FontAwesomeIcon icon={faFacebook} className="text-white w-4 h-4 border border-white rounded-full p-2" />
        <FontAwesomeIcon icon={faTwitter} className="text-white w-4 h-4 border border-white rounded-full p-2" /> 
        <FontAwesomeIcon icon={faLinkedinIn} className="text-white w-4 h-4 border border-white rounded-full p-2" /> 
         <FontAwesomeIcon icon={faGlobe} className="text-white w-4 h-4 border border-white rounded-full p-2" /> 
        
        
       
       
       
        </div>
    </div>
    <div className='w-1/3 flex flex-col justify-center items-center text-center'>
        <h2 className='text-3xl font-semibold text-center'>ABOUT FREELANCER</h2>
        <p className='py-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>

    </div>


   </footer>
   <div className='bg-[#1a252f] text-center py-5'>
    <p className='text-white'>Copyright © Your Website 2021</p>
   </div>
  
  </>
}
