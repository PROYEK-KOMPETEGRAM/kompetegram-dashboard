import { BaseResponse } from "@/commons/ts/interface"

interface TableProps {
  show: boolean
  columns: any 
  data: any
}

interface DataTable {
  _id: string 
  status: string 
  name: string 
  nim: string 
  major: string 
  __v: number
}

interface MembersResponse extends BaseResponse {
  data: DataTable[]
}

interface ColumnTable {
  Header: string 
  accessor: string | any
}

interface SearchProps {
  onSearch: (keyword: string) => void
}

export type {
  TableProps,
  DataTable,
  ColumnTable,
  MembersResponse,
  SearchProps
}