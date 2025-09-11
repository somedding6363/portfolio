import { Project } from '@/models/Project';
import projectData from '@/data/projects.json';
import Box11 from '../box/Box11';
import Box22 from '../box/Box22';
import Box12 from '../box/Box12';
import ProjectDate from './contents/ProjectDate';
import ProjectLink from './contents/ProjectLink';
import ProjectTag from './contents/ProjectTag';
import ProjectImage from './contents/ProjectImage';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import sooolImage from '@/assets/project/soool/soool1.png';
import kuphilWebImage from '@/assets/project/kuphilWeb/kuphilWeb1.png';
import colorMeImage from '@/assets/project/colorMe/colorMe1.png';

interface ProjectProps {
  id: number;
  img: string;
}
const ProjectItem = ({ id, img }: ProjectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { date, link, git, tags, summary }: Project = projectData[id];
  const IMAGES = [sooolImage, kuphilWebImage, colorMeImage];
  return (
    <>
      <div className="grid gc:grid-cols-(--box-col-4) grid-cols-(--box-col-2) grid-flow-row auto-rows-(--box1) gap-20 transition-[grid-cols]">
        <Box22>
          <ProjectImage img={img} />
        </Box22>
        <Box11 bg="bg-main-400">
          <ProjectDate date={date} />
        </Box11>
        <Box11>
          <ProjectLink link={link} git={git} />
        </Box11>
        <Box12 bg="bg-main-300">
          <ProjectTag tag={tags} />
        </Box12>
      </div>
      <div className="grid gc:grid-cols-(--box-col-4) grid-cols-(--box-col-2) bg-light-box dark:bg-dark-box rounded-20 p-20 mt-20">
        <div className="gc:col-span-4 col-span-2">
          <p className="text-18 inline-block">프로젝트 요약</p>
          {summary.map((v, i) => (
            <p
              className="mt-20 leading-24 before:content-['🚀'] before:pr-10"
              key={i}
            >
              {v}
            </p>
          ))}
        </div>
      </div>
      <div className="p-20 w-full text-center">
        <div
          onClick={() => setIsOpen(true)}
          className="px-30 py-15 rounded-full bg-main-500 hover:bg-main-600 text-white inline-block hover:cursor-pointer"
        >
          자세히 보기
        </div>
      </div>
      <ProjectDetail
        id={id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={IMAGES[id]}
      />
    </>
  );
};

export default ProjectItem;
