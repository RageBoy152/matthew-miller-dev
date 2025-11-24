// types
import { setActiveProjectModalType } from "@/app/page";

// components
import ProjectCard, { Project } from "./ProjectCard";



// hard coded data for featured projects

export const featuredProjects: Project[] = [
  {
    id: "next-spaceflight",
    label: "Next Spaceflight",
    year: 2025,
    monthStart: "JUN",
    monthEnd: "AUG",
    preview: "https://nextspaceflight.com",
    technologies: ["Next.JS", "Tailwind_CSS", "Django"],
    text: [
      "Next Spaceflight is a resource for spaceflight enthusiasts to stay updated with upcoming launches.",
      "During this summer internship, my goal was to redesign and build a new front-end for the previously outdated site bringing the modern, cleaner design from the app to the website.",
      "This was an incredible oppertunity and showed me how to work as part of a development team as well as giving me exposure to use tools like Mapbox, GCP, Redis, Docker and Django."
    ],
    images: ["home-[SIZE].jpg", "launch-[SIZE].jpg", "locations-[SIZE].jpg"]
  },
  {
    id: "jo-smith",
    label: "Jo Smith Photos",
    year: 2025,
    monthStart: "MAR",
    monthEnd: "APR",
    github: "https://github.com/RageBoy152/jo-smith-photography",
    preview: "https://josmithphotos.netlify.app/",
    technologies: ["Next.JS", "Tailwind_CSS", "Unsplash_API"],
    text: [
      "Jo Smith is a fictitious photographer from Dundee who was looking for a website to showcase her portfolio and increase client outreach.",
      "I undertook this project as part of my HND course and was able to freely explore a variety of current tools and technologies. I used this as an opportunity to try expanding my knowledge with react and learned Next.JS."
    ],
    images: ["home-[SIZE].jpg", "weddings-[SIZE].jpg", "testimonials-[SIZE].jpg", "commercial-[SIZE].jpg"]
  },
  {
    id: "vinyls-online",
    label: "Vinyls Online",
    year: 2025,
    monthStart: "FEB",
    monthEnd: "MAR",
    github: "",
    preview: "https://matthewmiller.atwebpages.com/index.php",
    technologies: ["PHP", "My_SQL", "Bootstrap"],
    text: [
      "Vinyls Online is an online market place where users can either search for vinyls for their collection or upload their own vinyls for others to purchase.",
      "I used PHP and MySQL to bring this site to life after creating initial brand designs in 2023, creating a full interactive CRUD app with an account system."
    ],
    images: ["home-[SIZE].jpg", "titles-[SIZE].jpg", "search-[SIZE].jpg", "details-[SIZE].jpg"]
  },
  {
    id: "multicast",
    label: "MultiCast",
    year: 2024,
    monthStart: "JUL",
    monthEnd: "OCT",
    github: "https://github.com/RageBoy152/multicast",
    preview: "https://multicast.watch/",
    technologies: ["React.JS", "Tailwind_CSS", "Electron.JS"],
    text: [
      "As I found an interest in the SpaceX Starship program, I created Multicast to enhance my hobby of observing the 24/7 development of the program.",
      "Multicast allows desktop users to configure output layouts, add various YouTube streams of their choosing and simultaneously watch any selection of feeds."
    ],
    images: ["app-dashboard.jpg", "app-output-4.jpg", "app-settings.jpg", "app-output-9.jpg"]
  }
];



export default function ProjectsList({ setActiveProjectModal }: { setActiveProjectModal: setActiveProjectModalType }) {
  return (
    <div className="flex flex-col w-full ms-auto py-16">
      {featuredProjects.map((project, i) => <ProjectCard setActiveProjectModal={setActiveProjectModal} key={project.id} projectIndex={i} prevYear={featuredProjects[i-1]?.year} lastProject={i+1==featuredProjects.length} project={project} />)}
    </div>
  );
}