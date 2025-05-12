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
  return (
    <div className="flex flex-col gap-8">
      {featuredTechnologies.map((techGroup, groupIndex) => (

        <div key={groupIndex} className="flex gap-8 justify-end">
          {techGroup.map((tech, i) => (

            <div key={tech.label + i} className="bg-place-black/50 uppercase flex items-center gap-3 py-2 ps-3 pe-6 w-fit">
              <img src={`tech-icons/${tech.iconName}`} alt={`${tech.label} logo`} />
              <p>{tech.label}</p>
            </div>

          ))}
        </div>

      ))}
    </div>
  );
}