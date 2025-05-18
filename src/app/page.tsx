"use client";


// react
import { useRef, useState } from "react";

// component
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import TabSwitcher from "@/components/EducationTabSwitch";
import TechStackList from "@/components/TechStackList";
import SocialLinks from "@/components/UI/SocialLinks";
import ProjectGalleryModal from "@/components/UI/ProjectGalleryModal";

// motion
import { motion, useReducedMotion } from "motion/react";
import { animOnVisible } from "@/utils/animate";


export type setActiveProjectModalType = (projectId: string | null) => void;


export default function Home() {
  const reducedMotion = useReducedMotion();

  // id of active project - used for opening project modal
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);

  // array of refs for each section
  const sectionStartRefs = useRef<HTMLElement[]>([]);

  // ref for portrait image elem - used for toggling mobile navbar bg
  const portraitRef = useRef<HTMLDivElement>(null);


  return (
    <>
      <ProjectGalleryModal activeProjectModal={activeProjectModal} setActiveProjectModal={setActiveProjectModal} />


      <Header portraitRef={portraitRef} sectionStartRefs={sectionStartRefs} />

      <main ref={(el) => { if (el) sectionStartRefs.current[0] = el; }} className="lg:w-7/12 lg:ms-auto min-h-dvh">
        <div className="w-10/12 lg:w-8/12 mx-auto">


          {/*  ABOUT SECTION  */}

          <section id="about" className="md:w-3/4 mx-auto flex flex-col gap-4 xs:block relative xs:pt-70 mb-15 mt-40">

            <motion.div
              ref={portraitRef}
              {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "5%", once: true })}
              className="
              bg-place-black aspect-4/5 shadow-accent -z-10
              text-gray font-space-mono text-sm
              w-3/4 xs:w-3/5 sm:w-1/2 lg:w-4/5 xl:w-3/5
              xs:absolute end-0 xs:bottom-80 sm:bottom-70 lg:bottom-[480px] 2lg:bottom-[440px] xl:bottom-80 2xl:bottom-70
              flex justify-center items-center ms-auto xs:ms-0"
            >
              headshot.jpg
            </motion.div>

            <div className="flex flex-col gap-3 w-5/6 2xl:w-4/5 pt-4 pe-3 bg-black">

              <div className="uppercase mb-2">
                <motion.p {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "10%", once: true })} className="text-accent font-space-mono">
                  Hello_World
                </motion.p>

                <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-5xl lg:text-6xl text-white">
                  About Me
                </motion.h2>
              </div>

              <motion.p
                {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })}
                className="text-lg">
                Hello, I'm Matthew, an 18 year old frontend developer based in Scotland.  I've loved making things for the web since the first HTML class in high school.
              </motion.p>

              <motion.p
                {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.2, initialYOffset: "5%", once: true })}
                className="text-lg">
                Today I study web development and digital design at HND level.  In my spare time, I enjoy designing and building passion projects to gain real experience creating useful and functional web apps.
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
              <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-5xl lg:text-6xl text-white">
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
              <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-5xl lg:text-6xl text-white">
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
              <motion.h2 {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="font-kanit text-5xl lg:text-6xl text-white">
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
