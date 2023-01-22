import Image from "next/image";
import RedirectIcon from "@/public/icons/redirect.svg";
import SpotifyIcon from "@/public/icons/spotify.svg";

interface SpotifyCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  isPlaying: boolean;
  imgLink?: string;
  artistName?: string;
  trackName?: string;
  trackLink?: string;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({
  isPlaying,
  imgLink,
  artistName,
  trackName,
  trackLink,
}) => {
  const handleOpenLink = () => {
    if (!trackLink) return;
    window.open(trackLink, "_blank");
  };

  return (
    <>
      <button
        onClick={handleOpenLink}
        className="flex w-80 h-full bg-[var(--bg-base)] border border-[var(--bg-border)] rounded-[20px] z-20 shadow-lg p-3 gap-4 focus:outline-none active:scale-90 transition duration-150 ease-out overflow-hidden"
      >
        <div className="flex relative h-20 w-20 bg-[var(--bg-shade)] items-center justify-center overflow-hidden rounded-lg border border-[var(--bg-shade)]">
          {isPlaying && imgLink ? (
            <Image
              src={imgLink}
              alt="Spotify Track Image"
              height={80}
              width={80}
              sizes="25vw"
            />
          ) : (
            <SpotifyIcon className="h-12 w-12 text-[var(--label-faint)]" />
          )}
        </div>
        <div
          className={`flex flex-1 flex-col ${isPlaying ? "gap-4" : "gap-8"}`}
        >
          <div className={`flex justify-end`}>
            <SpotifyIcon className="h-5 w-5 text-[var(--label-faint)]" />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="text-xs font-normal text-start text-[var(--label-muted)] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              {artistName}
            </div>
            <div className="flex gap-1 items-end">
              <div className="text-base font-semibold text-start text-[var(--label-title)] max-w-[172px]">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {isPlaying ? trackName : "Not Playing..."}
                </div>
              </div>
              <div
                className={`flex h-6 w-6 items-center justify-center text-[var(--label-muted)] rounded-lg ${
                  isPlaying ? "" : "hidden"
                }`}
              >
                <RedirectIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default SpotifyCard;
