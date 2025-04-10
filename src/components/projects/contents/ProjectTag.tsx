interface ProjectTagProps {
  tag: string[];
}
const ProjectTag = ({ tag }: ProjectTagProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full shrink-0 flex flex-wrap p-20 justify-center items-center">
        {tag.map((v, i) => (
          <p
            key={i}
            className="py-12 rounded-5 text-16 text-black w-1/2 shrink-0 text-center"
          >
            # {v}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectTag;
