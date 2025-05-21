"use client";


// react
import { RefObject, useEffect, useState } from "react";

// icons
import { AlignRight, X } from "lucide-react";


export default function NavBar({ isStatic, isNavActive, navToggler, portraitRef }: {
  isStatic: boolean;
  isNavActive?: boolean;
  navToggler?: () => void;
  portraitRef?: RefObject<HTMLDivElement | null>;
}) {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  
  // check if we're scrolled passed hero - used to set fixed nav bg color
  useEffect(() => {
    
    const handleScroll = () => {
      if (!portraitRef?.current) return;

      const portraitTop = portraitRef.current.getBoundingClientRect().top;

      setIsNavbarFixed(portraitTop < 50);
    }

    // check if navbar should be fixed on mount and scroll
    handleScroll();
    addEventListener("scroll", handleScroll);

    // remove event listener on unmount
    return () => removeEventListener("scroll", handleScroll);
  }, [portraitRef]);



  return (
    <nav className={`
      ${isStatic ? "absolute!" : `${isNavbarFixed ? "bg-black/100" : "-translate-y-full"} fixed lg:hidden`}
      transition-all duration-200 top-0 start-0 lg:relative z-10 py-2 bg-none w-full uppercase font-space-mono text-gray`}>
      
      <div className="w-10/12 md:w-8/12 mx-auto flex items-center justify-between">

        <p className="py-8 cursor-default">Matthew_Miller.dev</p>

        {(!isStatic || (isStatic && isNavActive)) && (
          <button className="lg:hidden cursor-pointer ps-8 py-2" onClick={navToggler}>
            {isNavActive ? <X className="h-6" /> : <AlignRight className="h-5" />}
          </button>
        )}

      </div>

    </nav>
  );
}