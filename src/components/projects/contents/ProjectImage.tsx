interface ProjectImageProps {
  img: string;
}
const ProjectImage = ({ img }: ProjectImageProps) => {
  return (
    <div className="w-full h-full flex items-center p-10">
      <img src={img} className="border border-light-border rounded-20" />
    </div>
  );
};

export default ProjectImage;
