"use client";


// react
import { useRef, useState } from "react";

// components
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import ProjectsList from "@/components/ProjectsList";
import TabSwitcher from "@/components/EducationTabSwitch";
import TechStackList from "@/components/TechStackList";
import SocialLinks from "@/components/UI/SocialLinks";
import ProjectGalleryModal from "@/components/UI/ProjectGalleryModal";

// motion
import { motion, useReducedMotion } from "motion/react";
import { animOnVisible } from "@/utils/animate";
import { Spotlight } from "@/components/UI/SpotlightNew";
import Image from "next/image";


export type setActiveProjectModalType = (projectId: string | null) => void;


export default function Home() {
  const reducedMotion = useReducedMotion();

  // id of active project - used for opening project modal
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);

  // array of refs for each section
  const sectionStartRefs = useRef<HTMLElement[]>([]);

  // ref for portrait image elem - used for toggling mobile navbar bg
  const portraitRef = useRef<HTMLDivElement>(null);

  // toggle mobile nav
  const [navActive, setNavActive] = useState(false);
  const navToggler = () => setNavActive(!navActive);



  return (
    <>
      <ProjectGalleryModal activeProjectModal={activeProjectModal} setActiveProjectModal={setActiveProjectModal} />


      <NavHeader sectionStartRefs={sectionStartRefs} navActive={navActive} navToggler={navToggler} />
      <Header portraitRef={portraitRef} sectionStartRefs={sectionStartRefs} navActive={navActive} navToggler={navToggler} />


      <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="w-full lg:w-5/12 h-full relative">
          <Spotlight />
        </div>
      </div>


      <main ref={(el) => { if (el) sectionStartRefs.current[0] = el; }} className="lg:w-7/12 lg:ms-auto min-h-dvh">
        <div className="w-10/12 lg:w-8/12 mx-auto">


          {/*  ABOUT SECTION  */}

          <section id="about" className="w-full 2xl:w-4/5 mx-auto flex flex-col relative pt-16">


            {/*  ABOUT IMAGE  */}

            <motion.div
              ref={portraitRef}
              {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "5%", once: true })}
              className="
              bg-accent aspect-4/5 shadow-accent -z-10
              text-gray font-space-mono text-sm
              w-1/2 lg:w-3/5
              flex justify-center items-center ms-auto relative"
            >
              <Image className="object-cover object-bottom bg-blend-color-dodge opacity-80 bg-place-black" fill priority sizes="(max-width: 1024px) 40vw (min-width: 1023px) 80vw" src="/matthewmiller-headshot-3.png" alt="Matthew Miller" />
            </motion.div>


            {/*  ABOUT TEXT  */}
            
            <div className="flex flex-col gap-3 w-3/4 lg:w-4/5 pt-4 pe-3 bg-black relative mt-4 lg:-mt-[100px]">

              <div className="uppercase mb-2">
                <motion.p {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "10%", once: true })} className="text-accent font-space-mono">
                  Hello_World
                </motion.p>

                <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-4xl xs:text-5xl lg:text-6xl text-white">
                  About Me
                </motion.h2>
              </div>

              <motion.p
                {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })}
                className="text-lg">
                Hello, I&apos;m Matthew, an 19 year old frontend developer based in Scotland.  I&apos;ve loved making things for the web since the first HTML class in high school.
              </motion.p>

              <motion.p
                {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.2, initialYOffset: "5%", once: true })}
                className="text-lg">
                Today I&apos;m working towards a BSc in Digital Development.  In my spare time, I enjoy designing and building passion projects to gain real experience creating useful and functional web apps.
              </motion.p>
            
            </div>

          </section>


          {/*  TECHNOLOGIES SECTION  */}

          <section className="py-16">
            <TechStackList />
          </section>


          {/*  PROJECTS SECTION  */}

          <section ref={(el) => { if (el) sectionStartRefs.current[1] = el; }} id="my-work" className="py-16">

            <div className="uppercase mb-2">
              <motion.p {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "10%", once: true })} className="text-accent font-space-mono">
                My_Work
              </motion.p>
              <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-4xl xs:text-5xl lg:text-6xl text-white">
                Experienced Creator
              </motion.h2>
            </div>

            <ProjectsList setActiveProjectModal={setActiveProjectModal} />

          </section>


          {/*  EDUCATION SECTION  */}

          <section ref={(el) => { if (el) sectionStartRefs.current[2] = el; }} id="education" className="py-16">

            <div className="uppercase mb-2">
              <motion.p {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "10%", once: true })} className="text-accent font-space-mono">
                Learning
              </motion.p>
              <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-4xl xs:text-5xl lg:text-6xl text-white">
                Relevant Education
              </motion.h2>
            </div>

            <TabSwitcher />
              
          </section>


          {/*  CONTACT SECTION  */}

          <section ref={(el) => { if (el) sectionStartRefs.current[3] = el; }} id="get-in-touch" className="py-24">

            <div className="uppercase mb-2 text-center">
              <motion.p {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "10%", once: true })} className="text-accent font-space-mono">
                Get_in_touch
              </motion.p>
              <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-4xl xs:text-5xl lg:text-6xl text-white">
                Contact Me
              </motion.h2>
            </div>

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
