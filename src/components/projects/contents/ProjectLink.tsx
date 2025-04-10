interface ProjectLinkProps {
  link?: string;
  git?: string;
}
const ProjectLink = ({ link, git }: ProjectLinkProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-15 p-20 text-nowrap">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-full h-50 text-14 text-white rounded-full bg-main-500 hover:bg-main-600 flex justify-center items-center"
        >
          <p>사이트</p>
        </a>
      )}
      {git && (
        <a
          href={git}
          target="_blank"
          rel="noreferrer"
          className="w-full h-50 text-14 text-white rounded-full bg-main-500 hover:bg-main-600 flex justify-center items-center"
        >
          <div>GitHub</div>
        </a>
      )}
    </div>
  );
};

export default ProjectLink;
