"use client";


// react
import { RefObject, useEffect, useRef, useState } from "react";

// components
import Link from "next/link";
import SocialLinks from "./SocialLinks";

// icons
import { Laptop, Moon, MoveRight, Sun } from "lucide-react";

// motion
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { animOnVisible } from "@/utils/animate";
import { Spotlight } from "./SpotlightNew";
import Image from "next/image";


// hard coded data for navbar links
const navLinks = [
  { label: "About", href: "#about" },
  { label: "My_work", href: "#my-work" },
  { label: "Education", href: "#education" },
  { label: "Get_in_touch", href: "#get-in-touch" }
]



export default function HeaderContent({ sectionStartRefs, isNavActive, isNavHeader = false, navToggler }: {
  sectionStartRefs: RefObject<HTMLElement[]>;
  isNavActive?: boolean;
  isNavHeader?: boolean;
  navToggler?: () => void;
}) {
  const reducedMotion = useReducedMotion();



  //   FULL NAME WRAP LOGIC   \\


  // full name refs
  const fnameRef = useRef<HTMLSpanElement>(null);
  const lnameRef = useRef<HTMLSpanElement>(null);

  // name wrapped state
  const [nameWrapped, setNameWrapped] = useState(false);


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



  //   ACTIVE LINK LOGIC   \\


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

  }, [sectionStartRefs, activeLink]);



  // helper function for navlink classnames
  const getLinkClassnames = (activeLink: boolean) => {
    return "flex items-center py-1 " + (!activeLink ? "text-gray hover:lg:text-accent hover:lg:underline" : "text-accent underline");
  }



  //   NAV TOGGLE ANIMATION   \\


  const controls = useAnimation();

  useEffect(() => {
    const animateNav = async () => {
      if (isNavActive) {
        // instantly set opacity to 0
        controls.set({ opacity: 0 });

        // fade navbar in on active
        await controls.start({ opacity: 1 });
      } else {
        // fade out on navbar close
        await controls.start({ opacity: 0 });
        
        // reset opacity to 1 for hero mode
        controls.set({ opacity: 1 });
      }
    }

    animateNav();
  }, [isNavActive, controls]);



  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0 }}
      className="h-dvh relative"
    >
      <div className="w-10/12 md:w-8/12 mx-auto h-full flex flex-col py-8 pb-16 md:py-16">


        {/*  HEADER HERO  */}

        <div className="flex flex-col h-full justify-center pt-32 text-center xs:text-start">
          <motion.h1
            {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "5%", once: !isNavHeader })}
            className="text-white text-5xl uppercase font-space-mono flex flex-col sm:flex-row flex-wrap justify-center xs:justify-start"
          >
            <span ref={fnameRef}>Matthew</span>
            <span className={`${nameWrapped ? "invisible" : "visible"} hidden sm:inline-block`}>_</span>
            <span ref={lnameRef}>Miller</span>
          </motion.h1>

          <motion.h4
            {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.05, initialYOffset: "5%", once: !isNavHeader })}
            className="text-gray text-xl uppercase font-kanit"
          >
            Frontend Developer
          </motion.h4>

          <motion.p
            {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: !isNavHeader })}
            className="mt-4 md:mt-2 text-lg leading-tight"
          >
            2 years of experience  building responsive, interactive websites from the ground up. {isNavHeader ? "NAV" : ""}
          </motion.p>

          <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.15, initialYOffset: "5%", once: !isNavHeader })}>
            <SocialLinks tailwindClasses={"mt-6 md:mt-16 justify-center xs:justify-start"} />
          </motion.div>
        </div>



        {/*  HEADER NAV  */}

        <div className="flex flex-col w-fit ms-auto items-end gap-1 uppercase font-space-mono">

          {navLinks.map((link, index) => (
            <motion.div key={link.href} {...animOnVisible({ reducedMotion: reducedMotion, delay: (index+1)/10, initialYOffset: "5%", once: !isNavHeader })} whileHover="onhover">
              <Link onClick={navToggler} href={link.href} scroll={true} className={getLinkClassnames(index == activeLink)}>
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

      <img
      fetchPriority="high"
      src="/hero-image.jpg" alt="hero image"
      className="h-full w-full object-cover absolute top-0 -z-1 opacity-100 hero-bg" />

    </motion.div>
  );
}