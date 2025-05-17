export type educationTabProps = {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  grade: string | null;
  technologies: string[];
  content: string[];
}


export default function EducationTab({ educationData, tailwindClasses }: { tailwindClasses?: string, educationData: educationTabProps }) {
  return (
    <div className={tailwindClasses}>
      <div className="flex flex-col gap-4 lg:gap-3 uppercase font-space-mono text-gray">
        <p className="text-sm">{educationData.startDate} <span className="mx-2">-</span> {educationData.endDate}</p>

        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl md:text-4xl text-white">{educationData.title}</h3>
          <p className="text-accent">({educationData.grade})</p>
        </div>

        <div className="flex flex-wrap gap-y-3 gap-8 mt-2 text-sm">
          {educationData.technologies.map((tech, index) => (
            <p key={`${tech}-${index}`}>{tech}</p>
          ))}
        </div>
      </div>

      <hr className="text-gray/25 my-8 lg:my-6" />

      <div className="flex flex-col gap-3">
        {educationData.content.map((text, index) => (
          <p key={`${text.slice(0,10).replace(/\s/g, "-")}-${index}`}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}