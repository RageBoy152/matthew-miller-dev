// component imports
import Header from "@/components/header";


export default function Home() {
  return (
    <>
      <Header />

      <main className="w-7/12 ms-auto h-dvh">
        <div className="w-8/12 mx-auto">

          {/*  ABOUT SECTION  */}

          <section id="about" className="border-x border-green-500 w-3/4 mx-auto">
            <div className="bg-place-black aspect-4/5 w-1/2 shadow-accent">headshot.jpg</div>

            <div className="flex flex-col gap-3 w-3/5 bg-black">

              <div className="uppercase mb-2">
                <p className="text-accent font-space-mono">Hello_World</p>
                <h2 className="font-kanit text-6xl">About Me</h2>
              </div>

              <p className="text-lg">Hello, I'm Matthew, an 18 year old frontend developer based in Scotland.  I've loved making things for the web since the first HTML class in high school.</p>
              <p className="text-lg">Today I study web development and digital design at HND level.  In my spare time, I enjoy designing and building passion projects to gain real experience creating useful and functional web apps.</p>
            
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
