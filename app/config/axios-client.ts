import { message } from 'antd'
import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { HttpStatus, publicRoutes } from '~/constants'
import { authService } from '~/services/auth-service'
import { useBoundStore } from '~/stores/use-bound-store'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ?? response
  },
  async (error) => {
    const isLoggedIn = useBoundStore.getState().isLoggedIn
    const logout = useBoundStore.getState().logout

    if (error instanceof AxiosError) {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }
      if (error.response?.status === HttpStatus.UNAUTHORIZED.statusCode && !originalRequest._retry && isLoggedIn) {
        try {
          originalRequest._retry = true

          // Handle Refresh Token
          await authService.refreshToken()

          return axiosClient(originalRequest)
        } catch (error) {
          logout()
          message.success('Hết phiên đăng nhập')
          window.location.href = publicRoutes.LOGIN
        }
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default axiosClient
