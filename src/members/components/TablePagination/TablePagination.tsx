import { ArrowButtonProps, TablePaginationProps } from "@/members/ts/interface";
import { useEffect, useState } from "react";

export const TablePagination = (props: TablePaginationProps) => {
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const reducePage = () => {
    props.onClick(currentPage - 1);
    setCurrentPage(currentPage - 1);
  }

  const increasePage = () => {
    props.onClick(currentPage + 1);
    setCurrentPage(currentPage + 1);
  } 

  /**
   * This useEffect will trigger everytime currentPage is changing
   * If current page is last page, disable next button
   * If current page is first page, disable previous button
   */
  useEffect(() => {
    setNext(true);
    setPrev(true);
    
    if (currentPage == props.lastPage) {
      setNext(false);
    }

    if (currentPage == 1) {
      setPrev(false);
    }
  }, [currentPage])

  /**
   * This useEffect will trigger everytime reset props value is changing
   * So that, changing row size will reset current number to 1
   * and also send an API to page 1
   */
  useEffect(() => {
    setCurrentPage(1);
    props.onClick(1);
  }, [props.reset])

  return (
    <div className="flex justify-center mt-4 sm:mt-0">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <ArrowButton enable={prev} onClick={reducePage} >
            <span aria-hidden="true">&laquo;</span>
          </ArrowButton>
          <li className="page-item active">
            <a
              className="page-link relative font-open-sans block rounded-md py-1.5 px-3 
              border-0 bg-blue-500 outline-none transition-all duration-300 text-white 
              hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md mx-2"
            >
              {currentPage}<span className="visually-hidden">(current)</span>
            </a>
          </li>
          <ArrowButton enable={next} onClick={increasePage} >
            <span aria-hidden="true">&raquo;</span>
          </ArrowButton>
        </ul>
      </nav>
    </div>
  );
};

const ArrowButton = (props: ArrowButtonProps) => {
  const style = props.enable ? "hover:text-gray-800 hover:bg-blue-100" : "pointer-events-none";

  const handleClick = () => {
    props.onClick();
  }

  return (
    <li className={`page-item ${props.enable ? '' : 'disabled'}`}>
      <div
        className={"page-link relative font-open-sans block rounded-md py-1.5 px-3 " + 
        "border-0 bg-transparent outline-none transition-all duration-300 text-gray-50 " + 
        "focus:shadow-none cursor-pointer " + style}
        onClick={handleClick}
      >
        {props.children}
      </div>
    </li>
  );
}
