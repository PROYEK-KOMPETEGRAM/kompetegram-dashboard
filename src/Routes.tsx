import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./auth/pages/Login"
import { MembersPage } from "./members/pages/MembersPage"

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route index element={<MembersPage/>} />
      <Route path="/dashboard">
        <Route path="members" element={<MembersPage/>} />
      </Route>
    </Routes>
  )
}

