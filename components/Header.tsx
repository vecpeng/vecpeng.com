interface HeaderProps extends React.AllHTMLAttributes<HTMLDivElement> {
    
}

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <>
            <div className="fixed top-0 w-full h-16 bg-gradient-to-b from-[var(--bg-base)] to-transparent"></div>
            <div className="fixed bottom-0 w-full h-[88px] bg-gradient-to-b from-transparent to-[var(--bg-base)] "></div>
        </>
    )
}

export default Header;