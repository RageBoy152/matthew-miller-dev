export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-place-black aspect-[16/9] shadow-accent">
        <img className="w-full h-full object-cover" src={`featured-projects/${project.id}/preview.jpg`} alt={`${project.label} preview`} />
      </div>
      
      <hr className="text-gray/25" />
      
      <div className="flex flex-col uppercase font-space-mono">
        <div className="flex items-center justify-between">
          <h3 className="text-4xl text-white">{project.label}</h3>

          <div className="flex gap-4 text-2xl text-gray">
            {project.github && <a className="transition-colors hover:text-accent" target="_blank" href={project.github}><i className="bi bi-github"></i></a>}
            {project.preview && <a className="transition-colors hover:text-accent" target="_blank" href={project.preview}><i className="bi bi-box-arrow-up-right"></i></a>}
          </div>
        </div>

        <div className="flex gap-8 mt-6 text-gray text-sm">
          {project.technologies.map((tech, i) => <p key={i}>{tech}</p>)}
        </div>
      </div>
      
      <hr className="text-gray/25" />

      <div className="flex flex-col gap-3">
        {project.text.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  );
}