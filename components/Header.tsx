interface HeaderProps extends React.AllHTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className="fixed top-0 w-full h-16 bg-[var(--bg-base)] gradient-mask-top-bottom z-10"></div>
      <div className="fixed bottom-0 w-full h-[88px] bg-[var(--bg-base)] backdrop-blur-xl gradient-mask-bottom-top z-10"></div>
    </>
  );
};

export default Header;
