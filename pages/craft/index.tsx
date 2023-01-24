import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
        href={slug}
        className="group flex flex-col gap-2 rounded-2xl p-2 border border-[var(--bg-border)] bg-[var(--bg-sub)] hover:border-[var(--bg-border-strong)] hover:scale-[102%] transition ease-out duration-300"
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
            <div className="flex font-normal text-sm text-[var(--label-muted)] group-hover:text-[var(--label-title)] leading-normal break-all sm:break-words min-[688px]:w-[200px] transition ease-out duration-300">
              {title}
            </div>
            <div className="font-normal font-mono text-xs text-[var(--label-faint)] group-hover:text-[var(--label-muted)] leading-normal transition ease-out duration-300 w-16 text-end whitespace-nowrap">
              {date}
            </div>
          </div>
          <div className="font-normal text-xs text-[var(--label-faint)] group-hover:text-[var(--label-muted)] leading-normal transition ease-out duration-300">
            {description}
          </div>
        </div>
      </Link>
    </li>
  );
};

const Craft = () => {
  const title = "Craft";
  const description = `
  Craftsmanship is what makes a great idea become a great product. Here I explore the possibilities\
  of polished interfaces and delightful interactions.
  `;

  return (
    <>
      <Head>
        <title>{title} - Dott</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
          {title}
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 687: 2 }}
          className="flex flex-col gap-4"
        >
          <Masonry gutter={"16px"}>
            {/* <DemoItem
              title="1DottDott DottDottDottDottDottDottDottDottDott"
              description="A personal website built with Next.js and Tailwind CSS."
              slug="/craft/dott"
              date="Jan 2022"
              type="video"
              fileLink="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1d9ad58-32d6-4f4f-b4a6-c9afae50a97a/SpotifyPlayCard.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T092135Z&X-Amz-Expires=86400&X-Amz-Signature=bef67bfcc0bc2c7e99c917ecc984b881c5af34ce0f886d6f2350858541d71de0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22SpotifyPlayCard.mp4%22&x-id=GetObject"
            />
            <DemoItem
              title="2Dott"
              description="A personal website built with Next.js and Tailwind CSS."
              slug="/craft/dott"
              date="Jan 2022"
              type="image"
              fileLink="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/54902305-1ca1-4992-a036-e52238acd5be/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T093124Z&X-Amz-Expires=86400&X-Amz-Signature=2e24094062b58488677533b9bd31b5b69b80b23c083cb8ae486212634e13fc6d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
            />
            <DemoItem
              title="3Dott"
              description="A personal website built with Next.js and Tailwind CSS."
              slug="/craft/dott"
              date="Jan 2022"
              type="image"
              fileLink="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77ecb7f7-9585-45f5-9784-d84f3143d712/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T093601Z&X-Amz-Expires=86400&X-Amz-Signature=f4cbff71047f0c8e62e12a35e94477bf804062eb23838e5b7dfabccbdc6492b0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
            />
            <DemoItem
              title="4Dott"
              description="A personal website built with Next.js and Tailwind CSS."
              slug="/craft/dott"
              date="Jan 2022"
              type="image"
              fileLink="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/54902305-1ca1-4992-a036-e52238acd5be/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T093124Z&X-Amz-Expires=86400&X-Amz-Signature=2e24094062b58488677533b9bd31b5b69b80b23c083cb8ae486212634e13fc6d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
            />
            <DemoItem
              title="5Dott"
              description="A personal website built with Next.js and Tailwind CSS."
              slug="/craft/dott"
              date="Jan 2022"
              type="image"
              fileLink="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/54902305-1ca1-4992-a036-e52238acd5be/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T093124Z&X-Amz-Expires=86400&X-Amz-Signature=2e24094062b58488677533b9bd31b5b69b80b23c083cb8ae486212634e13fc6d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
            /> */}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </>
  );
};

export default Craft;
