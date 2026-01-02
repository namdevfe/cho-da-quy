import axiosClient from '~/config/axios-client'
import type { QueryParams } from '~/types/common'

export const userService = {
  getUsers: (queryParams?: QueryParams) => {
    return axiosClient.get('/users', { params: queryParams })
  }
}
