// component imports
import Image from "next/image";

// lib imports
import * as motion from "motion/react-client"
import { getAnimOnScreenParentProps, getAnimOnScreenProps, spinOnHover } from "@/lib/animate";

// hook imports
import { useReducedMotion } from "motion/react"


const featuredTechnologies = [
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
    <motion.div
      {...getAnimOnScreenParentProps(undefined, true)}
      className="flex flex-col gap-8"
    >
      {featuredTechnologies.map((techGroup, groupIndex) => (

        <motion.div
          {...getAnimOnScreenProps(reducedMotion, groupIndex/8, 0.4)}
          key={groupIndex}
          className={`flex gap-8 justify-start lg:justify-end flex-wrap gap-y-4 ${groupIndex+1 == featuredTechnologies.length ? "border-none" : "border-b"} border-gray/25 pb-8`}
        >
          {techGroup.map((tech, i) => (

            <motion.div whileHover="onhover" key={tech.label + i} className="bg-place-black/50 flex flex-col md:flex-row items-center gap-3 py-2 px-4 md:ps-3 md:pe-6 w-fit uppercase font-space-mono text-xs">
              <motion.div {...spinOnHover(reducedMotion)}>
                <Image width={40} height={40} src={`tech-icons/${tech.iconName}`} alt={`${tech.label} logo`}></Image>
              </motion.div>
              <p>{tech.label}</p>
            </motion.div>

          ))}
        </motion.div>

      ))}
    </motion.div>
  );
}