import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { userService } from '~/services/user-service'
import type { QueryParams } from '~/types/common'

type UseGetUsers = Omit<UseQueryOptions<any, unknown, any>, 'queryFn' | 'queryKey'>

export const useGetUsers = (queryPams?: QueryParams, options?: UseGetUsers) => {
  return useQuery({
    queryFn: () => userService.getUsers(queryPams),
    queryKey: ['users'],
    ...options
  })
}
