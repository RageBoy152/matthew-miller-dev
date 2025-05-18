"use client";


// react
import { RefObject, useEffect, useRef, useState } from "react";

// components
import SocialLinks from "./UI/SocialLinks";
import Link from "next/link";
import NavBar from "./UI/NavBar";

// icons
import { MoveRight } from "lucide-react";

// motion
import { motion, useReducedMotion } from "motion/react";
import { animOnVisible } from "@/utils/animate";



// hard coded data for navbar links
const navLinks = [
  { label: "About", href: "#about" },
  { label: "My_work", href: "#my-work" },
  { label: "Education", href: "#education" },
  { label: "Get_in_touch", href: "#get-in-touch" }
]



type HeaderProps = {
  navbarActiveLinkIndex?: number;
  sectionStartRefs?: RefObject<HTMLElement[]>;
  portraitRef?: RefObject<HTMLDivElement | null>;
  isNavbar?: boolean;
  isActive?: boolean;
  closeNav?: () => void;
}



export default function Header({ navbarActiveLinkIndex, sectionStartRefs, portraitRef, isNavbar = false, isActive = false, closeNav }: HeaderProps) {
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
  const getLinkClassnames = (activeLink: boolean) => {
    return "flex items-center py-1 " + (!activeLink ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline");
  }



  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  
  // check if we're scrolled passed hero - used to set mobile navbar bg color
  useEffect(() => {
    
    const handleScroll = () => {
      if (!portraitRef?.current) return;

      const portraitTop = portraitRef.current.getBoundingClientRect().top;

      setIsNavbarFixed(portraitTop < 50);
    }

    // add event listener and cleanup on unmount
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [portraitRef]);

  

  // keep track of active link
  const [activeLink, setActiveLink] = useState(0);
  
  // get page scroll pos relative to each section - only runs on real Header, not navbar Header
  useEffect(() => {
    if (sectionStartRefs == null) return;


    const handleScroll = () => {
      sectionStartRefs.current?.forEach((section, index) => {
        if (index < activeLink) return;

        // get y pos of section relative to top of the page
        const sectionTop = section.getBoundingClientRect().top - sectionStartRefs.current[0].getBoundingClientRect().top;
        
        if (window.scrollY >= sectionTop) {
          // scroll pos is higher than the current section pos
          setActiveLink(index);
          return;
        }
      });
    };

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    }

  }, [sectionStartRefs]);


  // function passed to navbar header to set navbar active state to false
  const closeNavbarInternally = () => setNavbarActive(false);




  return (
    <>
      {!isNavbar && <Header closeNav={closeNavbarInternally} navbarActiveLinkIndex={activeLink} isNavbar={true} isActive={navbarActive} />}
      
      <motion.header
        initial={isNavbar && { display: "none", opacity: 0 }}
        animate={isNavbar && { display: isActive ? "block" : "none", opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0 }}
        className={`w-full lg:w-5/12 h-dvh origin-top bg-hero ${isNavbar ? `${isActive ? "" : "hidden"} lg:hidden fixed top-0 z-20` : ""} lg:fixed lg:top-0`}
        data-is-navbar={isNavbar}
      >

        <div className="w-10/12 md:w-8/12 mx-auto h-full flex flex-col py-8 pb-16 md:py-16">


          {/*  HEADER TOP BRAND MARK  */}
          
          {!isNavbar ? (
            <>
              <NavBar isStatic={true} isFixed={false} isNavbar={false} />
              <NavBar isStatic={false} isFixed={isNavbarFixed} isNavbar={false} navToggler={() => setNavbarActive(true)} />
            </>
          ) : (
            <NavBar isStatic={true} isFixed={false} isNavbar={true} navToggler={closeNav} />
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

          <div className="flex flex-col w-fit ms-auto items-end gap-1 uppercase font-space-mono">

            {navLinks.map((link, index) => (
              <motion.div key={link.href} {...animOnVisible({ reducedMotion: reducedMotion, delay: (index+1)/10, initialYOffset: "5%", once: !isNavbar })} whileHover="onhover">
                <Link onClick={closeNav} href={link.href} scroll={true} className={getLinkClassnames(isNavbar ? index == navbarActiveLinkIndex : index == activeLink)}>
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
