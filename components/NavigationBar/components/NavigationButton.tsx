import React, { useEffect, useState } from "react";
import Tooltip from "@/components/UIElements/Tooltip";
import * as Popover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

interface NavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  name: string;
  shortcut: string;
  onNavButtonClick: (name: string) => void;
  isPage?: boolean;
  active?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  className,
  children,
  name,
  shortcut,
  onNavButtonClick,
  isPage = false,
  active = false,
  ...props
}) => {
  const handleClick = () => {
    onNavButtonClick(name);
  };
  const button = (
    <button
      {...props}
      className={twMerge(
        `flex h-10 w-10 rounded-2xl items-center justify-center bg-[var(--bg-sub)]\
        border-[1.5px] ${
          active ? "border-[var(--bg-border-strong)]" : "border-transparent"
        }\
        hover:bg-[var(--bg-shade)]\
        focus:border-[var(--bg-border-strong)] focus:outline-none
        active:scale-90 active:translate-y-1 transition duration-300 ease-out`,
        className
      )}
      onClick={handleClick}
    >
      <div
        className={`h-6 w-6 ${
          active ? "text-[var(--label-title)]" : "text-[var(--label-muted)]"
        }`}
      >
        {children}
      </div>
    </button>
  );

  return (
    <Tooltip content={`${name}·${shortcut}`}>
      {name === "Spotify" ? (
        <Popover.Trigger asChild>{button}</Popover.Trigger>
      ) : (
        button
      )}
    </Tooltip>
  );
};

export default NavigationButton;
