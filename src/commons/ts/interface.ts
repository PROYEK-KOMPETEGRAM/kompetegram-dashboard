interface BaseResponse {
  code: number 
  success: boolean 
  message: string
}

interface CurrentUserResponse extends BaseResponse {
  data: User
}

interface User {
  _id: string 
  username: string
}

export type {
  BaseResponse,
  User,
  CurrentUserResponse
}