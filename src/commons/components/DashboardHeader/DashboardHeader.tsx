interface DashboardProps {
  title?: string 
  subtitle?: string
}

export const DashboardHeader = (props: DashboardProps) => {
  return (
    <div className="container">
      <h1 className="font-open-sans text-white text-3xl font-medium my-1">
        {props.title}
      </h1>
      <h3 className="font-open-sans text-blue-400 text-md font-regular">
        {props.subtitle}
      </h3>
    </div>
  );
}