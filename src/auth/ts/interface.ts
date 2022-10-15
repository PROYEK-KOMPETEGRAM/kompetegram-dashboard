import { BaseResponse } from "@/commons/ts/interface";

interface AuthResponse extends BaseResponse {
  data: {
    accessToken: string 
    expiresIn: number 
    refreshToken: string
  }
}

interface RefreshRequest {
  refreshToken: string | null
}

interface LoginRequest {
  username: string 
  password: string
}

export type {
  AuthResponse,
  RefreshRequest,
  LoginRequest
}
