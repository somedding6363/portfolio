import React from 'react';
import Box11 from '../box/Box11';
import Box12 from '../box/Box12';
import Box22 from '../box/Box22';
import Modifier from './Modifier';
import Other from './Other';
import TistoryLogo from '@/assets/Tistory.png';
import GitHubLogo from '@/assets/Github.png';
import GithubWhiteLogo from '@/assets/GithubWhite.png';
import Profile from '@/assets/Profile.png';
import About from './About';
import Resume from './Resume';
import ScreenMode from './ScreenMode';
import { useThemeStore } from '@/store/useThemeStore';

const Main = React.memo(() => {
  console.log('main');
  const { isDark } = useThemeStore();
  return (
    <section className="w-full max-w-9/10 flex flex-col gap-20 items-center m-auto pb-50">
      <article className="w-9/10 m-auto flex flex-col items-center">
        <p className="text-center text-28 font-semibold">It&apos;s Me</p>
      </article>
      {/* <div className="w-full text-24 text-center py-10">It's Me!</div> */}
      <div className="grid gc:grid-cols-(--box-col-4) grid-cols-(--box-col-2) grid-flow-row auto-rows-(--box1) gap-20 transition-[grid-cols]">
        <Box12 bg="bg-main-500">
          <Modifier />
        </Box12>
        <Box22 bg="bg-main-300">
          <About>
            <img className="max-h-1/2 p-10" src={Profile} alt="Profile" />
          </About>
        </Box22>
        <Box11>
          <Other title="개발 블로그" link="https://duyaan.tistory.com/">
            <img className="w-2/5" src={TistoryLogo} alt="Tistory" />
          </Other>
        </Box11>
        <Box11>
          <Other title="GitHub" link="https://github.com/somedding6363">
            <img
              className="w-2/5"
              src={isDark ? GithubWhiteLogo : GitHubLogo}
              alt="GitHub"
            />
          </Other>
        </Box11>
        <Box12 bg="bg-main-400">
          <Resume />
        </Box12>
        <Box12>
          <ScreenMode />
        </Box12>
      </div>
    </section>
  );
});

Main.displayName = 'Main';

export default Main;
