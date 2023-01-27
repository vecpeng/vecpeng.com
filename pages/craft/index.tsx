import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getDemos } from "@/utils/notion-request";

interface DemoItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  slug: string;
  date: string;
  type: "video" | "image";
  fileLink: string;
}

const DemoItem: React.FC<DemoItemProps> = ({
  title,
  description,
  slug,
  date,
  type,
  fileLink,
}) => {
  return (
    <li className="list-none">
      <Link
        href={`/craft/${slug}`}
        className="group flex flex-col gap-2 rounded-2xl p-2 border border-[var(--bg-border)] bg-[var(--bg-sub)] hover:border-[var(--bg-border-strong)] hover:scale-[102%] focus:border-[var(--bg-border-strong)] focus:scale-[102%] transition ease-out duration-300 outline-none"
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="flex rounded-lg bg-[var(--bg-base)] border border-[var(--bg-border)] overflow-hidden">
          {type === "video" ? (
            <video
              className="object-cover w-full h-full rounded-lg"
              src={fileLink}
              autoPlay
              loop
              muted
            />
          ) : (
            <Image
              src={fileLink}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-full rounded-lg"
              alt={title}
            />
          )}
        </div>
        <div className="flex flex-col gap-2 py-1">
          <div className="flex gap-4 justify-between items-baseline">
            <div className="flex font-normal text-sm text-[var(--label-muted)] group-hover:text-[var(--label-title)] group-focus::text-[var(--label-title)] leading-normal break-all sm:break-words min-[688px]:w-[200px] transition ease-out duration-300">
              {title}
            </div>
            <div className="font-normal font-mono text-xs text-[var(--label-faint)] group-hover:text-[var(--label-muted)] group-focus:text-[var(--label-muted)] leading-normal transition ease-out duration-300 w-16 text-end whitespace-nowrap">
              {date.replace(/\s\d{2},/, "")}
            </div>
          </div>
          <div className="font-normal text-xs text-[var(--label-faint)] group-hover:text-[var(--label-muted)] group-focus:text-[var(--label-muted)] leading-normal transition ease-out duration-300">
            {description}
          </div>
        </div>
      </Link>
    </li>
  );
};

interface CraftProps extends React.AllHTMLAttributes<HTMLDivElement> {
  demos: any;
}
const Craft: React.FC<CraftProps> = ({ demos }) => {
  const description = `
  Craftsmanship is what makes a great idea become a great product. Here I explore the possibilities\
  of polished interfaces and delightful interactions.
  `;

  return (
    <>
      <Head>
        <title>Craft - Dott</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
          Craft
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 687: 2 }}
          className="flex flex-col gap-4"
        >
          <Masonry gutter={"16px"}>
            {demos.map((demo: any) => (
              <DemoItem
                key={demo.slug}
                title={demo.properties.craftTitle.title[0].plain_text}
                description={
                  demo.properties.craftDescription.rich_text[0].plain_text
                }
                slug={demo.properties.slug.rich_text[0].plain_text}
                date={new Date(
                  demo.properties.craftDate.date.start
                ).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
                fileLink={demo.properties.craftCover.files[0].file.url}
                type={
                  demo.properties.craftCover.files[0].file.url.includes("mp4")
                    ? "video"
                    : "image"
                }
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </>
  );
};

export default Craft;

export const getStaticProps = async () => {
  const database = await getDemos();
  return {
    props: {
      demos: database,
    },
    revalidate: 1,
  };
};
