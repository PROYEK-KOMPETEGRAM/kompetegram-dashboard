export const Spinner = (props: { children?: JSX.Element}) => {
  return (
    <div className="flex flex-col justify-center items-center 
      h-screen space-x-2"
    >
      {props.children}
      <div 
        className="spinner-border animate-spin inline-block 
          w-8 h-8 sm:w-12 sm:h-12 border-4 rounded-full 
          text-white" 
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}