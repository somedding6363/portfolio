import ProjectItem from './ProjectItem';
import kuphilWeb from '@/assets/project/kuphilWeb.png';
import colorMe from '@/assets/project/colorMe.png';
import { Ref } from 'react';

const LIST = ['Kuphil Web', 'Color, me'];
const THUMB = [kuphilWeb, colorMe];

interface ProjectsProps {
  ref?: Ref<HTMLDivElement>;
}
const Projects = ({ ref }: ProjectsProps) => {
  return (
    <section ref={ref}>
      {LIST.map((v, i) => (
        <article
          key={i}
          className="w-9/10 m-auto pt-50 flex flex-col items-center"
        >
          <p className="text-center text-18 pb-10">Project #{i + 1}</p>
          <p className="text-center text-28 font-semibold pb-30">{v}</p>
          <ProjectItem id={i} img={THUMB[i]} />
        </article>
      ))}
    </section>
  );
};

export default Projects;
