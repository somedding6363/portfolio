import ResumeIcon from '@/assets/Resume.png';

const Resume = () => {
  return (
    <a href="https://somedding.notion.site/" target="_blank" rel="noreferrer">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <img className="w-1/5" src={ResumeIcon} />
        <p className="text-black break-keep text-center whitespace-break-spaces leading-snug">
          이력서 바로가기 {'>'}
        </p>
      </div>
    </a>
  );
};

export default Resume;
