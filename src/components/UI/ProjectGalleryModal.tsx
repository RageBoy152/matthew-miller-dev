// react
import { MouseEvent, useEffect, useState } from "react";

// types
import { setActiveProjectModalType } from "@/app/page";

// icons
import { X } from "lucide-react";

// components
import { featuredProjects } from "../ProjectsList";
import { Project } from "../ProjectCard";
import Image from "next/image";

// hooks
import { useMediaQuery } from "@/hooks/useMediaQuery";


export default function ProjectGalleryModal({ activeProjectModal, setActiveProjectModal }: { activeProjectModal: string | null, setActiveProjectModal: setActiveProjectModalType }) {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  
  // fallback to last project for labels - smooths close transition from setting active project to null before modal fades
  const [lastProject, setLastProject] = useState<Project | null>(null);

  // find project in featured projects by active id or return null
  const project: Project | null = featuredProjects.find((project) => project.id === activeProjectModal) ?? null;

   
  // stop scrolling on body when modal is active
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
    <div onClick={(e) => closeModal(e, true)} className={`py-8 md:py-32 fixed top-0 start-0 z-50 w-full h-full bg-black lg:bg-black/80 transition-opacity ${activeProjectModal ? "" : "opacity-0 pointer-events-none"}`}>
      <div className="
      w-10/12 md:w-3/4 2xl:w-1/2
      h-min max-h-full mx-auto flex flex-col items-center gap-6">

        {/*  MODAL HEADER  */}
        <div className="flex w-full justify-between">
          <div className="flex flex-col uppercase">
            <p className="text-accent text-sm font-space-mono">Scrollable_Gallery</p>
            <h2 className="text-3xl md:text-4xl text-white font-kanit">{project?.label ?? lastProject?.label}</h2>
          </div>
          <button onClick={closeModal} aria-label="close" className="cursor-pointer aspect-square"><X className="mx-auto h-5 lg:h-6" /></button>
        </div>

        {/*  MODAL CONTENT  */}
        <div className="flex flex-col w-full aspect-auto md:aspect-auto h-full overflow-y-auto gap-8 pe-4 pb-4 scrollbar">
          {project?.images.map((img, i) => (
            <div key={img+i} className="md:w-full h-max bg-place-black shadow-accent flex items-center justify-center relative">
              <img onLoad={(e) => e.currentTarget.classList.remove("opacity-0")} className="object-contain object-top transition-opacity opacity-0" src={`/featured-projects/${project.id}/${img.replace('[SIZE]', isMediumScreen ? "desktop" : "mobile")}`} alt={`${project.label} website showcase`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}