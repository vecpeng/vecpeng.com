import React, { useEffect, useState } from "react";
import Tooltip from "@/components/UIElements/Tooltip";
import { twMerge } from 'tailwind-merge'

interface NavigationButtonProps extends React.AllHTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    name: string;
    shortcut: string;
    onNavButtonClick: (name: string) => void;
    isPage?: boolean;
    active?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ className, children, name, shortcut, onNavButtonClick, isPage=false, active=false }) => {
    const handleClick = () => {
        if (!isPage) {
            return;
        }
        onNavButtonClick(name);
    }
    
    return (
        <Tooltip content={`${name}·${shortcut}`}>
            <button className={twMerge(`flex h-10 w-10 rounded-2xl items-center justify-center bg-[var(--bg-sub)]
            border-[1.5px] ${active ? "border-[var(--bg-border-strong)]" : "border-transparent"}\
            hover:${active ? "bg-[var(--bg-shade)]" : "bg-[var(--bg-shade)]"}\
            active:scale-90\
            transition duration-150 ease-out`, className)}
            onClick={handleClick}>
                <div className={`h-6 w-6 ${active ? "text-[var(--label-title)]" : "text-[var(--label-muted)]"}`}>{children}</div>
            </button>
        </Tooltip>
    )
};

export default NavigationButton;