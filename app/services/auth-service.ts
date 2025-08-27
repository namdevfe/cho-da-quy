import axiosClient from '~/config/axios-client'
import type { GetProfileResponse, LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from '~/types/auth'

export const authService = {
  register: (payload: RegisterPayload): Promise<RegisterResponse> => {
    return axiosClient.post('/auth/register', payload)
  },
  login: (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post('/auth/login', payload)
  },
  getProfile: (): Promise<GetProfileResponse> => {
    return axiosClient.get('/auth/me')
  }
}
