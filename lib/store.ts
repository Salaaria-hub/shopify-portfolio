import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: 'light' | 'dark' | 'system';
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      toggleTheme: () =>
        set((state) => {
          if (state.theme === 'light') return { theme: 'dark' };
          if (state.theme === 'dark') return { theme: 'system' };
          return { theme: 'light' };
        }),
    }),
    {
      name: 'theme-storage',
    }
  )
);