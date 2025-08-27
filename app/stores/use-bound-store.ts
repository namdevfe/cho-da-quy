import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createAuthSlice, type AuthSlice } from '~/stores/slices/auth-slice'
import { createThemeSlice, type ThemeSlice } from '~/stores/slices/theme-slice'

export const useBoundStore = create<ThemeSlice & AuthSlice>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
      ...createAuthSlice(...a)
    }),
    {
      name: 'cdq-store',
      partialize: (state) => ({
        theme: state.theme,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        profile: state.profile
      })
    }
  )
)
