"use client";


// react
import { RefObject } from "react";

// components
import NavBar from "./UI/NavBar";
import HeaderContent from "./UI/HeaderContent";

// motion
import { motion } from "motion/react";



export default function NavHeader({ sectionStartRefs, navActive, navToggler }: {
  sectionStartRefs: RefObject<HTMLElement[]>;
  navActive: boolean;
  navToggler: () => void;
}) {  


  return (
    <>
      <motion.header
      initial={{ opacity: 0, pointerEvents: "none", display: "none" }}
      animate={{ opacity: navActive ? 1 : 0, pointerEvents: navActive ? "auto" : "none", display: navActive ? "block" : "none" }}
      transition={{ duration: 0.4, type: "spring", bounce: 0 }}
      className={`w-full lg:w-5/12 z-20 top-0 fixed`}>

          {/*  navbar attatched to nav header - not fixed, used only to close nav  */}          
          <NavBar isStatic={true} isNavActive={navActive} navToggler={navToggler} />

          <HeaderContent sectionStartRefs={sectionStartRefs} isNavActive={navActive} isNavHeader={true} navToggler={navToggler} />

      </motion.header>
    </>
  );
}
