import { Status, type User } from '~/types/user'

export const USERS_MOCK_DATA: User[] = [
  {
    id: Date.now().toString(),
    email: 'hHb0W@example.com',
    fullName: 'John Doe',
    role: 'admin',
    status: Status.ACTIVE,
    createdAt: new Date().toISOString()
  },
  {
    id: Date.now().toString(),
    email: 'nguyenvana@example.com',
    fullName: 'Nguyễn Văn A',
    role: 'admin',
    status: Status.INACTIVE,
    createdAt: new Date().toISOString()
  },
  {
    id: Date.now().toString(),
    email: 'haopham@example.com',
    fullName: 'Phan Nhật Hào',
    role: 'admin',
    status: Status.ACTIVE,
    createdAt: new Date().toISOString()
  }
]
