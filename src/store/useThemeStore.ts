import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  updateIsDark: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      setTheme: (theme) => {
        set({ theme });
        get().updateIsDark();
      },
      updateIsDark: () => {
        const { theme } = get();
        if (theme === 'system') {
          set({
            isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
          });
        } else {
          set({ isDark: theme === 'dark' });
        }
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);
