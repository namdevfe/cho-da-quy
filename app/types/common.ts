export interface Base {
  created_at: string
  updated_at: string
}

export interface ApiResponse<T = null> {
  data: T
  message: string
  statusCode: number
}
