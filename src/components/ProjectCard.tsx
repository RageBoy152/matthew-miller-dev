// component imports
import { Github, SquareArrowOutUpRight } from "lucide-react";

// lib imports
import * as motion from "motion/react-client";
import { animOnVisible, tiltOnHover } from "@/utils/animate";

// hook imports
import { useReducedMotion } from "motion/react"


export type Project = {
  id: string;
  label: string;
  text: string[];
  year: number;
  monthRange: string;
  technologies: string[];
  github?: string;
  preview?: string;
}


export default function ProjectCard({ project, projectIndex }: { project: Project, projectIndex: number }) {
  const reducedMotion = useReducedMotion();


  return (
    <div>
      <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: projectIndex/5, initialYOffset: "10%", once: true })} className="flex flex-col gap-4">
        <div className="bg-place-black aspect-[16/9] shadow-accent">
          <img className="w-full h-full object-cover" src={`featured-projects/${project.id}/preview.jpg`} alt={`${project.label} preview`} />
        </div>
        
        <hr className="text-gray/25" />
        
        <div className="flex flex-col uppercase font-space-mono">
          <div className="flex gap-6 items-center justify-between">
            <h3 className="text-2xl md:text-4xl text-white">{project.label}</h3>

            <div className="flex gap-4">
              {project.github && (
                <motion.a
                  {...tiltOnHover(reducedMotion)} 
                  className="transition-colors hover:text-accent"
                  target="_blank" href={project.github}
                >
                  <Github className="h-5 lg:h-6" />
                </motion.a>
              )}
              
              {project.preview && (
                <motion.a
                  {...tiltOnHover(reducedMotion)}
                  className="transition-colors text-accent lg:text-gray hover:text-accent"
                  target="_blank" href={project.preview}
                >
                  <SquareArrowOutUpRight className="h-5 lg:h-6" />
                </motion.a>
              )}
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
    </div>
  );
}