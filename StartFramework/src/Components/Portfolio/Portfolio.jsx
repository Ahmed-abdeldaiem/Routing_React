import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
    const [display, setdisply] = useState('hidden');
    const [imaageSrc, setimaageSrc] = useState('');

  const img1 =
    "https://routeegy.github.io/startFramework/assets/images/poert1.png";
  const img2 =
    "https://routeegy.github.io/startFramework/assets/images/port2.png";
  const img3 =
    "https://routeegy.github.io/startFramework/assets/images/port3.png";

  return (
    <>
      <div className=" flex flex-col content-center items-center pt-32 pb-4 justify-center align-middle">
        <h2 className="text-[#2c3e50] text-4xl font-bold my-6">
          PORTFOLIO COMPONENT
        </h2>
        <div className="flex gap-4 align-middle items-center justify-center text-center">
          <div className="w-20 h-1 bg-[#2c3e50]"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#2c3e50]" />
          <div className="w-20 h-1 bg-[#2c3e50]"></div>
        </div>
      </div>
      <div className="container pb-28">
        <div className=" grid  grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div onClick={()=>{
                setdisply('block');
                setimaageSrc(img1)
            }}>
            <PortfolioItem img={img1}/>
            </div>


            <div onClick={()=>{
                setdisply('block');
                setimaageSrc(img2)
            }}>
            <PortfolioItem img={img2}/>
            </div>

            <div onClick={()=>{
                setdisply('block');
                setimaageSrc(img3)
            }}>
             <PortfolioItem img={img3}/>
            </div>
            <div onClick={()=>{
                setdisply('block');
                setimaageSrc(img1)
            }}>
            <PortfolioItem img={img1}/>
            </div>


            <div onClick={()=>{
                setdisply('block');
                setimaageSrc(img2)
            }}>
            <PortfolioItem img={img2}/>
            </div>

            <div onClick={()=>{
                setdisply('block');
                setimaageSrc(img3)
            }}>
             <PortfolioItem img={img3}/>
            </div>
       

        
       
       
       


         
        </div>
      </div>
      <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-blue-500 bg-opacity-40 flex justify-center items-center align-middle ${display}`}
      
      onClick={(e)=>{
    //    console.log(e.target.closest('img'));
    //    console.log(typeof(e.target));

        if (!e.target.closest('img')) {
            setdisply('hidden');
            setimaageSrc('')
            
        }
      }}
      
      >

            <img src={imaageSrc} width='600' alt="portfolio image" />

      </div>
    </>
  );
}
