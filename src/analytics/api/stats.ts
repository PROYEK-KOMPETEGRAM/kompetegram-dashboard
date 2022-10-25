import { apiService } from "@/commons/config/api";

apiService.defaults.headers.common["Content-Type"] = "application/json";

const getMembersCount = async () => {
  const response = await apiService.get("/dashboard/members");

  return response.data;
}

const getVerifiedMembersCount = async () => {
  const response = await apiService.get("/dashboard/verified");

  return response.data;
}

const getMajorsCount = async () => {
  const response = await apiService.get("/dashboard/majors");

  return response.data;
}

const getDepartmentsCount = async () => {
  const response = await apiService.get("/dashboard/departments");

  return response.data;
}

export {
  getMembersCount,
  getMajorsCount,
  getDepartmentsCount,
  getVerifiedMembersCount
}