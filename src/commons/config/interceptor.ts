import { refreshToken } from "@/auth/api/auth";
import { AuthResponse, RefreshRequest } from "@/auth/ts/interface";
import { AxiosError, AxiosResponse } from "axios";
import { getRefreshToken, setAccessToken, setRefreshToken } from "../helpers/utils";

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
}

const onResponseFailed = async (error: AxiosError): Promise<AxiosError> => {
  let response: any = error.response?.data;

  if (error.response?.status == 401 && response.message == 'Token is expired') {
    const payload: RefreshRequest = { refreshToken: getRefreshToken() };
    const data: AuthResponse = await refreshToken(payload);
    setAccessToken(data.data.accessToken);
  }

  if (error.response?.status == 401 && response.message == 'Token is invalid') {
    localStorage.removeItem("USER_TOKEN");
  }

  if (error.response?.status == 401 && response.message == 'Unauthorized') {
    localStorage.removeItem("USER_TOKEN");
  }

  return Promise.reject(error);
}

export {
  onResponse,
  onResponseFailed
}