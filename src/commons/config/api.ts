import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const BASE_URL = "https://pemrograman.me/api/v1"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    }
  }
})

const apiService = axios.create({
  baseURL: BASE_URL
})

export {
  queryClient,
  apiService
}

