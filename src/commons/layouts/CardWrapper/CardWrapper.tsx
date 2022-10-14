interface CardProps {
  children: JSX.Element
}

export const CardWrapper = (props: CardProps) => {
  return (
    <div className="bg-gray-700 shadow-sm rounded-lg my-6">
      {props.children}
    </div>
  );
}