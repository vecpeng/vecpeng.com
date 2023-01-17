import React, { useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import NavigationButton from "./components/NavigationButton";
import HomeIcon from "@/public/icons/home.svg";
import CraftIcon from "@/public/icons/paint.svg";
import WritingIcon from "@/public/icons/article.svg";
import FolderCloseIcon from "@/public/icons/folderClose.svg";
import FolderOpenIcon from "@/public/icons/folderOpen.svg";
import TwitterIcon from "@/public/icons/twitter.svg";
import GithubIcon from "@/public/icons/github.svg";
import MailIcon from "@/public/icons/mail.svg";
import SpotifyIcon from "@/public/icons/spotify.svg";
import ThemeDarkIcon from "@/public/icons/themeDark.svg";
import ThemeLightIcon from "@/public/icons/themeLight.svg";

const NavDivider = () => {
    return (
        <div className="flex h-10 w-px bg-gradient-to-b from-transparent dark:via-[#FFFFFF99] via-[00000099] to-transparent opacity-40"></div>
    )
}

const NavigationBar = () => {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isCraftActive, setIsCraftActive] = useState(false);
    const [isWritingActive, setIsWritingActive] = useState(false);
    const [isProjectsActive, setIsProjectsActive] = useState(false);
    const handleButtonClick = (name: string) => {
        if (name === "Home") {
            setIsHomeActive(true);
            setIsCraftActive(false);
            setIsWritingActive(false);
            setIsProjectsActive(false);
        } else if (name === "Craft") {
            setIsHomeActive(false);
            setIsCraftActive(true);
            setIsWritingActive(false);
            setIsProjectsActive(false);
        } else if (name === "Writing") {
            setIsHomeActive(false);
            setIsCraftActive(false);
            setIsWritingActive(true);
            setIsProjectsActive(false);
        } else if (name === "Projects") {
            setIsHomeActive(false);
            setIsCraftActive(false);
            setIsWritingActive(false);
            setIsProjectsActive(true);
        }
    }

    return (
        <footer className="fixed flex w-full h-full items-center justify-center z-20">
            <ScrollArea.Root type="scroll" scrollHideDelay={600} className="flex-1 mx-4 max-w-lg h-16 select-none blur-background rounded-[28px] border-[0.5px] border-[var(--bg-border)] overflow-hidden">
                <ScrollArea.Viewport>
                    <div className="flex gap-3 p-3 " >
                        <NavigationButton name="Home" shortcut="1" isPage={true} active={isHomeActive} className={`${isHomeActive ? "home-background" : ""}`} onNavButtonClick={handleButtonClick}>
                            <HomeIcon />
                        </NavigationButton>
                        <NavigationButton name="Craft" shortcut="2" isPage={true} active={isCraftActive} className={`${isCraftActive ? "craft-background" : ""}`} onNavButtonClick={handleButtonClick}>
                            <CraftIcon />
                        </NavigationButton>
                        <NavigationButton name="Writing" shortcut="3" isPage={true} active={isWritingActive} className={`${isWritingActive ? "writing-background" : ""}`} onNavButtonClick={handleButtonClick}>
                            <WritingIcon />
                        </NavigationButton>
                        <NavigationButton name="Projects" shortcut="4" isPage={true} active={isProjectsActive} className={`${isProjectsActive ? "projects-background" : ""}`} onNavButtonClick={handleButtonClick}>
                            {isProjectsActive ? <FolderOpenIcon /> : <FolderCloseIcon />}
                        </NavigationButton>
                        {NavDivider()}
                        <NavigationButton name="Twitter" shortcut="5" onNavButtonClick={handleButtonClick}>
                            <TwitterIcon />
                        </NavigationButton>
                        <NavigationButton name="Github" shortcut="6" onNavButtonClick={handleButtonClick}>
                            <GithubIcon />
                        </NavigationButton>
                        <NavigationButton name="Mail" shortcut="7" onNavButtonClick={handleButtonClick}>
                            <MailIcon />
                        </NavigationButton>
                        {NavDivider()}
                        <NavigationButton name="Spotify" shortcut="8" onNavButtonClick={handleButtonClick}>
                            <SpotifyIcon />
                        </NavigationButton>
                        <NavigationButton name="Theme" shortcut="9" onNavButtonClick={handleButtonClick}>
                            <ThemeDarkIcon />
                        </NavigationButton>
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="horizontal" className="flex mx-6 h-[6px] active:h-[12px] transition duration-300 ease-out">
                    <ScrollArea.Thumb className="bg-[var(--label-faint)] rounded-full opacity-60"/>
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </footer>
    )
};

export default NavigationBar;