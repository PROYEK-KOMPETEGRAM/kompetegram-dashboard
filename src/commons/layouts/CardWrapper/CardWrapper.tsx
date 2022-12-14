interface CardProps {
  children: JSX.Element | JSX.Element[]
  style?: string
}

export const CardWrapper = (props: CardProps) => {
  return (
    <div className={"bg-gray-700 shadow-sm rounded-lg my-8 sm:my-6" + props.style}>
      {props.children}
    </div>
  );
}