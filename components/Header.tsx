interface HeaderProps extends React.AllHTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className="fixed top-0 w-full h-16 bg-[var(--bg-base)] gradient-mask-top-bottom z-20"></div>
      <div className="fixed bottom-0 w-full h-16 bg-[var(--bg-base)] backdrop-blur-xl gradient-mask-bottom-top z-20"></div>
    </>
  );
};

export default Header;
