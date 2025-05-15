"use client";

// component imports
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import TabSwitcher from "@/components/TabSwitcher";
import TechStackList from "@/components/TechStackList";
import SocialLinks from "@/components/UI/SocialLinks";

// lib imports
import * as motion from "motion/react-client"
import { getAnimOnScreenParentProps, getAnimOnScreenProps } from "@/lib/animate";

// hook imports
import { useReducedMotion } from "motion/react"


export default function Home() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Header />

      <main className="lg:w-7/12 lg:ms-auto h-dvh">
        <div className="w-10/12 lg:w-8/12 mx-auto">


          {/*  ABOUT SECTION  */}

          <motion.section {...getAnimOnScreenParentProps(undefined, true)} id="about" className="md:w-3/4 mx-auto flex flex-col gap-4 xs:block relative xs:pt-70 my-25">
            <motion.div
              {...getAnimOnScreenProps(reducedMotion, undefined, undefined, "5%")}
              className="
              bg-place-black aspect-4/5 shadow-accent -z-10
              text-gray font-space-mono text-sm
              w-3/4 xs:w-3/5 sm:w-1/2 lg:w-4/5 xl:w-3/5
              xs:absolute end-0 xs:bottom-75 sm:bottom-60 lg:bottom-[480px] 2lg:bottom-100 xl:bottom-80 2xl:bottom-60
              flex justify-center items-center ms-auto xs:ms-0"
            >
              headshot.jpg
            </motion.div>

            <div className="flex flex-col gap-3 w-5/6 2xl:w-4/5 pt-4 pe-3 bg-black">

              <div className="uppercase mb-2">
                <motion.p {...getAnimOnScreenProps(reducedMotion, 0, 0.7, undefined, "10%")} className="text-accent font-space-mono">Hello_World</motion.p>
                <motion.h2 {...getAnimOnScreenProps(reducedMotion, 0.1, 0.7, undefined, "5%")} className="font-kanit text-5xl lg:text-6xl text-white">About Me</motion.h2>
              </div>

              <motion.p {...getAnimOnScreenProps(reducedMotion, 0.1, undefined, undefined, "5%")} className="text-lg">Hello, I'm Matthew, an 18 year old frontend developer based in Scotland.  I've loved making things for the web since the first HTML class in high school.</motion.p>
              <motion.p {...getAnimOnScreenProps(reducedMotion, 0.2, undefined, undefined, "5%")} className="text-lg">Today I study web development and digital design at HND level.  In my spare time, I enjoy designing and building passion projects to gain real experience creating useful and functional web apps.</motion.p>
            
            </div>
          </motion.section>


          {/*  TECHNOLOGIES SECTION  */}

          <section className="py-16">
            <TechStackList />
          </section>


          {/*  PROJECTS SECTION  */}

          <section id="my-work" className="py-16">
            <motion.div {...getAnimOnScreenParentProps(undefined, true)} className="uppercase mb-2">
              <motion.p {...getAnimOnScreenProps(reducedMotion, 0, 0.7, undefined, "10%")} className="text-accent font-space-mono">My_Work</motion.p>
              <motion.h2 {...getAnimOnScreenProps(reducedMotion, 0.1, 0.7, undefined, "5%")} className="font-kanit text-5xl lg:text-6xl text-white">Experienced Creator</motion.h2>
            </motion.div>

            <ProjectsList />
          </section>


          {/*  EDUCATION SECTION  */}

          <section id="education" className="py-16">
            <motion.div {...getAnimOnScreenParentProps(undefined, true)} className="uppercase mb-2">
              <motion.p {...getAnimOnScreenProps(reducedMotion, 0, 0.7, undefined, "10%")} className="text-accent font-space-mono">Learning</motion.p>
              <motion.h2 {...getAnimOnScreenProps(reducedMotion, 0.1, 0.7, undefined, "5%")} className="font-kanit text-5xl lg:text-6xl text-white">Relevant Education</motion.h2>
            </motion.div>

            <TabSwitcher />
          </section>


          {/*  CONTACT SECTION  */}

          <section id="get-in-touch" className="py-24">
            <motion.div {...getAnimOnScreenParentProps(undefined, true)} className="uppercase mb-2 text-center">
              <motion.p {...getAnimOnScreenProps(reducedMotion, 0, 0.7, undefined, "10%")} className="text-accent font-space-mono">Get_in_touch</motion.p>
              <motion.h2 {...getAnimOnScreenProps(reducedMotion, 0.1, 0.7, undefined, "5%")} className="font-kanit text-5xl lg:text-6xl text-white">Contact Me</motion.h2>
            </motion.div>

            <SocialLinks tailwindClasses={"justify-center py-8"} />

            <ContactForm />
          </section>


          {/*  FOOTER  */}

          <section className="py-12 text-gray/75 font-space-mono text-center uppercase text-xs">
            <p><span className="font-blinker">&copy;</span> Matthew_Miller, 2025</p>
          </section>

        </div>
      </main>
    </>
  );
}
