interface StatsProps {
  title?: string
  value?: string | number 
  children?: JSX.Element
}

export const Stats = (props: StatsProps) => {
  return (
    <div className="mx-4 my-4">
      <p className="font-open-sans text-gray-300 font-regular text-sm my-1 uppercase">
        {props.title}
      </p>
      <div className="flex flex-row content-center items-center">
        {props.children}
        <p className="font-open-sans text-white font-bold text-2xl sm:text-3xl my-1 mx-2.5">
          {props.value}
        </p>
      </div>
    </div>
  );
}