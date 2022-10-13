interface ButtonProps {
  title: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      className="inline-block px-6 py-4 mt-4 bg-gray-700 text-white 
      font-semibold text-xs leading-tight uppercase shadow-md 
      hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg 
      transition duration-150 ease-in-out w-full font-open-sans"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      {props.title}
    </button>
  );
}