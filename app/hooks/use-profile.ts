import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { authService } from '~/services/auth-service'
import { useBoundStore } from '~/stores/use-bound-store'
import type { GetProfileResponse } from '~/types/auth'

type UseProfile = Omit<UseQueryOptions<GetProfileResponse>, 'queryFn' | 'queryKey'>

export const useProfile = (options?: UseProfile) => {
  const isLoggedIn = useBoundStore((state) => state.isLoggedIn)

  return useQuery({
    ...options,
    queryKey: ['profile'],
    queryFn: authService.getProfile,
    enabled: isLoggedIn
  })
}
