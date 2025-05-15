// component imports
import { Github, SquareArrowOutUpRight } from "lucide-react";

// lib imports
import * as motion from "motion/react-client";
import { getAnimOnScreenParentProps, getAnimOnScreenProps, tiltOnHover } from "@/lib/animate";

// hook imports
import { useReducedMotion } from "motion/react"


export default function ProjectCard({ project }) {
  const reducedMotion = useReducedMotion();


  return (
    <motion.div {...getAnimOnScreenParentProps(undefined, true)}>
      <motion.div {...getAnimOnScreenProps(reducedMotion, project.id/5, undefined, "10%")} className="flex flex-col gap-4">
        <div className="bg-place-black aspect-[16/9] shadow-accent">
          <img className="w-full h-full object-cover" src={`featured-projects/${project.id}/preview.jpg`} alt={`${project.label} preview`} />
        </div>
        
        <hr className="text-gray/25" />
        
        <div className="flex flex-col uppercase font-space-mono">
          <div className="flex gap-6 items-center justify-between">
            <h3 className="text-2xl md:text-4xl text-white">{project.label}</h3>

            <div className="flex gap-4">
              {project.github && <motion.a {...tiltOnHover(reducedMotion)} className="transition-colors hover:text-accent" target="_blank" href={project.github}><Github className="h-5 lg:h-6" /></motion.a>}
              {project.preview && <motion.a {...tiltOnHover(reducedMotion)} className="transition-colors text-accent lg:text-gray hover:text-accent" target="_blank" href={project.preview}><SquareArrowOutUpRight className="h-5 lg:h-6" /></motion.a>}
            </div>
          </div>

          <div className="flex flex-wrap gap-y-2 gap-8 mt-6 text-gray text-sm">
            {project.technologies.map((tech, i) => <p key={i}>{tech}</p>)}
          </div>
        </div>
        
        <hr className="text-gray/25" />

        <div className="flex flex-col gap-3">
          {project.text.map((text, i) => <p key={i}>{text}</p>)}
        </div>
      </motion.div>
    </motion.div>
  );
}