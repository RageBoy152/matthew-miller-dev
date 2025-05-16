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
  monthStart: string;
  monthEnd: string;
  technologies: string[];
  github?: string;
  preview?: string;
}


export default function ProjectCard({ project, projectIndex, lastProject }: { project: Project, projectIndex: number, lastProject: boolean }) {
  const reducedMotion = useReducedMotion();


  return (
    <div className="flex">
      <div className="grow">
        <div className="w-4/6 flex flex-col items-center font-space-mono uppercase border-r border-gray/50 h-full">
          <div className="text-end">
            <h4 className="text-lg">{project.year}</h4>
            <p className="flex flex-col lg:flex-row">
              <span>{project.monthStart}</span>
              <span className="hidden lg:inline mx-1">-</span>
              <span>{project.monthEnd}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={`w-4/6 ${lastProject ? "" : "pb-32"}`}>
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
    </div>
  );
}