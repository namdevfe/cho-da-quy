export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export interface User {
  id: string
  fullName: string
  email: string
  role: string
  status: Status
  createdAt: string
}
