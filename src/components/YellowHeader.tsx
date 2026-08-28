export const YellowHeader = ({
  children,
  size = 4,
}: {
  children: React.ReactNode;
  size?: number;
}) => (
  <div
    className={`text-${size}xl text-yellow-300 text-center leading-snug tracking-wide`}
  >
    {children}
  </div>
);
