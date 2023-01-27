import Head from "next/head";
import Link from "next/link";
import { getPosts } from "@/utils/notion-request";
import Divider from "@/components/UIElements/Divider";
import Button from "@/components/UIElements/Button";
import RssIcon from "@/public/icons/rss.svg";
import { data } from "autoprefixer";

interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
}

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
    <Link
      className="group outline-none rounded-md"
      href={`/writing/${slug}`}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="flex gap-4 hover:cursor-pointer w-full pt-6 group-last:pb-6">
        <div className="font-normal font-mono text-[var(--label-faint)] text-sm max-w-[40px] sm:max-w-[80px] w-full mx-auto invisible group-first:visible">
          {date.slice(-4)}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row sm:flex gap-2 sm:gap-4 items-baseline">
            <div className="flex flex-col flex-1">
              <div className="font-normal text-[var(--label-muted)] group-hover:text-[var(--label-base)] group-focus:text-[var(--label-base)] text-sm text-ellipsis overflow-hidden transition duration-300 ease-out">
                {title}
              </div>
              <div
                className={`mt-2 font-normal text-[var(--label-faint)] group-hover:text-[var(--label-muted)] group-focus:text-[var(--label-muted)] text-xs transition duration-300 ease-out ${
                  description ? "" : "hidden"
                }`}
              >
                {description}
              </div>
            </div>
            <div className="font-normal font-mono text-[var(--label-faint)] group-hover:text-[var(--label-muted)] group-focus:text-[var(--label-muted)] w-16 text-start sm:text-end text-xs transition duration-300 ease-out">
              {date.slice(0, -6)}
            </div>
          </div>
          <Divider className="group-last:hidden mt-6" />
        </div>
      </div>
    </Link>
  );
};

interface PostSectionProps extends React.AllHTMLAttributes<HTMLDivElement> {
  posts: Post[];
}

const PostSection: React.FC<PostSectionProps> = ({ posts }) => {
  return (
    <div className="group/section flex flex-col w-full">
      <Divider className="z-0" />
      <div className="flex flex-col">
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
      <Divider className="invisible z-0 group-last/section:visible" />
    </div>
  );
};

interface WritingProps extends React.AllHTMLAttributes<HTMLDivElement> {
  posts: any;
}
const Writing: React.FC<WritingProps> = ({ posts }) => {
  const description = `
  Knowledge is only internalized when it can be written down. I gather my thoughts,\
  ideas and sometimes carefully written articles on various topics here.
  `;

  const getPostSections = (posts: any[]) => {
    let yearList: string[] = [];
    let postSections: any[] = [];
    for (let i = 0; i < posts.length; i++) {
      const yearNumber = posts[i].properties.articleDate.date.start.slice(0, 4);
      const isInYearList = yearList.includes(yearNumber);
      if (!isInYearList) {
        yearList.push(yearNumber);
        const postSection = {
          publishYear: yearNumber,
          posts: new Array(),
        };
        postSection.posts.push(posts[i]);
        postSections.push(postSection);
      } else {
        postSections
          .filter((item) => item.publishYear === yearNumber)[0]
          .posts.push(posts[i]);
      }
    }
    return postSections;
  };
  const postsByYear = getPostSections(posts);

  return (
    <>
      <Head>
        <title>Writing - Dott</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
          Writing
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
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
        <div className="flex flex-col">
          {postsByYear.map((postSection) => {
            const { publishYear, posts } = postSection;
            const newPosts = posts.map((post: any) => {
              return {
                title: post.properties.articleTitle.title[0].plain_text,
                description:
                  post.properties.articleDescription.rich_text[0].plain_text,
                slug: `${post.properties.slug.rich_text[0].plain_text}`,
                date: new Date(
                  post.properties.articleDate.date.start
                ).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }),
              };
            });
            return <PostSection posts={newPosts} key={publishYear} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Writing;

export const getStaticProps = async () => {
  const database = await getPosts();
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
