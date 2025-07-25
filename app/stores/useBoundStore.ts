import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createThemeSlice, type ThemeSlice } from '~/stores/slices/themeSlice'

export const useBoundStore = create<ThemeSlice>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a)
    }),
    {
      name: 'cdq-theme' // Key lưu vào localStorage
      // optional: chỉ lưu phần state, không lưu method nếu cần
      // partialize: (state) => ({ theme: state.theme })
    }
  )
)
