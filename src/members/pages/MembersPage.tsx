import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { Navbar } from "@/commons/components/Navbar/Navbar";
import { Sidebar } from "@/commons/components/Sidebar/Sidebar";
import Logo from "../../commons/assets/logo.png";

export const MembersPage = () => {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-5">
      <Sidebar>
        <div className="px-8 py-3">
          <img src={Logo} alt="logo-kompetegram" />
        </div>
      </Sidebar>
      <div className="bg-gray-50 md:col-span-3 lg:col-span-4">
        <Navbar/>
        <div className="px-8 py-8">
          <DashboardHeader/>
        </div>
      </div>
    </div>
  )
}