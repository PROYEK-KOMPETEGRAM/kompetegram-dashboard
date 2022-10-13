interface ErrorProps {
  title: string | undefined
}

export const Error = (props: ErrorProps) => {
  return (
    <div className="text-left font-open-sans text-red-500
      text-sm pt-2">
      <p>{props.title}</p>
    </div>
  );
}