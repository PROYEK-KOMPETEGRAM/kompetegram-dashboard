import { DropdownProps } from "@/members/ts/interface";
import { useRef } from "react";

const rowSize: number[] = [10,25,50];

export const TableDropdown = (props: DropdownProps) => {
  const rowSizeRef = useRef<HTMLSelectElement>(null);

  const handleChange = () => {
    if (rowSizeRef.current) {
      const size = rowSizeRef.current.value;
      props.onChange(size);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-28">
        <select className="appearance-none text-sm
            block w-full px-3 py-3 text-white font-normal
            bg-gray-800 bg-clip-padding bg-no-repeat border border-solid 
            border-gray-700 rounded transition ease-in-out focus:text-gray-50 
            focus:bg-gray-800 focus:border-blue-400 focus:outline-none" 
          aria-label="Default select example"
          ref={rowSizeRef}
          onChange={handleChange}
        >
            {rowSize.map((item) => (
              <option value={item} selected>{item} Data</option>
            ))}
        </select>
      </div>
    </div>
  );
}