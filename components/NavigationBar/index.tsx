import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Popover from "@radix-ui/react-popover";
import NavigationButton from "./components/NavigationButton";
import SpotifyCard from "./components/SpotifyCard";
import { getCurrentPlayingTrack } from "@/utils/request";
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
import MusicOneIcon from "@/public/icons/musicOne.svg"
import MusicTwoIcon from "@/public/icons/musicTwo.svg"

const NavDivider = () => {
    return (
        <div className="flex h-10 w-px diveder-background opacity-60"></div>
    )
}

const NavigationBar = () => {
    
    // Page Navigation
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isCraftActive, setIsCraftActive] = useState(false);
    const [isWritingActive, setIsWritingActive] = useState(false);
    const [isProjectsActive, setIsProjectsActive] = useState(false);
    const handleNavigation = (name: string) => {
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
        } else {
            console.log("Invalid navigation name.")
        }
    }

    // Social
    const handleSocialLink = (name: string) => {
        if (name === "Twitter") {
            window.open("https://twitter.com/dottchen", "_blank");
        } else if (name === "Github") {
            window.open("https://github.com/dottchen", "_blank");
        } else if (name === "Mail") {
            window.open("mailto:contact@dott.love", "_blank");
        } else {
            console.log("Invalid social link name.")
        }
    }
    
    // Spotify
    const [isSpotifyPlaying, setIsSpotifyPlaying] = useState(false);
    const [imgLink, setImgLink] = useState("");
    const [trackName, setTrackName] = useState("");
    const [trackLink, setTrackLink] = useState("");
    const [artistName, setArtistName] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Spotify API called.")
            updateSpotifyStatus()
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    const updateSpotifyStatus = async () => {
        const res = await getCurrentPlayingTrack();
        if (res.is_playing) {
            setIsSpotifyPlaying(true);
            setImgLink(res.item.album.images[0].url);
            setTrackName(res.item.name);
            setTrackLink(res.item.external_urls.spotify);
            setArtistName(res.item.artists[0].name);
        } else {
            setIsSpotifyPlaying(false);
            setImgLink("");
            setTrackName("");
            setTrackLink("");
            setArtistName("");
        }
    }
    
    // Theme
    const { theme, setTheme } = useTheme();
    const handleThemeSwitch = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
        console.log("Theme set to: " + `${theme === "dark" ? "light" : "dark"}`)
    }


    return (
        <footer className="fixed flex w-full h-full items-center justify-center z-10">
            <ScrollArea.Root type="scroll" scrollHideDelay={600} className="flex-1 mx-4 max-w-[456px] min-[560px]:max-w-[512px] h-16 select-none blur-background rounded-[28px] border-[0.5px] border-[var(--bg-border)] overflow-hidden">
                <ScrollArea.Viewport>
                    <div className="flex gap-3 p-3">
                        <NavigationButton name="Home" shortcut="1" isPage={true} active={isHomeActive} className={`${isHomeActive ? "home-background" : ""}`} onNavButtonClick={handleNavigation}>
                            <HomeIcon />
                        </NavigationButton>
                        <NavigationButton name="Craft" shortcut="2" isPage={true} active={isCraftActive} className={`${isCraftActive ? "craft-background" : ""}`} onNavButtonClick={handleNavigation}>
                            <CraftIcon />
                        </NavigationButton>
                        <NavigationButton name="Writing" shortcut="3" isPage={true} active={isWritingActive} className={`${isWritingActive ? "writing-background" : ""}`} onNavButtonClick={handleNavigation}>
                            <WritingIcon />
                        </NavigationButton>
                        <NavigationButton name="Projects" shortcut="4" isPage={true} active={isProjectsActive} className={`${isProjectsActive ? "projects-background" : ""}`} onNavButtonClick={handleNavigation}>
                            {isProjectsActive ? <FolderOpenIcon /> : <FolderCloseIcon />}
                        </NavigationButton>
                        {NavDivider()}
                        <NavigationButton name="Twitter" shortcut="5" onNavButtonClick={handleSocialLink}>
                            <TwitterIcon />
                        </NavigationButton>
                        <NavigationButton name="Github" shortcut="6" onNavButtonClick={handleSocialLink}>
                            <GithubIcon />
                        </NavigationButton>
                        <NavigationButton name="Mail" shortcut="7" onNavButtonClick={handleSocialLink}>
                            <MailIcon />
                        </NavigationButton>
                        {NavDivider()}
                        <Popover.Root modal={true}>
                            <NavigationButton className="max-[559px]:hidden" name="Spotify" shortcut="8" onNavButtonClick={() => {}}>
                                <SpotifyIcon className={`${isSpotifyPlaying ? "text-[var(--spotify)]" : ""}`} />
                            </NavigationButton>
                            <Popover.Portal>
                                <Popover.Content onFocusOutside={event => {event.preventDefault()}} className="mx-4 max-[559px]:hidden radix-state-closed:animate-fade-out-long radix-state-open:animate-fade-in radix-state-open:animate-scale-in" sideOffset={24} side="top">
                                    {isSpotifyPlaying ? <SpotifyCard isPlaying={true} imgLink={imgLink} trackLink={trackLink} trackName={trackName} artistName={artistName} /> : <SpotifyCard isPlaying={false}/>}
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>
                        <NavigationButton name="Theme" shortcut="9" onNavButtonClick={handleThemeSwitch}>
                            {theme === "dark" ? <ThemeDarkIcon /> : <ThemeLightIcon />}
                        </NavigationButton>
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="horizontal" className="flex mx-6 h-[6px] active:h-[12px] radix-state-visible:animate-fade-in radix-state-hidden:animate-fade-out">
                    <ScrollArea.Thumb className="bg-[var(--label-base)] rounded-full opacity-40"/>
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            {isSpotifyPlaying ? (
                    <div className="relative right-[92px] -top-6 h-0 w-0 invisible min-[560px]:visible">
                        <MusicOneIcon className="absolute top-2 right-2 h-2 w-2 text-[var(--spotify)] animate-music-play-1 opacity-0"/>
                        <MusicTwoIcon className="absolute top-2 right-2 h-2 w-2 text-[var(--spotify)] animate-music-play-2  opacity-0 animation-delay-300"/>
                        <MusicOneIcon className="absolute top-2 right-2 h-2 w-2 text-[var(--spotify)] animate-music-play-3  opacity-0 animation-delay-600"/>
                        <MusicTwoIcon className="absolute top-2 right-2 h-2 w-2 text-[var(--spotify)] animate-music-play-4  opacity-0 animation-delay-900"/>
                        <MusicOneIcon className="absolute top-2 right-2 h-2 w-2 text-[var(--spotify)] animate-music-play-5  opacity-0 animation-delay-1200"/>
                        <MusicTwoIcon className="absolute top-2 right-2 h-2 w-2 text-[var(--spotify)] animate-music-play-6  opacity-0 animation-delay-1500"/>
                    </div>
                ) : null}
        </footer>
    )
};

export default NavigationBar;