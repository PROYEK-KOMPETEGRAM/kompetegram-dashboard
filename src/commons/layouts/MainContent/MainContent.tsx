interface MainContentProps {
  children: JSX.Element | JSX.Element[]
}

export const MainContent = (props: MainContentProps) => {
  return (
    <div className="px-8 py-8 min-h-screen bg-gray-900 mt-20 md:mt-0">
      {props.children}
    </div>
  );
}