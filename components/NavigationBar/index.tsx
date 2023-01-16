import NavigationButton from "./components/NavigationButton";
import HomeIcon from "@/public/icons/home.svg"
import CraftIcon from "@/public/icons/paint.svg"
import WritingIcon from "@/public/icons/article.svg"
import FolderCloseIcon from "@/public/icons/folderClose.svg"
import FolderOpenIcon from "@/public/icons/folderOpen.svg"
import TwitterIcon from "@/public/icons/twitter.svg"
import GithubIcon from "@/public/icons/github.svg"
import MailIcon from "@/public/icons/mail.svg"
import SpotifyIcon from "@/public/icons/spotify.svg"
import ThemeDarkIcon from "@/public/icons/themeDark.svg"
import ThemeLightIcon from "@/public/icons/themeLight.svg"

const NavDivider = () => {
    return (
        <div className="flex h-10 w-px bg-gradient-to-b from-transparent dark:via-[#FFFFFF99] via-[00000099] to-transparent opacity-40"></div>
    )
}

const NavigationBar = () => {
    return (
        <footer className="flex w-screnn h-screen justify-center items-center">
            <div className="flex gap-3 p-3 bg-black rounded-[28px] border-[0.5px] border-[var(--bg-border)]">
                <NavigationButton>
                    <HomeIcon />
                </NavigationButton>
                <NavigationButton>
                    <CraftIcon />
                </NavigationButton>
                <NavigationButton>
                    <WritingIcon />
                </NavigationButton>
                <NavigationButton>
                    <FolderCloseIcon />
                </NavigationButton>
                {NavDivider()}
                <NavigationButton>
                    <TwitterIcon />
                </NavigationButton>
                <NavigationButton>
                    <GithubIcon />
                </NavigationButton>
                <NavigationButton>
                    <MailIcon />
                </NavigationButton>
                {NavDivider()}
                <NavigationButton>
                    <SpotifyIcon />
                </NavigationButton>
                <NavigationButton>
                    <ThemeDarkIcon />
                </NavigationButton>
            </div>
        </footer>
    )
};

export default NavigationBar;