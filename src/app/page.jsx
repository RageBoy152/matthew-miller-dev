// component imports
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import TabSwitcher from "@/components/TabSwitcher";
import TechStackList from "@/components/TechStackList";
import SocialLinks from "@/components/UI/SocialLinks";


export default function Home() {
  return (
    <>
      <Header />

      <main className="w-7/12 ms-auto h-dvh">
        <div className="w-8/12 mx-auto">


          {/*  ABOUT SECTION  */}

          <section id="about" className="w-3/4 mx-auto relative pt-75 my-20">
            <div className="bg-place-black aspect-4/5 w-1/2 shadow-accent absolute end-0 bottom-80 -z-10">headshot.jpg</div>

            <div className="flex flex-col gap-3 w-3/5 bg-black">

              <div className="uppercase mb-2">
                <p className="text-accent font-space-mono">Hello_World</p>
                <h2 className="font-kanit text-6xl">About Me</h2>
              </div>

              <p className="text-lg">Hello, I'm Matthew, an 18 year old frontend developer based in Scotland.  I've loved making things for the web since the first HTML class in high school.</p>
              <p className="text-lg">Today I study web development and digital design at HND level.  In my spare time, I enjoy designing and building passion projects to gain real experience creating useful and functional web apps.</p>
            
            </div>
          </section>


          {/*  TECHNOLOGIES SECTION  */}

          <section className="py-16">
            <TechStackList />
          </section>


          {/*  PROJECTS SECTION  */}

          <section id="my-work" className="py-16">
            <div className="uppercase mb-2">
              <p className="text-accent font-space-mono">My_Work</p>
              <h2 className="font-kanit text-6xl">Experienced Creator</h2>
            </div>

            <ProjectsList />
          </section>


          {/*  EDUCATION SECTION  */}

          <section id="education" className="py-16">
            <div className="uppercase mb-2">
              <p className="text-accent font-space-mono">Learning</p>
              <h2 className="font-kanit text-6xl">Relevant Education</h2>
            </div>

            <TabSwitcher />
          </section>


          {/*  CONTACT SECTION  */}

          <section id="get-in-touch" className="py-16">
            <div className="uppercase mb-2 text-center">
              <p className="text-accent font-space-mono">Get_in_touch</p>
              <h2 className="font-kanit text-6xl">Contact Me</h2>
            </div>

            <SocialLinks tailwindClasses={"justify-center"} />

            <ContactForm />
          </section>

        </div>
      </main>
    </>
  );
}
