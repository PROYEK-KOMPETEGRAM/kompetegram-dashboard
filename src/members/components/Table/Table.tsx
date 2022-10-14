export const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
            <table className="min-w-full text-left">
              <thead className="border-b border-black bg-gray-800">
                <tr>
                  <th scope="col" className="text-sm font-open-sans font-semibold text-gray-300 px-6 py-4 uppercase">
                    NO
                  </th>
                  <th scope="col" className="text-sm font-open-sans font-semibold text-gray-300 px-6 py-4 uppercase">
                    NAMA
                  </th>
                  <th scope="col" className="text-sm font-open-sans font-semibold text-gray-300 px-6 py-4 uppercase">
                    NIM
                  </th>
                  <th scope="col" className="text-sm font-open-sans font-semibold text-gray-300 px-6 py-4 uppercase">
                    PROGRAM STUDI
                  </th>
                  <th scope="col" className="text-sm font-open-sans font-semibold text-gray-300 px-6 py-4 uppercase">
                    STATUS
                  </th>
                  <th scope="col" className="text-sm font-open-sans font-semibold text-gray-300 px-6 py-4 uppercase">
                    AKSI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700 border-b border-black">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-50">1</td>
                  <td className="text-sm text-gray-50 font-open-sans font-medium px-6 py-4 whitespace-nowrap uppercase">
                    Mark
                  </td>
                  <td className="text-sm text-gray-50 font-light px-6 py-4 whitespace-nowrap uppercase">
                    Otto
                  </td>
                  <td className="text-sm text-gray-50 font-light px-6 py-4 whitespace-nowrap uppercase">
                    @mdo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}