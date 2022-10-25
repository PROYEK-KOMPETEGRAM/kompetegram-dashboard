import { apiService } from "@/commons/config/api";
import { RefreshRequest, AuthResponse, LoginRequest } from "../ts/interface";

apiService.defaults.headers.common["Content-Type"] = "application/json";

const loginUser = async (payload: LoginRequest) => {
  const response = await apiService.post<AuthResponse>("/auth/login", payload);
  return response.data;
}

const refreshToken = async (payload: RefreshRequest) => {
  const response = await apiService.post<AuthResponse>("/auth/refresh", payload);
  return response.data;
}

export { refreshToken, loginUser }