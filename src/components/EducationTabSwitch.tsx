"use client";


// react
import { useState } from "react";

// components
import EducationTab, { educationTabProps } from "./UI/EducationTab";

// motion
import { motion, Variants } from "motion/react";



// hard coded data for education tabs

const educationData: educationTabProps[] = [
  {
    id: "bsc",
    startDate: "Sep 2025",
    endDate: "Jun 2026",
    title: "BSc Digital Development",
    grade: "TBD",
    technologies: [
      "Project_Management",
      "Professional_Practices",
      "DevOps",
      "Data_Science",
      "Blazor_C#",
      "Java"
    ],
    content: [
      "So far in my degree, I've looked at project management methodologies and how to apply them in IT projects, the data science life cycle and how to source, clean, analyse and vizualize data as well as how to build predictive and classification models.",
      "I've also covered the more acaemic side of computing with units covering profesional institutions, ethics as well as laws and regulations in IT.",
      "In the coming year, I'll be diving deeper into coding, exploring DevOps, developing mobile applications and being introduced to OOP with Blazor and C#."
    ]
  },
  {
    id: "hnd",
    startDate: "Aug 2024",
    endDate: "Jun 2025",
    title: "HND Web Dev & Digital Design",
    grade: "A",
    technologies: [
      "Bootstrap",
      "UX",
      "JavaScript_Frameworks",
      "SCSS",
      "PHP",
      "My_SQL",
      "Git/GitHub"
    ],
    content: [
      "In this course, I dove deeper into user experience, looking at user journey's and gathering real usability feedback on projects.  I was also introduced to tools like HTML/CSS frameworks and version control.",
      "During the course, I continued developing my own personal projects out with college and advanced my JavaScript knowledge, experimenting with tools like React, Next and Node which I included in some curriculum projects.",
      "The learning was quite project-orientated which allowed me to have more independence creating websites whilst exploring new technologies with the learning materials."
    ]
  },
  {
    id: "hnc",
    startDate: "Aug 2023",
    endDate: "Jun 2024",
    title: "HNC Web Dev & Digital Design",
    grade: "A",
    technologies: [
      "Graphic_Design",
      "UI_UX",
      "JavaScript",
      "PHP",
      "My_SQL",
      "Wordpress_CMS",
      "SEO",
    ],
    content: [
      "Leaving high school with a passion for creation, I enrolled at New College Lanarkshire to study web development full-time.  At this point in my learning, I had been exposed to a handful of technologies through self-directed learning so going through the proper curriculum gave me a huge boost.",
      "The HNC year was one of the best years of my education.  I learned new ways to do things, countless smaller tips and so many new tools I'd never played with before like WordPress and My SQL.",
      "The most important gain from this course for me was the foundational knowledge on design.  As part of this, I developed a brand and eventually website for a Scottish mountain biking company which taught me so much about UI/UX design, improved my basic HTML and CSS knowledge and introduced me to SEO."
    ]
  }
]



export default function TabSwitcher() {
  // active tab states
  const [prevTab, setPrevTab] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  // change active tab and set the previous tab
  const changeTab = (index: number) => {
    if (index !== activeTab) {
      setPrevTab(activeTab);
      setActiveTab(index);

    }
  }
  
  // derive the direction based on the prev and current tab
  const direction = prevTab !== null && (activeTab > prevTab) ? 1 : -1;
  

  // animation state variants for tabs
  const tabVariants: Variants = {
    enter: (custom: number) => ({
      x: `${custom * 100}%`,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (custom: number) => ({
      x: `${-custom * 100}%`,
      opacity: 0,
      position: "absolute",
    }),
  };



  return (
    <div className="flex flex-col py-16">

      {/*  TAB BUTTONS  */}
      
      <div className="flex text-gray font-space-mono mb-8 lg:mb-6 border-b border-gray/25">
        {educationData.map((data, index) => (
          <button key={`${data.id}-btn`} onClick={() => changeTab(index)} className={`${index == activeTab ? "bg-place-black" : "hover:bg-place-black/50"} cursor-pointer transition-colors uppercase w-full py-3`}>{data.id}</button>
        ))}
      </div>


      {/*  TAB CONTENTS  */}

      <div className="relative w-full min-h-[200px] overflow-hidden">
        {/* Previous tab (exiting) */}
        {(prevTab != null) && (prevTab !== activeTab) ? (
          <motion.div
            key={prevTab}
            variants={tabVariants}
            custom={direction}
            initial="center"
            animate="exit"
            transition={{ duration: 0.7, type: "spring", bounce: 0.1 }}
          >
            <EducationTab educationData={educationData[prevTab]} />
          </motion.div>
        ) : ""}

        {/* Active tab (entering) */}
        <motion.div
          key={activeTab}
          variants={tabVariants}
          custom={direction}
          initial="enter"
          animate="center"
          transition={{ duration: 0.7, type: "spring", bounce: 0.1 }}
        >
          <EducationTab educationData={educationData[activeTab]} />
        </motion.div>
      </div>



    </div>
  );
}