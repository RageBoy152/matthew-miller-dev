// component imports
import ProjectCard, { Project } from "./ProjectCard";



const featuredProjects: Project[] = [
  {
    id: "jo-smith",
    label: "Jo Smith Photos",
    year: 2025,
    monthRange: "MAR - APR",
    github: "https://github.com/RageBoy152/jo-smith-photography",
    preview: "https://josmithphotos.netlify.app/",
    technologies: ["Next.JS", "Tailwind_CSS", "Unsplash_API"],
    text: [
      "Jo Smith is a fictitious photographer from Dundee who was looking for a website to showcase her portfolio and increase client outreach.",
      "I undertook this project as part of my HND course and was able to freely explore a variety of current tools and technologies. I used this as an opportunity to try expanding my knowledge with react and learned Next.JS."
    ],
  },
  {
    id: "vinyls-online",
    label: "Vinyls Online",
    year: 2025,
    monthRange: "FEB - MAR",
    github: "",
    preview: "https://matthewmiller.atwebpages.com/index.php",
    technologies: ["PHP", "My_SQL", "Bootstrap"],
    text: [
      "Vinyls Online is an online market place where users can either search for vinyls for their collection or upload their own vinyls for others to purchase.",
      "I used PHP and MySQL to bring this site to life after creating initial brand designs in 2023, creating a full interactive CRUD app with an account system."
    ],
  },
  {
    id: "multicast",
    label: "MultiCast",
    year: 2024,
    monthRange: "JUL - OCT",
    github: "https://github.com/RageBoy152/multicast",
    preview: "https://multicast.watch/",
    technologies: ["React.JS", "Tailwind_CSS", "Electron.JS"],
    text: [
      "As I found an interest in the SpaceX Starship program, I created Multicast to enhance my hobby of observing the 24/7 development of the program.",
      "Multicast allows desktop users to configure output layouts, add various YouTube streams of their choosing and simultaneously watch any selection of feeds."
    ],
  }
];



export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-32 w-4/6 ms-auto py-16">
      {featuredProjects.map((project, i) => <ProjectCard key={project.id} projectIndex={i} project={project} />)}
    </div>
  );
}