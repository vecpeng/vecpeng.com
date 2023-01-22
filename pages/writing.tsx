import Head from "next/head";
import Divider from "@/components/UIElements/Divider";
import Button from "@/components/UIElements/Button";
import RssIcon from "@/public/icons/rss.svg";
import { data } from "autoprefixer";

interface PostItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  slug: string;
  date: string;
}

const PostItem: React.FC<PostItemProps> = ({
  title,
  description,
  slug,
  date,
}) => {
  return (
    <div className="group flex gap-4 hover:cursor-pointer w-full">
      <div className="font-normal text-[var(--label-faint)] text-sm max-w-[40px] sm:max-w-[80px] w-full mx-auto invisible group-first:visible">
        {date.slice(0, 4)}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row sm:flex gap-2 sm:gap-4">
          <div className="flex flex-col flex-1">
            <div className="font-normal text-[var(--label-muted)] group-hover:text-[var(--label-base)] text-sm text-ellipsis overflow-hidden  transition duration-300 ease-out">
              {title}
            </div>
            <div
              className={`mt-2 font-normal text-[var(--label-faint)] group-hover:text-[var(--label-muted)] text-xs transition duration-300 ease-out ${
                description ? "" : "hidden"
              }`}
            >
              {description}
            </div>
          </div>
          <div className="font-normal text-[var(--label-faint)] group-hover:text-[var(--label-muted)] w-12 text-start sm:text-end text-sm transition duration-300 ease-out">
            {date.slice(5)}
          </div>
        </div>
        <Divider className="group-last:hidden" />
      </div>
    </div>
  );
};

interface PostSectionProps extends React.AllHTMLAttributes<HTMLDivElement> {
  posts: {
    title: string;
    description: string;
    slug: string;
    date: string;
  }[];
}

const PostSection: React.FC<PostSectionProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Divider />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostItem
            title={post.title}
            description={post.description}
            slug={post.slug}
            date={post.date}
            key={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

const Writing = () => {
  const title = "Writing";
  const description = `
  Knowledge is only internalized when it can be written down. I gather my thoughts,\
  ideas and sometimes carefully written articles on various topics here.
  `;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-titiel)] leading-7 shadow-highlight">
          {title}
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
        </div>
        <PostSection
          posts={[
            {
              title: "How to use Tailwind CSS with Next.js",
              description: "A guide to using Tailwind CSS with Next.js",
              slug: "how-to-use-tailwind-css-with-next-js",
              date: "2021, Aug 01",
            },
            {
              title: "How to use Tailwind CSS with Next.js",
              description: "A guide to using Tailwind CSS with Next.js",
              slug: "how-to-use-tailwind-css-with-next-js",
              date: "2021, Aug 01",
            },
            {
              title: "How to use Tailwind CSS with Next.js",
              description: "A guide to using Tailwind CSS with Next.js",
              slug: "how-to-use-tailwind-css-with-next-js",
              date: "2021, Aug 01",
            },
            {
              title: "How to use Tailwind CSS with Next.js",
              description: "A guide to using Tailwind CSS with Next.js",
              slug: "how-to-use-tailwind-css-with-next-js",
              date: "2021, Aug 01",
            },
            {
              title: "How to use Tailwind CSS with Next.js",
              description: "A guide to using Tailwind CSS with Next.js",
              slug: "how-to-use-tailwind-css-with-next-js",
              date: "2021, Aug 01",
            },
          ]}
        />
        <Button className="mt-12" text="Subscribe">
          <RssIcon />
        </Button>
      </main>
    </>
  );
};

export default Writing;
