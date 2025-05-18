// components
import TechnologyPill from "./UI/TechnologyPill";

// motion
import { animOnVisible } from "@/utils/animate";
import { motion, useReducedMotion } from "motion/react"


export type Technology = {
  label: string;
  iconName: string;
}


const featuredTechnologies: Technology[][] = [
  [
    { label: "React.JS", iconName: "React.svg" },
    { label: "Next.JS", iconName: "NextJS.svg" },
    { label: "Tailwind_CSS", iconName: "TailwindCSS.svg" },
  ],
  [
    { label: "Express.JS", iconName: "ExpressJS.svg" },
    { label: "Socket.IO", iconName: "SocketIO.svg" },
    { label: "Node.JS", iconName: "NodeJS.svg" },
    { label: "Mongo_DB", iconName: "MongoDB.svg" },
  ],
  [
    { label: "GitHub", iconName: "GitHub.svg" },
    { label: "Netlify", iconName: "Netlify.svg" },
  ]
]


export default function TechStackList() {
  const reducedMotion = useReducedMotion();


  return (
    <div className="flex flex-col gap-8">
      {featuredTechnologies.map((techGroup, groupIndex) => (

        <motion.div
          {...animOnVisible({ reducedMotion: reducedMotion, delay: groupIndex/8, duration: 0.4, initialYOffset: "5%", once: true })}
          key={groupIndex}
          className={`flex gap-8 justify-start lg:justify-end flex-wrap gap-y-4 ${groupIndex+1 == featuredTechnologies.length ? "border-none" : "border-b"} border-gray/25 pb-8`}
        >
          {techGroup.map((tech, i) => (

            <TechnologyPill tech={tech} reducedMotion={reducedMotion ?? false} key={tech.label + i} />

          ))}
        </motion.div>

      ))}
    </div>
  );
}