import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip"

interface NavigationButtonProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    activeColor?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ children, activeColor }) => {
    const [active, setActive] = useState(false);

    return (
        <button className={`flex h-10 w-10 rounded-2xl items-center justify-center
                            ${active ? activeColor ? `bg-[var(${activeColor})]` : "bg-[var(--bg-sub)]" : "bg-[var(--bg-sub)]"}
                            border-[1.5px] ${active ? "border-[var(--bg-border-strong)]" : "border-transparent"}
                            hover:${active ? "bg-[var(--bg-shade)]" : "bg-[var(--bg-shade)]"} 
                            active:scale-90 
                            transition duration-150 ease-out`}
                onClick={() => setActive(!active)}>
            <div className={`h-6 w-6 ${active ? "text-[var(--label-title)]" : "text-[var(--label-muted)]"}`}>{children}</div>
        </button>
    )
};

export default NavigationButton;