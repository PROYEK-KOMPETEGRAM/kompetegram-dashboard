import { CardWrapper } from "@/commons/layouts/CardWrapper/CardWrapper";
import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { Navbar } from "@/commons/components/Navbar/Navbar";
import { Sidebar } from "@/commons/components/Sidebar/Sidebar";
import Logo from "../../commons/assets/logo-ktg.svg";
import { Table } from "../components/Table/Table";
import { MainContent } from "@/commons/layouts/MainContent/MainContent";
import { useEffect, useState } from "react";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { Button } from "../components/Button/Button";
import { TablePagination } from "../components/TablePagination/TablePagination";
import { TableDropdown } from "../components/TableDropdown/TableDropdown";
import { mockColumn, mockData } from "../mocks/data";
import { getMembersData } from "../api/members";
import { useQuery } from "@tanstack/react-query";

export const MembersPage = () => {
  const [tableAvailable, setTableAvailable] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState('');

  const query = useQuery(["members",page,limit,keyword], 
    () => getMembersData(page, limit, keyword), {
      enabled: false,
      select: (data: any) => data,
      retry: 1,
      onSuccess: (data: any) => {
        setData(data.data);
        setTableAvailable(true);
      },
      onError: (error: any) => {
        setTableAvailable(false);
      }
  })

  const getSearchKeyword = (text: string) => {
    setKeyword(text);

  }

  useEffect(() => {
    document.body.classList.add('bg-gray-900');
    query.refetch();
  },[keyword])
  
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
            <div className="flex flex-col sm:flex-row justify-between items-center p-5">
              <SearchBox onSearch={getSearchKeyword} />
              <Button/>
            </div>
          </CardWrapper>
          <CardWrapper>
            <Table 
              show={tableAvailable} 
              columns={mockColumn}
              data={data}
            />
            <div className="flex flex-col sm:flex-row justify-between items-center p-5">
              <TableDropdown/>
              <TablePagination/>
            </div>
          </CardWrapper>
        </MainContent>
      </div>
    </div>
  )
}