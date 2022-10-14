export const Button = () => {
  return (
    <button type="submit"
      className="inline-block px-6 py-3 bg-blue-500 text-white 
      font-semibold text-xs leading-tight uppercase shadow-md 
      hover:bg-blue-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg 
      transition duration-150 ease-in-out w-full font-open-sans
      rounded-lg"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      EKSPOR CSV
    </button>
  );
}