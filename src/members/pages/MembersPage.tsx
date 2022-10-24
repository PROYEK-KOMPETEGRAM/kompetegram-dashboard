import { CardWrapper } from "@/commons/layouts/CardWrapper/CardWrapper";
import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { Table } from "../components/Table/Table";
import { useEffect, useMemo, useState } from "react";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { Button } from "../components/Button/Button";
import { TablePagination } from "../components/TablePagination/TablePagination";
import { TableDropdown } from "../components/TableDropdown/TableDropdown";
import { exportMembersData, getMembersData } from "../api/members";
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

  const columns = useMemo(
    () => [
      {
        Header: 'No',
        accessor: (_row: any, i: number) => {
          return (i + (parseInt(limit) * (page - 1) + 1));
        }
      },
      {
        Header: 'NIM',
        accessor: 'nim'
      },
      {
        Header: 'Nama',
        accessor: 'name'
      },
      {
        Header: 'Program Studi',
        accessor: 'major'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Aksi',
        accessor: 'action'
      }
    ], [limit,page]
  )

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

  const csv = useQuery(["csv"], exportMembersData, {
    enabled: false,
    select: (data: any) => data,
    retry: 1,
    onSuccess: (data: any) => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Data-Members-Batch3-${new Date().getTime()}.csv`);
      document.body.appendChild(link);
      link.click();
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

  const exportData = () => {
    csv.refetch();
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
    <>
      <DashboardHeader
        title="Daftar Anggota"
        subtitle="Rekapitulasi Pendaftar Anggota Batch 3"
      />
      <CardWrapper>
        <div className="flex flex-col sm:flex-row justify-between items-center p-5">
          <SearchBox onSearch={getSearchKeyword} />
          <Button onClick={exportData} />
        </div>
      </CardWrapper>
      <CardWrapper>
        <Table 
          show={tableAvailable} 
          columns={columns}
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
    </>
  )
}