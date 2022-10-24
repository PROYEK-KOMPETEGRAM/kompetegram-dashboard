import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "./auth/pages/Login"
import { getCurrentUser } from "./commons/api/common"
import { useStateContext } from "./commons/context/provider"
import { getAccessToken, getRefreshToken } from "./commons/helpers/utils"
import { MembersPage } from "./members/pages/MembersPage"
import { Spinner } from "./commons/components/Spinner/Spinner"
import Logo from "./commons/assets/logo-ktg.svg";
import { DashboardWrapper } from "./commons/components/DashboardWrapper/DashboardWrapper"
import { AnalyticsPage } from "./analytics/pages/AnalyticsPage"

export const AppRoute = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const stateContext = useStateContext();

  const query = useQuery(["user"], getCurrentUser, {
    enabled: false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      stateContext.dispatch({
        type: "SET_USER",
        payload: data
      });
      setLoading(false);
    }
  })

  useEffect(() => {
    if (accessToken && refreshToken) {
      query.refetch();
    } else {
      setLoading(false);
    }
  }, [])


  return (
    <>
    {loading && (
      <Spinner>
        <img 
          src={Logo} 
          alt="logo-kompetegram"
          className="mb-8 w-2/3 sm:w-1/2 md:w-1/4" 
        />
      </Spinner>
    )}
    {!loading && (
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route index element={<LoginPage/>} />
        <Route path="/dashboard">
          <Route 
            path="members" 
            element={<ProtectedRoute children={
              <DashboardWrapper>
                <MembersPage/>
              </DashboardWrapper>
            }/>} 
          />
          <Route
            path="stats"
            element={<ProtectedRoute children={
              <DashboardWrapper>
                <AnalyticsPage/>
              </DashboardWrapper>
            }/>}
          />
        </Route>
      </Routes>
    )}
    </>
  )
}

const ProtectedRoute = ({ children }: any) => {
  const stateContext = useStateContext();
  const user = stateContext.state.user;

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace />
}

