export const TableDropdown = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-28">
        <select className="appearance-none text-sm
          block w-full px-3 py-3 text-white font-normal
          bg-gray-800 bg-clip-padding bg-no-repeat border border-solid 
          border-gray-700 rounded transition ease-in-out focus:text-gray-50 
          focus:bg-gray-800 focus:border-blue-400 focus:outline-none" 
          aria-label="Default select example">
            <option value="10" selected>10 Data</option>
            <option value="25">25 Data</option>
            <option value="50">50 Data</option>
        </select>
      </div>
    </div>
  );
}