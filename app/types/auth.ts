import type { IUser } from '~/types/user'

export type RegisterPayload = Pick<IUser, 'name' | 'email' | 'password'>
export type RegisterResponse = Pick<IUser, 'name' | 'email' | 'slug'>

export type LoginPayload = Pick<IUser, 'email' | 'password'>
export type LoginResponse = any
