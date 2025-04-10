import { useThemeStore } from '@/store/useThemeStore';
import LightTheme from '@/assets/theme/LightTheme.png';
import DarkTheme from '@/assets/theme/DarkTheme.png';
import DeviceTheme from '@/assets/theme/DeviceTheme.png';

const ScreenMode = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="w-full h-full flex justify-center items-center gap-20">
      <ModeItem
        img={LightTheme}
        mode="라이트 모드"
        isCheck={theme === 'light'}
        handleClick={() => setTheme('light')}
      />
      <ModeItem
        img={DarkTheme}
        mode="다크 모드"
        isCheck={theme === 'dark'}
        handleClick={() => setTheme('dark')}
      />
      <ModeItem
        img={DeviceTheme}
        mode="기기 설정"
        isCheck={theme === 'system'}
        handleClick={() => setTheme('system')}
      />
    </div>
  );
};

interface ModeItemProps {
  img: string;
  mode: string;
  isCheck: boolean;
  handleClick: () => void;
}
const ModeItem = ({ img, mode, isCheck, handleClick }: ModeItemProps) => {
  return (
    <div
      onClick={handleClick}
      className="w-1/5 flex flex-col gap-10 items-center min-w-50 hover:cursor-pointer"
    >
      <div
        className={`relative w-full pt-[75%] rounded-10 box-border ${isCheck ? 'border-2 border-main-500' : 'border border-light-border dark:border-dark-border'} overflow-hidden`}
      >
        <img className="absolute top-0 left-0 h-full" src={img} />
      </div>
      <p
        className={`text-14 text-center text-nowrap ${isCheck ? 'font-semibold text-main-500' : 'font-normal'}`}
      >
        {mode}
      </p>
    </div>
  );
};

export default ScreenMode;
