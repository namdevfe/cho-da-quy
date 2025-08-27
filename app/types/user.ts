import type { Base } from '~/types/common'

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export interface User {
  id: string
  fullName: string
  email: string
  role: string
  status: Status
  createdAt: string
}

export interface IUser extends Base {
  id: string
  name: string
  email: string
  password?: string
  slug: string
  status: Status
  bio?: string
  avatar?: string
  birthdate?: string
  gender?: Gender
  isEmailVerified?: boolean
  lastLoginAt?: string
  phones?: any
  addresses?: any
  socialLinks?: any
}
