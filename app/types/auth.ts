import type { ApiResponse } from '~/types/common'
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

export type Profile = IUser & {
  roles: string[]
  permissions: string[]
}

export type GetProfileResponse = ApiResponse<Profile>
