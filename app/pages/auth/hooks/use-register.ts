import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import { authService } from '~/services/auth-service'
import type { RegisterPayload, RegisterResponse } from '~/types/auth'

type UseRegister = Omit<UseMutationOptions<RegisterResponse, unknown, RegisterPayload>, 'mutationFn' | 'mutationKey'>

export const useRegister = (options?: UseRegister) => {
  return useMutation({
    ...options,
    mutationKey: ['register'],
    mutationFn: authService.register
  })
}
