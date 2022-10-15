interface BaseResponse {
  code: number 
  success: boolean 
  message: string
}

interface User {
  _id: string 
  username: string
}

export type {
  BaseResponse,
  User
}