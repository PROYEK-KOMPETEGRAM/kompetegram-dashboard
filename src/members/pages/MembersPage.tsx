import { CardWrapper } from "@/commons/layouts/CardWrapper/CardWrapper";
import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { Navbar } from "@/commons/components/Navbar/Navbar";
import { Sidebar } from "@/commons/components/Sidebar/Sidebar";
import Logo from "../../commons/assets/logo-ktg.svg";
import { Table } from "../components/Table/Table";
import { MainContent } from "@/commons/layouts/MainContent/MainContent";
import { useEffect } from "react";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { Button } from "../components/Button/Button";

export const MembersPage = () => {
  useEffect(() => {
    document.body.classList.add('bg-gray-900');
  },[])
  
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-5">
      <Sidebar>
        <div className="px-8 py-3">
          <img src={Logo} alt="logo-kompetegram" />
        </div>
      </Sidebar>
      <div className="md:col-span-3 lg:col-span-4 overflow-x-auto md:overflow-x-visible">
        <Navbar/>
        <MainContent>
          <DashboardHeader/>
          <CardWrapper>
            <div className="flex flex-row justify-between items-center p-5">
              <h1 className="text-white">
                <SearchBox/>
              </h1>
              <h1 className="text-white">
                <Button/>
              </h1>
            </div>
          </CardWrapper>
          <CardWrapper>
            <Table/>
          </CardWrapper>
        </MainContent>
      </div>
    </div>
  )
}