import React from 'react';
import ProjectItem from './ProjectItem';
import kuphilWeb from '@/assets/project/kuphilWeb.png';
import colorMe from '@/assets/project/colorMe.png';

const LIST = ['Kuphil Web', 'Color, me'];
const THUMB = [kuphilWeb, colorMe];

const Projects = React.memo(() => {
  return (
    <section>
      {LIST.map((v, i) => (
        <article
          key={i}
          className="w-9/10 m-auto flex flex-col items-center pb-50"
        >
          <p className="text-center text-18 pb-10">Project #{i + 1}</p>
          <p className="text-center text-28 font-semibold pb-30">{v}</p>
          <ProjectItem id={i} img={THUMB[i]} />
        </article>
      ))}
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
