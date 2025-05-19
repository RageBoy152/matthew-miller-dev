"use client";


// react
import { RefObject } from "react";

// components
import NavBar from "./UI/NavBar";
import HeaderContent from "./UI/HeaderContent";



export default function Header({ sectionStartRefs, portraitRef, navActive, navToggler }: {
  sectionStartRefs: RefObject<HTMLElement[]>;
  portraitRef: RefObject<HTMLDivElement | null>;
  navActive: boolean;
  navToggler: () => void;
}) {  


  return (
    <>
      {/*  fixed navbar - used only to open nav */}
      <NavBar isStatic={false} isNavActive={navActive} navToggler={navToggler} portraitRef={portraitRef} />


      <header className="w-full lg:w-5/12 top-0 lg:fixed">

          {/*  navbar attatched to header - not fixed, used only to show brand mark on hero  */}
          <NavBar isStatic={true} />

          <HeaderContent sectionStartRefs={sectionStartRefs} />

      </header>
    </>
  );
}
