import { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export const useTheme = () => {
  const { theme, updateIsDark } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      root.classList.remove('light', 'dark');
      if (theme === 'system') {
        root.classList.add(systemDark.matches ? 'dark' : 'light');
      } else {
        root.classList.add(theme);
      }
    };

    applyTheme(); // 초기 테마 적용
    updateIsDark(); // isDark 상태 업데이트

    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme();
        updateIsDark(); // OS 변경 시 isDark 업데이트
      }
    };

    systemDark.addEventListener('change', handleSystemThemeChange);

    return () => {
      systemDark.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme, updateIsDark]);
};
