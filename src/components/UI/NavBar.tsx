// icons
import { AlignRight, X } from "lucide-react";


type NavBarProps = {
  isStatic: boolean,
  isFixed: boolean,
  isNavbar: boolean,
  navToggler?: () => void,
  navbarActive?: boolean
}


export default function NavBar({ isStatic, isFixed, isNavbar, navToggler, navbarActive }: NavBarProps) {
  return (
    <nav className={`
      ${isStatic ? "absolute" : `${isFixed ? "bg-black/100" : "-translate-y-full"} fixed lg:hidden`}
      transition-all duration-200 top-0 start-0 lg:relative z-10 bg-none w-full uppercase font-space-mono text-gray`}>
      
      <div className="w-10/12 md:w-8/12 lg:w-full mx-auto flex items-center justify-between">

        <p className="py-8 cursor-default">Matthew_Miller.dev</p>

        {navToggler && (
          <button className="lg:hidden cursor-pointer ps-8 py-8" onClick={navToggler}>
            {navbarActive || isNavbar ? <X className="h-6" /> : <AlignRight className="h-5" />}
          </button>
        )}

      </div>

    </nav>
  );
}