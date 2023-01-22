import * as TooltipUI from "@radix-ui/react-tooltip";
import React, { Children } from "react";
import CommandIcon from "@/public/icons/command.svg";

interface TooltipProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, ...props }) => {
  const name = content.split("·")[0];
  const shortcut = content.split("·")[1];

  return (
    <TooltipUI.Root {...props}>
      <TooltipUI.Trigger asChild>{children}</TooltipUI.Trigger>
      <TooltipUI.Portal>
        <TooltipUI.Content
          className="flex mx-6 px-3 py-2 gap-2 items-center font-normal text-xs text-[var(--label-muted)] bg-[var(--bg-base)] border border-[var(--bg-border)] rounded-lg shadow-sm
                duration-300 ease-out transition select-none z-30 radix-state-closed:animate-fade-out radix-state-delayed-open:animate-fade-in radix-state-instant-open:animate-fade-in-short"
          sideOffset={20}
        >
          <span>{name}</span>
          <span className="text-[var(--label-faint)]">·</span>
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center justify-center h-5 w-5 bg-[var(--bg-shade)] rounded">
              <CommandIcon className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-center h-5 w-5 bg-[var(--bg-shade)] rounded">
              ⌥
            </div>
            <div className="flex items-center justify-center h-5 px-[6px] bg-[var(--bg-shade)] rounded">
              {shortcut}
            </div>
          </div>
        </TooltipUI.Content>
      </TooltipUI.Portal>
    </TooltipUI.Root>
  );
};

export default Tooltip;
