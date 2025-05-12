import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./UI/SocialLinks";


export default function Header() {
  return (
    <header className="w-5/12 h-dvh bg-hero fixed top-0">

      <div className="w-8/12 mx-auto h-full flex flex-col py-16">


        {/*  HEADER TOP BRAND MARK  */}
        
        <Link href="/" className="text-gray uppercase font-space-mono">Matthew_Miller.dev</Link>


        {/*  HEADER CONTENT  */}

        <div className="flex flex-col h-full justify-center pt-32">
          <h1 className="text-white text-5xl uppercase font-space-mono">Matthew_Miller</h1>
          <h4 className="text-gray text-xl uppercase font-kanit">Frontend Developer</h4>
          <p className="mt-2 text-lg leading-tight">2 years of experience  building responsive, interactive websites from the ground up.</p>

          <SocialLinks tailwindClasses={"mt-16"} />
        </div>


        {/*  HEADER NAV  */}

        <div className="flex flex-col w-fit ms-auto items-end gap-3 uppercase font-space-mono">
          <Link href="#about" className={true ? "text-gray hover:text-accent hover:underline" : "text-accent underline"}>About</Link>
          <Link href="#my-work" className={true ? "text-gray hover:text-accent hover:underline" : "text-accent underline"}>My_work</Link>
          <Link href="#education" className={true ? "text-gray hover:text-accent hover:underline" : "text-accent underline"}>Education</Link>
          <Link href="#get-in-touch" className={true ? "text-gray hover:text-accent hover:underline" : "text-accent underline"}>Get_in_touch</Link>
        </div>
        
      </div>
    </header>
  );
}
