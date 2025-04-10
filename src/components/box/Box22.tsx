// Box 형태 (2 * 2)
// ㅁㅁ
// ㅁㅁ
import { Box } from '../../models/Box';

const Box22 = ({ children, bg = 'bg-light-box' }: Box) => {
  return (
    <div
      className={`row-span-2 col-span-2 rounded-20 ${bg} ${bg === 'bg-light-box' ? 'dark:bg-dark-box' : null} overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default Box22;
