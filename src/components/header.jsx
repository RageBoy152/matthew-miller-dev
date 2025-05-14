"use client";


import Link from "next/link";
import SocialLinks from "./UI/SocialLinks";
import { useEffect, useRef, useState } from "react";


export default function Header({ isNavbar, isActive }) {

  // full name refs
  const fnameRef = useRef();
  const lnameRef = useRef();

  // name wrapped state
  const [nameWrapped, setNameWrapped] = useState(false);

  // navbar active state
  const [navbarActive, setNavbarActive] = useState(false);
  


  // check wrapped state of full name heading
  useEffect(() => {
    const checkWrap = () => {
      // set nameWrapped bool
      setNameWrapped(fnameRef.current.getBoundingClientRect().top != lnameRef.current.getBoundingClientRect().top);
    }
    
    // check on mount
    checkWrap();
    
    // recheck on resize
    addEventListener("resize", checkWrap);

    // clean up event listener on unmount
    return () => removeEventListener("resize", checkWrap);
  }, []);



  return (
    <>
      {!isNavbar && <Header isNavbar={true} isActive={navbarActive} />}
      
      <header className={`lg:w-5/12 h-dvh bg-hero ${isNavbar ? `${isActive ? "block" : "hidden"} fixed top-0 z-10` : ""} lg:fixed lg:top-0`} data-is-navbar={isNavbar}>

        <div className="w-10/12 md:w-8/12 mx-auto h-full flex flex-col py-8 pb-16 md:py-16">


          {/*  HEADER TOP BRAND MARK  */}
          
          {!isNavbar && (
            <nav className="fixed top-0 start-0 lg:relative z-10 bg-none py-8 w-full uppercase font-space-mono text-gray">
              <div className="w-10/12 md:w-8/12 lg:w-full mx-auto flex items-center justify-between">
                <p className="cursor-default">Matthew_Miller.dev</p>
                <button className="lg:hidden cursor-pointer" onClick={() => setNavbarActive(!navbarActive)}><i className={`bi ${navbarActive ? "bi-x-lg" : "bi-filter-right"} text-2xl`}></i></button>
              </div>
            </nav>
          )}


          {/*  HEADER CONTENT  */}

          <div className="flex flex-col h-full justify-center pt-32 text-center xs:text-start">
            <h1 className="text-white text-5xl uppercase font-space-mono flex flex-col sm:flex-row flex-wrap justify-center xs:justify-start">
              <span ref={fnameRef}>Matthew</span>
              <span className={`${nameWrapped ? "invisible" : "visible"} hidden sm:inline-block`}>_</span>
              <span ref={lnameRef}>Miller</span>
            </h1>

            <h4 className="text-gray text-xl uppercase font-kanit">Frontend Developer</h4>
            <p className="mt-4 md:mt-2 text-lg leading-tight">2 years of experience  building responsive, interactive websites from the ground up. {isNavbar ? "NAV" : ""}</p>

            <SocialLinks tailwindClasses={"mt-6 md:mt-16 justify-center xs:justify-start"} />
          </div>


          {/*  HEADER NAV  */}

          <div className="flex flex-col w-fit ms-auto items-end gap-4 lg:gap-3 uppercase font-space-mono">
            <Link href="#about" className={true ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline"}>About <i className="bi bi-arrow-right lg:hidden"></i></Link>
            <Link href="#my-work" className={true ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline"}>My_work <i className="bi bi-arrow-right lg:hidden"></i></Link>
            <Link href="#education" className={true ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline"}>Education <i className="bi bi-arrow-right lg:hidden"></i></Link>
            <Link href="#get-in-touch" className={true ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline"}>Get_in_touch <i className="bi bi-arrow-right lg:hidden"></i></Link>
          </div>
          
        </div>
      </header>
    </>
  );
}
