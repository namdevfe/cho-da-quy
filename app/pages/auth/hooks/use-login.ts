import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import { authService } from '~/services/auth-service'
import type { LoginPayload, LoginResponse } from '~/types/auth'

type UseLogin = Omit<UseMutationOptions<LoginResponse, unknown, LoginPayload>, 'mutationFn' | 'mutationKey'>

export const useLogin = (options?: UseLogin) => {
  return useMutation({
    ...options,
    mutationKey: ['login'],
    mutationFn: authService.login
  })
}
