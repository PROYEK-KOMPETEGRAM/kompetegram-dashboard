import { ColumnTable, DataTable } from "../ts/interface";

const mockData: DataTable[] = [
  {
    _id: "63480aaa88eww2bef54e606",
    status: "Verified",
    name: "Admin Kompetegram",
    nim: "2200000",
    major: "Rekayasa Perangkat Lunak",
    __v: 0
  }
];

const mockColumn: ColumnTable[] = [
  {
    Header: 'No',
    accessor: (_row: any, i : number) => i + 1
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
];

export {
  mockData,
  mockColumn
}

