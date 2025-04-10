interface ProjectDateProps {
  date: string[];
}
const ProjectDate = ({ date }: ProjectDateProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      {date.map((v, i) => (
        <p key={i} className="text-18 text-black font-semibold">
          {v}
        </p>
      ))}
    </div>
  );
};
export default ProjectDate;
