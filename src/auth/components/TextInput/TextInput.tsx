import { forwardRef } from "react";

interface TextInputProps {
  type: string 
  placeholder: string
  showError: any 
}

export const TextInput = forwardRef<HTMLInputElement,TextInputProps>((
  { type, placeholder, showError, ...props}, ref) => {
    return (
      <input 
        type={type}
        placeholder={placeholder} 
        className={`block w-full px-3 py-1.5 font-open-sans 
        text-base text-normal text-gray-700 bg-white 
        bg-clip-padding border rounded mt-6
        transition ease-in-out m-0 focus:text-gray-700 
        focus:bg-white focus:outline-none
        ${showError == null ? "border-gray-300 focus:border-gray-600" : 
        "border-red-500 focus:border-red-600"}`} 
        ref={ref}
        {...props}
      />
    );
})
