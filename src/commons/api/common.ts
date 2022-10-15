import { apiService } from "@/commons/config/api";
import { getAccessToken } from "@/commons/helpers/utils";
import { CurrentUserResponse } from "../ts/interface";

apiService.defaults.headers.common["Content-Type"] = "application/json";

const getCurrentUser = async () => {
  apiService.defaults.headers.common["Authorization"] = `Bearer ${getAccessToken()}`;
  const response = await apiService.get<CurrentUserResponse>("/users/me");

  return response.data;
}

export {
  getCurrentUser
}