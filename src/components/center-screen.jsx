export default function CenterScreen({ children, className }) {
  return (
    <div className={"grid place-items-center h-screen " + className}>
      {children}
    </div>
  );
}
