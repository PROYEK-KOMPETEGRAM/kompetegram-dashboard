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

interface ColumnTable {
  Header: string 
  accessor: string
}

export type {
  TableProps,
  DataTable,
  ColumnTable
}