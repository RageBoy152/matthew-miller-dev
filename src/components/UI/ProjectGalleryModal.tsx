import { setActiveProjectModalType } from "@/app/page";
import { X } from "lucide-react";
import { featuredProjects } from "../ProjectsList";
import { Project } from "../ProjectCard";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

export default function ProjectGalleryModal({ activeProjectModal, setActiveProjectModal }: { activeProjectModal: string | null, setActiveProjectModal: setActiveProjectModalType }) {
  // fallback to last project for labels - smooths close transition from setting active project to null before modal fades
  const [lastProject, setLastProject] = useState<Project | null>(null);

  // find project in featured projects by active id or return null
  const project: Project | null = featuredProjects.find((project) => project.id === activeProjectModal) ?? null;

  useEffect(() => {
    document.body.style.overflowY = activeProjectModal != null ? "hidden" : "auto";
  }, [activeProjectModal]);

  const closeModal = (e: MouseEvent<HTMLElement>, pageCover?: boolean) => {
    if ((pageCover && e.target === e.currentTarget) || !pageCover) {
      setLastProject(project);
      setActiveProjectModal(null);
    }
  };


  return (
    <div onClick={(e) => closeModal(e, true)} className={`py-16 md:py-32 fixed top-0 start-0 z-50 w-full h-full bg-black/80 transition-opacity ${activeProjectModal ? "" : "opacity-0 pointer-events-none"}`}>
      <div className="
      w-10/12 md:w-3/4 2xl:w-1/2
      h-min max-h-full mx-auto flex flex-col items-center gap-6">

        {/*  MODAL HEADER  */}
        <div className="flex w-full justify-between">
          <h2 className="font-space-mono uppercase text-2xl md:text-4xl text-white">{project?.label ?? lastProject?.label}</h2>
          <button onClick={closeModal} aria-label="close" className="cursor-pointer aspect-square"><X className="mx-auto h-5 lg:h-6" /></button>
        </div>

        {/*  MODAL CONTENT  */}
        <div className="flex flex-col w-full aspect-[9/16] md:aspect-auto h-full overflow-y-auto gap-8 pe-4 pb-4 scrollbar snap-y snap-mandatory">
          {project?.images.map((img, i) => (
            <div key={img} className="md:w-full h-full md:h-max aspect-[9/16] md:aspect-video bg-place-black shadow-accent flex items-center justify-center snap-start">
              {/* <Image fill objectFit="cover" src={`featured-projects/${project.id}/${img}`} alt={`${project.label} website showcase`} /> */}
            </div>
          ))}
          
          <div className="md:w-full h-full md:h-max aspect-[9/16] md:aspect-video bg-place-black shadow-accent flex items-center justify-center snap-start"></div>
        </div>
      </div>
    </div>
  );
}