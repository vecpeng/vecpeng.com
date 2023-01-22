import { twMerge } from "tailwind-merge";

interface DividerProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        `h-px w-full my-2 bg-[var(--bg-border)] rounded-full`,
        className
      )}
    />
  );
};

export default Divider;
