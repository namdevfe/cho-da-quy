import { type StateCreator } from 'zustand'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeSlice {
  theme: Theme
  toggleTheme: (theme: 'light' | 'dark') => void
}

export const createThemeSlice: StateCreator<ThemeSlice, [], [], ThemeSlice> = (set) => ({
  theme: Theme.LIGHT,
  toggleTheme: () => set((state) => ({ theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT }))
})
