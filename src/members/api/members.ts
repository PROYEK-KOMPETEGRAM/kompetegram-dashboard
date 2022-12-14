import { apiService } from "@/commons/config/api";
import { MembersResponse } from "../ts/interface";

const getMembersData = async (page?: any, limit?: any, keyword?: any) => {
  const params = {
    page: page,
    limit: limit,
    keyword: keyword
  }
  const response = await apiService.get<MembersResponse>("/members", {
    params: params
  });

  return response.data;
}

const exportMembersData = async () => {
  const response = await apiService.get("/members/export", {
    responseType: 'blob'
  });

  return response.data;
}

export {
  getMembersData,
  exportMembersData
}