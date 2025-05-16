export default function TabSwitcher() {
  return (
    <div className="flex flex-col py-16">


      {/*  TABS  */}
      
      <div className="flex text-gray font-space-mono mb-8 lg:mb-6 border-b border-gray/25">
        <button className="cursor-pointer transition-colors bg-place-black hover:bg-place-black w-full py-3">HND</button>
        <button className="cursor-pointer transition-colors hover:bg-place-black w-full py-3">HNC</button>
      </div>


      {/*  TAB CONTENTS  */}

      <div className="flex flex-col gap-4 lg:gap-3 uppercase font-space-mono text-gray">
        <p className="text-sm">Aug 2024 <span className="mx-2">-</span> Jun 2025</p>

        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl md:text-4xl text-white">HND Web Dev & Digital Design</h3>
          <p className="text-accent">(TBD)</p>
        </div>

        <div className="flex flex-wrap gap-y-3 gap-8 mt-2 text-sm">
          <p>Bootstrap</p>
          <p>UX</p>
          <p>JavaScript_Frameworks</p>
          <p>SCSS</p>
          <p>PHP</p>
          <p>My_SQL</p>
          <p>Git/GitHub</p>
        </div>
      </div>

      <hr className="text-gray/25 my-8 lg:my-6" />

      <div className="flex flex-col gap-3">
        <p>In this course, I dove deeper into user experience, looking at user journey's and gathering real usability feedback on projects.  I was also introduced to tools like HTML/CSS frameworks and version control.</p>
        <p>During the course, I continued developing my own personal projects out with college and advanced my JavaScript knowledge, experimenting with tools like React, Next and Node which I included in some curriculum projects.</p>
        <p>The learning was quite project-orientated which allowed me to have more independence creating websites whilst exploring new technologies with the learning materials.</p>
      </div>

    </div>
  );
}