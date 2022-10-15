import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "./auth/pages/Login"
import { useStateContext } from "./commons/context/provider"
import { MembersPage } from "./members/pages/MembersPage"

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route index element={<LoginPage/>} />
      <Route path="/dashboard">
        <Route 
          path="members" 
          element={<ProtectedRoute children={
            <MembersPage/>
          }/>} 
        />
      </Route>
    </Routes>
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

