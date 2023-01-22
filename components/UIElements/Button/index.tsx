import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isIcon?: boolean;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  isIcon = true,
  text = null,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        `
          group flex select-none items-center justify-center h-8 gap-2 rounded-lg text-xs
          ${isIcon ? (text === null ? "px-[6px]" : "pl-2 pr-3") : "px-2"}
          bg-[var(--bg-sub)] border border-[var(--bg-border)]
          hover:cursor-pointer hover:bg-[var(--bg-shade)] hover:border-[var(--bg-border-strong)]
          focus:outline-none focus:ring-2 focus:ring-[var(--label-base)] focus:ring-offset-[var(--bg-base)] focus:ring-offset-2
          disabled:cursor-default disabled:border-[var(--bg-shade)]]
          transition-all duration-150 ease-out
          `,
        className
      )}
    >
      <div
        className={`h-4 w-4 text-[var(--label-base)] group-hover:text-[var(--label-title)] group-disabled:text-[var(--label-muted)] ${
          isIcon ? "" : "hidden"
        }`}
      >
        {children}
      </div>
      {text && (
        <span
          className={`text-[var(--label-base)] group-hover:text-[var(--label-title)] group-disabled:text-[var(--label-muted)]`}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
