type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: Readonly<ContainerProps>) {
  return (
    <div
      className={`flex flex-col max-w-7xl mx-auto min-h-screen ${className}`}
    >
      {children}
    </div>
  );
}
