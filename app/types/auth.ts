import type { IUser } from '~/types/user'

export type RegisterPayload = Pick<IUser, 'name' | 'email' | 'password'>
export type RegisterResponse = Pick<IUser, 'name' | 'email' | 'slug'>

export type LoginPayload = Pick<IUser, 'email' | 'password'>
export type LoginResponse = {
  message: string
  user: {
    accessToken: string
    refreshToken: string
  }
}

export type GetProfileResponse = IUser & {
  roles: string[]
  permissions: string[]
}
