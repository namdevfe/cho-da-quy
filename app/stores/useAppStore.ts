import { create } from 'zustand'
import { createThemeSlice, type ThemeSlice } from '~/stores/slices/themeSlice'

export const useBoundStore = create<ThemeSlice>()((...a) => ({
  ...createThemeSlice(...a)
}))
