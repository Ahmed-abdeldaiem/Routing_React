import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);


  const [paddingClass, setPaddingClass] = useState('py-4'); // Initial padding class

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position
      if (window.scrollY > 10) {
        setPaddingClass('py-1'); // Change padding when scrolled down
      } else {
        setPaddingClass('py-4'); // Default padding when scrolled to top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return  <>
  <header className={`bg-[#2c3e50] container ${paddingClass} transition-all duration-700 fixed top-0 left-0 right-0 z-40`}>
  <div className="  px-4 sm:px-6 lg:px-0">
    <div className=" flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link className="block text-teal-600" to="">
          <span className="sr-only">Home</span>
          
          <h1 className='text-white text-3xl font-bold'>START FRAMEWORK</h1>

         
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink  className="text-white font-semibold text-lg uppercase rounded-lg px-3 py-2  transition-all " to="about"> About </NavLink>
            </li>

            <li>
              <NavLink className="text-white font-semibold text2x text-lg uppercase rounded-lg px-3 py-2 transition-all " to="portfolio"> Portfolio </NavLink>
            </li>

            <li>
              <NavLink className="text-white font-semibold text2x text-lg uppercase rounded-lg px-3 py-2 transition-all " to="contact"> Contact </NavLink>
            </li>

           

          </ul>
        </nav>

        <div className="flex items-center gap-4">
         

          <div className="block lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} 
             className="rounded border border-black p-2 text-gray-900 transition hover:text-gray-900/75"
             aria-controls="mobile-menu"
              aria-expanded={isOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'} lg:hidden overflow-hidden transition-max-height duration-700 ease-in-out`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
        <NavLink  className="text-white font-semibold text-lg uppercase rounded-lg px-3 py-2  transition-all " to="about"> About </NavLink>
        <NavLink className="text-white font-semibold text2x text-lg uppercase rounded-lg px-3 py-2 transition-all " to="portfolio"> Portfolio </NavLink>
        <NavLink className="text-white font-semibold text2x text-lg uppercase rounded-lg px-3 py-2 transition-all " to="contact"> Contact </NavLink>
        </div>
      </div>
</header>

  </>
}


// const Navbar2 = () => {
 

//   return (
//     <nav className="bg-gray-800">
 
//           <div className="-mr-2 flex md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
       
// </nav>
//   );
// };



