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

interface SpinnerProps {
  children?: JSX.Element
  size: string
}

export type {
  BaseResponse,
  User,
  CurrentUserResponse,
  SpinnerProps
}