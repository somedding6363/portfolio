import { ReactNode } from 'react';

interface OtherProps {
  children: ReactNode;
  title: string;
  link: string;
}
const Other = ({ children, title, link }: OtherProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="w-full h-full flex flex-col justify-center items-center gap-15">
        {children}
        <p className="sm:text-18 text-16 break-keep text-center">{title}</p>
      </div>
    </a>
  );
};

export default Other;
