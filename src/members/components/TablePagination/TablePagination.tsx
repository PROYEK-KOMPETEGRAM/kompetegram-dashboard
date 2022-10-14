export const TablePagination = () => {
  return (
    <div className="flex justify-center mt-4 sm:mt-0">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <a
              className="page-link relative font-open-sans block py-1.5 px-3 border-0 
              bg-transparent outline-none transition-all duration-300 text-gray-50 
              pointer-events-none focus:shadow-none"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative font-open-sans block rounded-md py-1.5 px-3 
              border-0 bg-transparent outline-none transition-all duration-300 text-gray-50 
              hover:text-gray-800 hover:bg-blue-100 focus:shadow-none"
              href="#"
            >
              1
            </a>
          </li>
          <li className="page-item active">
            <a
              className="page-link relative font-open-sans block rounded-md py-1.5 px-3 
              border-0 bg-blue-500 outline-none transition-all duration-300 text-white 
              hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="#"
            >
              2 <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative font-open-sans block rounded-md py-1.5 px-3 
              border-0 bg-transparent outline-none transition-all duration-300 text-gray-50 
              hover:text-gray-800 hover:bg-blue-100 focus:shadow-none"
              href="#"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative font-open-sans block rounded-md py-1.5 px-3 
              border-0 bg-transparent outline-none transition-all duration-300 text-gray-50 
              hover:text-gray-800 hover:bg-blue-100 focus:shadow-none"
              href="#"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
