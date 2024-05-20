import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function ContactUs() {
  const [translate, settranslateClass] = useState("2");
  return (
    <>
      <div className=" flex flex-col content-center items-center pt-32 pb-4 justify-center align-middle">
        <h2 className="text-[#2c3e50] text-4xl font-bold my-6">
          CONATCT SECTION
        </h2>
        <div className="flex gap-4 align-middle items-center justify-center text-center">
          <div className="w-20 h-1 bg-[#2c3e50]"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#2c3e50]" />
          <div className="w-20 h-1 bg-[#2c3e50]"></div>
        </div>
      </div>

      <form className="container flex justify-center items-center gap-10 flex-col my-5 ">
        <div class="relative z-0 w-10/12 lg:w-1/2">
          <input
            type="text"
            id="userName"
            className="block rounded-md py-3 px-0 w-full text-lg text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder="userName"
            onChange={(e) => {
              if (!e.target.value) {
                settranslateClass("2");
              } else {
                settranslateClass("7");
              }
            }}
          />
          <label
            htmlFor="userName"
            className={`absolute text-sm  duration-500 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:start-0 text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-${translate} rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            userName :
          </label>
        </div>

        <div class="relative z-0 w-10/12 lg:w-1/2">
          <input
            type="number"
            id="userAge"
            className="block rounded-md py-3 px-0 w-full text-lg text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder="userAge"
            onChange={(e) => {
              if (!e.target.value) {
                settranslateClass("2");
              } else {
                settranslateClass("7");
              }
            }}
          />
          <label
            htmlFor="userAge"
            className={`absolute text-sm  duration-500 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:start-0 text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-${translate} rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            userAge :
          </label>
        </div>

        <div class="relative z-0 w-10/12 lg:w-1/2">
          <input
            type="text"
            id="userEmail"
            className="block rounded-md py-3 px-0 w-full text-lg text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder="userEmail"
            onChange={(e) => {
              if (e.target.value.length === 0) {
                settranslateClass("2");
              } else {
                settranslateClass("7");
              }
            }}
          />
          <label
            htmlFor="userEmail"
            className={`absolute text-sm  duration-500 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:start-0 text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-${translate} rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            userEmail :
          </label>
        </div>

        <div class="relative z-0 w-10/12 lg:w-1/2">
          <input
            type="password"
            id="userPassword"
            className="block rounded-md py-3 px-0 w-full text-lg text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder="userPassword"
            onChange={(e) => {
              if (e.target.value.length === 0) {
                settranslateClass("2");
              } else {
                settranslateClass("7");
              }
            }}
          />
          <label
            htmlFor="userPassword"
            className={`absolute text-sm  duration-500 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:start-0 text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-${translate} rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            userPassword :
          </label>
        </div>

        <div className="flex text-start items-start justify-start  w-10/12 lg:w-1/2">
          <button type="submit" onClick={(e)=>{
            e.preventDefault()
          }} className="text-white rounded-lg px-4 py-2 bg-[#1abc9c]">
            send message
          </button>
        </div>
      </form>
    </>
  );
}
