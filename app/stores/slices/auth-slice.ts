import { type StateCreator } from 'zustand'
import type { IUser } from '~/types/user'

export interface AuthSlice {
  profile: IUser | null
  token: { accessToken: string; refreshToken: string } | null
  setToken: (token: { accessToken: string; refreshToken: string }) => void
  setAuth: (profile: IUser) => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (set) => ({
  // Initial states
  profile: null,
  token: null,

  // Actions
  setToken: ({ accessToken, refreshToken }) => set({ token: { accessToken, refreshToken } }),
  setAuth: (profile) => set({ profile })
})
