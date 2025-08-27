export const HttpStatus = {
  OK: {
    statusCode: 200,
    message: 'OK'
  },
  BAD_REQUEST: {
    statusCode: 400,
    message: 'Bad Request'
  },
  UNAUTHORIZED: {
    statusCode: 401,
    message: 'Unauthorized'
  },
  FORBIDDEN: {
    statusCode: 403,
    message: 'Forbidden'
  },
  NOT_FOUND: {
    statusCode: 404,
    message: 'Not Found'
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: 'Internal Server Error'
  }
} as const

// Types Defination
export type HttpStatusKey = keyof typeof HttpStatus
export type HttpStatusValue = (typeof HttpStatus)[HttpStatusKey]
