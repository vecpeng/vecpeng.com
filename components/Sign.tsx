import Image from "next/image";
import TwitterIcon from "@/public/icons/twitter.svg";

const Sign = () => {
  return (
    <div>
      <div className="flex h-10 w-full border border-[var(--bg-border)] shadow-sm backdrop-blur-lg rounded-lg mt-6 z-10">
        <div className="my-2 mx-3 h-12 w-12">
          <Image
            src="/images/portrait.png"
            alt="Home"
            priority
            height={48}
            width={48}
            layout={"fixed"}
            className="rounded-full"
          />
        </div>
        <div className="sign-content">
          <div className="name">
            <div className="font-semibold text-[var(--label-base)] h-4 items-center mr-1">
              Dott
            </div>
            <a
              onClick={() => {
                window.location.href = "https://twitter.com/DottChen";
              }}
              href="https://twitter.com/DottChen"
              className=""
            >
              <TwitterIcon className="h-4 w-4 text-[var(--label-faint)]" />
            </a>
          </div>
          <div className="font-normal text-xs text-[var(--label-muted)]">
            Thanks for reading.
          </div>
        </div>
      </div>
      <div className="relative -top-12 left-10 right-10 z-0 m-0 w-10/12 h-10 bg-[radial-gradient(50% 50% at 50% 50%, rgbg(50, 175, 105, 0.6) 0%, rgba(50, 175, 105, 0) 100%)]" />
    </div>
  );
};

export default Sign;
