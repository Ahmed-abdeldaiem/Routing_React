import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <>
      <div className="bg-[#1abc9c] ">
        <div className=" flex flex-col content-center items-center pt-64 pb-52 justify-center align-middle">
          <h2 className="text-white text-4xl font-bold my-6">
            ABOUT COMPONENT
          </h2>
          <div className="flex gap-4 align-middle items-center justify-center text-center">
            <div className="w-20 h-1 bg-white"></div>
            <FontAwesomeIcon icon={faStar} className="text-white" />
            <div className="w-20 h-1 bg-white"></div>
          </div>
          <div className="container flex gap-8  px-12 md:px-16 lg:px-44 flex-col md:flex-row my-4">
            <p className=" text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className=" text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}
