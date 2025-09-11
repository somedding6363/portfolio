import projectData from '@/data/projects.json';
import { useEffect, useState } from 'react';
import BoxProject from '../box/BoxProject';
import KuphilWeb from './troubleshooting/KuphilWeb';
import ColorMe from './troubleshooting/ColorMe';
import Soool from './troubleshooting/Soool';

const LIST = [
  ['프로젝트 소개', 'introduce'],
  ['프로젝트 목표', 'goal'],
  ['프로젝트 기능', 'feature'],
  ['담당', 'role'],
  ['사용 기술', 'tech'],
];

interface ProjectDetailProps {
  id: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  images: string;
}
const ProjectDetail = ({
  id,
  isOpen,
  setIsOpen,
  images,
}: ProjectDetailProps) => {
  const [isAllOpen, setIsAllOpen] = useState<boolean>(false);
  const [openedContent, setOpenedContent] = useState<boolean[]>(
    new Array(LIST.length).fill(false),
  );
  const data = projectData[id];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleAllOpen = (): void => {
    if (isAllOpen) {
      setIsAllOpen(false);
      setOpenedContent(new Array(openedContent.length).fill(false));
    } else {
      setIsAllOpen(true);
      setOpenedContent(new Array(openedContent.length).fill(true));
    }
  };

  const handleOpen = (idx: number): void => {
    const _openedContent = [...openedContent];
    _openedContent[idx] = !_openedContent[idx];
    setOpenedContent(_openedContent);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed z-10 top-0 animate-open-detail left-0 w-full h-dvh bg-light-header dark:bg-dark-header backdrop-blur-xs overflow-hidden">
      <div className="flex flex-col justify-center items-center w-9/10 max-w-[1200px] h-[calc(100%-30px)] mt-30 mx-auto p-40 bg-light-box dark:bg-dark-box rounded-t-20">
        <div
          onClick={() => setIsOpen(false)}
          className="w-45 h-45 shrink-0 mx-auto flex justify-center items-center text-32 border-2 border-main-500 rounded-full hover:cursor-pointer hover:bg-light-box-hover dark:hover:bg-dark-box-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-main-500 w-24 h-24 stroke-2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <div className="overflow-auto no-scrollbar w-full h-full mt-20 text-center ">
          <p className="text-16">{data.date}</p>
          <p className="text-28 mt-10">{data.title}</p>
          <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
            {data.tags.map((v, i) => (
              <div
                key={i}
                className="rounded-10 text-14 bg-main-500 px-10 py-5 text-white"
              >
                # {v}
              </div>
            ))}
          </div>
          <div className="mt-10 w-3/5 mx-auto rounded-10 overflow-hidden border border-light-border dark:border-dark-border">
            <img src={images} />
          </div>
          <div className="mt-10 flex justify-center items-center gap-20">
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="w-150 h-50 text-14 hover:bg-light-box-hover dark:hover:bg-dark-box-hover text-main-500 rounded-full border-2 border-main-500 flex justify-center items-center"
              >
                <p>사이트</p>
              </a>
            )}
            {data.git && (
              <a
                href={data.git}
                target="_blank"
                rel="noreferrer"
                className="w-150 h-50 text-14 hover:bg-light-box-hover dark:hover:bg-dark-box-hover text-main-500 rounded-full border-2 border-main-500 flex justify-center items-center"
              >
                <div>GitHub</div>
              </a>
            )}
          </div>
          <div
            onClick={handleAllOpen}
            className="w-fit flex items-center mt-20 mx-auto gap-5 hover:cursor-pointer select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 stroke-black dark:stroke-white"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isAllOpen ? (
                <path d="M18 15l-6-6-6 6" />
              ) : (
                <path d="M6 9l6 6 6-6" />
              )}
            </svg>
            <p>{isAllOpen ? '모두 접기' : '모두 펼치기'}</p>
          </div>
          <div className="text-black">
            {LIST.map((v, i) => (
              <BoxProject
                key={i}
                openedContent={openedContent[i]}
                handleOpen={() => handleOpen(i)}
                title={v[0]}
                data={
                  data[v[1] as keyof typeof data] as
                    | string[]
                    | string[][]
                    | undefined
                }
              />
            ))}
            {id === 0 && (
              <Soool
                openedContent={openedContent[LIST.length]}
                handleOpen={() => handleOpen(LIST.length)}
              />
            )}
            {id === 1 && (
              <KuphilWeb
                openedContent={openedContent[LIST.length]}
                handleOpen={() => handleOpen(LIST.length)}
              />
            )}
            {id === 2 && (
              <ColorMe
                openedContent={openedContent[LIST.length]}
                handleOpen={() => handleOpen(LIST.length)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
