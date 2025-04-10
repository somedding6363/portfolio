import { ReactNode } from 'react';

interface AboutProps {
  children: ReactNode;
}

const About = ({ children }: AboutProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center gap-10 text-black">
      {children}
      <div className="h-full w-full px-40 whitespace-break-spaces text-start leading-snug break-keep">
        <p>
          안녕하세요!{'\n'}신입 프론트엔드 개발자 <b>강두연</b>입니다.
        </p>
        <p>
          &quot;Moving towards Users&quot;라는 목표를 가지고 항상 사용자를 위한
          개발자가 되고 싶습니다. 가장 중요한 것은 기본이라고 생각하며, 탄탄한
          기본기를 바탕으로 실력을 쌓아올리기 위해 노력하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
