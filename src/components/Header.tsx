"use client";


// hook imports
import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useTransform } from "motion/react"

// component imports
import SocialLinks from "./UI/SocialLinks";
import Link from "next/link";
import { AlignRight, MoveRight, X } from "lucide-react";

// lib imports
import * as motion from "motion/react-client"
import { animOnVisible } from "@/utils/animate";



// hard coded data for navbar links
const navLinks = [
  { label: "About", href: "#about" },
  { label: "My_work", href: "#my-work" },
  { label: "Education", href: "#education" },
  { label: "Get_in_touch", href: "#get-in-touch" }
]



export default function Header({ isNavbar = false, isActive = false }: { isNavbar?: boolean, isActive?: boolean }) {
  const reducedMotion = useReducedMotion();


  // full name refs
  const fnameRef = useRef<HTMLSpanElement>(null);
  const lnameRef = useRef<HTMLSpanElement>(null);

  // name wrapped state
  const [nameWrapped, setNameWrapped] = useState(false);

  // navbar active state
  const [navbarActive, setNavbarActive] = useState(false);
  


  // check wrapped state of full name heading
  useEffect(() => {
    const checkWrap = () => {
      if (fnameRef.current != null && lnameRef.current != null) {
        // set nameWrapped bool
        setNameWrapped(fnameRef.current.getBoundingClientRect().top != lnameRef.current.getBoundingClientRect().top);
      }
    }
    
    // check on mount and resize
    checkWrap();
    addEventListener("resize", checkWrap);

    // clean up event listener on demount
    return () => removeEventListener("resize", checkWrap);
  }, []);


  // helper function for navlink classnames
  const getLinkClassnames = () => {
    return "flex items-center" + (true ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline");
  }


  return (
    <>
      {!isNavbar && <Header isNavbar={true} isActive={navbarActive} />}
      
      <motion.header
        initial={isNavbar && { display: "none", opacity: 0 }}
        animate={isNavbar && { display: isActive ? "block" : "none", opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0 }}
        className={`w-full lg:w-5/12 h-dvh origin-top bg-hero ${isNavbar ? `${isActive ? "" : "hidden"} lg:hidden fixed top-0 z-10` : ""} lg:fixed lg:top-0`}
        data-is-navbar={isNavbar}
      >

        <div className="w-10/12 md:w-8/12 mx-auto h-full flex flex-col py-8 pb-16 md:py-16">


          {/*  HEADER TOP BRAND MARK  */}
          
          {!isNavbar && (
            <nav className="fixed top-0 start-0 lg:relative z-10 bg-none py-4 lg:py-8 w-full uppercase font-space-mono text-gray">
              <div className="w-10/12 md:w-8/12 lg:w-full mx-auto flex items-center justify-between">
                <p className="cursor-default">Matthew_Miller.dev</p>
                <button className="lg:hidden cursor-pointer p-4" onClick={() => setNavbarActive(!navbarActive)}>
                  {navbarActive ? <X className="h-6" /> : <AlignRight className="h-5" />}
                </button>
              </div>
            </nav>
          )}


          {/*  HEADER CONTENT  */}

          <div className="flex flex-col h-full justify-center pt-32 text-center xs:text-start">
            <motion.h1
              {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "5%", once: !isNavbar })}
              className="text-white text-5xl uppercase font-space-mono flex flex-col sm:flex-row flex-wrap justify-center xs:justify-start"
            >
              <span ref={fnameRef}>Matthew</span>
              <span className={`${nameWrapped ? "invisible" : "visible"} hidden sm:inline-block`}>_</span>
              <span ref={lnameRef}>Miller</span>
            </motion.h1>

            <motion.h4
              {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.05, initialYOffset: "5%", once: !isNavbar })}
              className="text-gray text-xl uppercase font-kanit"
            >
              Frontend Developer
            </motion.h4>

            <motion.p
              {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: !isNavbar })}
              className="mt-4 md:mt-2 text-lg leading-tight"
            >
              2 years of experience  building responsive, interactive websites from the ground up. {isNavbar ? "NAV" : ""}
            </motion.p>

            <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.15, initialYOffset: "5%", once: !isNavbar })}>
              <SocialLinks tailwindClasses={"mt-6 md:mt-16 justify-center xs:justify-start"} />
            </motion.div>
          </div>


          {/*  HEADER NAV  */}

          <div className="flex flex-col w-fit ms-auto items-end gap-4 lg:gap-3 uppercase font-space-mono">

            {navLinks.map((link, index) => (
              <motion.div key={link.href} {...animOnVisible({ reducedMotion: reducedMotion, delay: (index+1)/10, initialYOffset: "5%", once: !isNavbar })} whileHover="onhover">
                <Link href={link.href} scroll={true} className={getLinkClassnames()}>
                  {link.label}

                  {/* link animation */}
                  <motion.div className="origin-right"
                    variants={{
                      onhover: { marginLeft: "0.25rem" },
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      bounce: 0
                    }}
                  >
                    <MoveRight className="inline ms-1 h-4 lg:hidden" /> 
                  </motion.div>
                </Link>
              </motion.div>
            ))}

          </div>
          
        </div>
      </motion.header>
    </>
  );
}
