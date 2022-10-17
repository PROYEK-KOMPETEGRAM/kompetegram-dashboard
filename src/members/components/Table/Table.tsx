import { TableProps } from "@/members/ts/interface";
import { useTable } from "react-table";

export const Table = ({ show, columns, data }: TableProps) => {
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,
    rows, 
    prepareRow 
  } = useTable({ 
      columns, 
      data 
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
            <table {...getTableProps()} className="min-w-full text-left">
              <thead className="border-b border-black bg-gray-800">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th 
                        {...column.getHeaderProps()}
                        scope="col" 
                        className="text-sm font-open-sans font-semibold text-gray-300 
                          px-6 py-4 uppercase"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              {show && (
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} 
                        className="bg-gray-700 border-b border-black"
                      >
                        {row.cells.map((cell) => (
                          <td 
                            {...cell.getCellProps()}
                            className="text-sm text-gray-50 font-open-sans font-medium px-6 
                              py-4 whitespace-nowrap uppercase"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              )}
            </table>
            {!show && (
              <div className="flex flex-col w-full justify-center items-center content-center py-6">
                <p className="font-open-sans font-regular text-white text-sm uppercase">
                  Data tidak tersedia
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}