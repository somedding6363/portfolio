import { ReactNode } from 'react';

interface AboutProps {
  children: ReactNode;
}

const About = ({ children }: AboutProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center gap-10 text-black">
      {children}
      <div className="h-full w-full px-20 whitespace-break-spaces text-start leading-snug break-keep">
        <p>
          안녕하세요!{'\n'}신입 프론트엔드 개발자 <b>강두연</b>입니다.
        </p>
        <p>
          &quot;Team-first Process, User-first Result&quot;라는 목표를 가지고
          항상 사용자를 위한 개발자가 되고 싶습니다. 팀과 함께 깊이 논의하고,
          사용자에게 최고의 경험을 전달하는 것이 프론트엔드 개발의 본질이라
          믿습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
