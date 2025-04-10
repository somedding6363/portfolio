import { Ref } from 'react';
import Box11 from '../box/Box11';
import Naver from '@/assets/Naver.png';
import Gmail from '@/assets/Gmail.png';
import KakaoTalk from '@/assets/KakaoTalk.png';
import Instagram from '@/assets/Instagram.png';

const LIST = ['Naver mail', 'Gmail', 'KakaoTalk', 'Instagram'];
const IMAGE = [Naver, Gmail, KakaoTalk, Instagram];
const LINK = [
  'mailto:somedding6363@naver.com',
  'mailto:somedding6363@gmail.com',
  'https://open.kakao.com/o/sjXBWYre',
  'https://www.instagram.com/duyeon_0915',
];

interface ProjectsProps {
  ref?: Ref<HTMLDivElement>;
}
const Contact = ({ ref }: ProjectsProps) => {
  return (
    <section
      ref={ref}
      className="w-full max-w-9/10 flex flex-col gap-20 items-center m-auto"
    >
      <article className="w-9/10 m-auto pt-50 flex flex-col items-center">
        <p className="text-center text-28 font-semibold pb-30">Contact</p>
      </article>
      {/* <div className="w-full text-24 text-center py-10">It's Me!</div> */}
      <div className="grid gc:grid-cols-(--box-col-4) grid-cols-(--box-col-2) grid-flow-row auto-rows-(--box1) gap-20 transition-[grid-cols]">
        {LIST.map((v, i) => (
          <Box11 key={i}>
            <a href={LINK[i]} target="_blank" rel="noreferrer">
              <div className="w-full h-full flex flex-col justify-center items-center gap-15">
                <img className="w-2/5" src={IMAGE[i]} />
                <p className="sm:text-18 text-16 break-keep text-center">{v}</p>
              </div>
            </a>
          </Box11>
        ))}
      </div>
    </section>
  );
};

export default Contact;
