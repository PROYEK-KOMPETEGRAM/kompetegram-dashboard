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
  const [tableAvailable, setTableAvailable] = useState(false);
  const [resetPagination, setResetPagination] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState('10');
  const [keyword, setKeyword] = useState('');
  const [dataSize, setDataSize] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const query = useQuery(["members",page,limit,keyword], 
    () => getMembersData(page, limit, keyword), {
      enabled: false,
      select: (data: any) => data,
      retry: 1,
      onSuccess: (data: any) => {
        setData(data.data);
        setTableAvailable(true);
        setDataSize(data.meta.totalItems);
      },
      onError: (error: any) => {
        setTableAvailable(false);
      }
  })

  const getSearchKeyword = (text: string) => {
    setKeyword(text);
  }

  const getRowSize = (size: string) => {
    setLimit(size);
  }

  const getPagination = (position: number) => {
    setPage(position);
  }

  const getLastPage = (size: any, limit: any) => {
    const last = Math.ceil(size / limit);
    setLastPage(last);
  }

  /**
   * This useEffect run to refetch data
   * after searching, changing row size, and changing page
   * Then also get the last page properties from response API
   */
  useEffect(() => {
    document.body.classList.add('bg-gray-900');
    query.refetch();
    getLastPage(dataSize, limit);
  },[keyword,limit,page]);

  /**
   * This useEffect only trigger after changing row size and searching
   * So that, it will keep update the value (boolean)
   * and send props to TabelPagination
   */
  useEffect(() => {
    setResetPagination(!resetPagination);
  }, [keyword,limit])

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
              <TableDropdown onChange={getRowSize} rowSize={dataSize} />
              <TablePagination 
                onClick={getPagination} 
                lastPage={lastPage}
                reset={resetPagination} 
              />
            </div>
          </CardWrapper>
        </MainContent>
      </div>
    </div>
  )
}