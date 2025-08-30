import { type StateCreator } from 'zustand'
import type { IUser } from '~/types/user'

export interface AuthSlice {
  isLoggedIn: boolean
  profile?: IUser | null
  setAuth: ({ profile, isLoggedIn }: { profile?: IUser | null; isLoggedIn?: boolean }) => void
  logout: () => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (set) => ({
  // Initial states
  isLoggedIn: false,
  profile: null,

  // Actions
  setAuth: ({ profile, isLoggedIn }) => set((state) => ({ profile, isLoggedIn: isLoggedIn ?? state.isLoggedIn })),
  logout: () => set({ profile: null, isLoggedIn: false })
})
