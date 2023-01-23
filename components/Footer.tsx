import Link from "next/link";
import Divider from "./UIElements/Divider";
import Button from "./UIElements/Button";
import RssIcon from "../public/icons/rss.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-6 mt-40">
      <Divider />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[var(--label-muted)]">
          <Link
            href="https://twitter.com/dottchen"
            className="hover:decoration-[var(--label-muted)] hover:text-[var(--label-title)] underline underline-offset-2 decoration-[var(--label-faint)] duration-150 ease-out transition"
          >
            Twitter
          </Link>
          <span className="cursor-default">·</span>
          <Link
            href="https://github.com/dottchen"
            className="hover:decoration-[var(--label-muted)] hover:text-[var(--label-title)] underline underline-offset-2 decoration-[var(--label-faint)] duration-150 ease-out transition"
          >
            GitHub
          </Link>
          <span className="cursor-default">·</span>
          <Link
            href="mailto:contact@dott.love"
            className="hover:decoration-[var(--label-muted)] hover:text-[var(--label-title)] underline underline-offset-2 decoration-[var(--label-faint)] duration-150 ease-out transition"
          >
            Email
          </Link>
        </div>
        <Button
          className=""
          text="Subscribe"
          onClick={() => {
            window.open("https://dott.love/rss.xml");
          }}
        >
          <RssIcon />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
