// Box 형태 (2 * 1)
// ㅁ
// ㅁ
import { Box } from '../../models/Box';

const Box21 = ({ children, bg = 'bg-light-box' }: Box) => {
  return (
    <div
      className={`row-span-2 col-span-1 rounded-20 ${bg} ${bg === 'bg-light-box' ? 'dark:bg-dark-box' : null} overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default Box21;
