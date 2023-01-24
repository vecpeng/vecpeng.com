import Head from "next/head";
import Link from "next/link";
import { getPosts, getPage, getBlocks } from "@/utils/notion-request";
import { RenderBlocks } from "@/utils/notion-format";
import generateRss from "@/utils/rss";
import Divider from "@/components/UIElements/Divider";
import Footer from "@/components/Footer";
import fs from "fs";
import ReturnIcon from "@/public/icons/return.svg";

interface PostProps extends React.AllHTMLAttributes<HTMLDivElement> {
  post: any;
  blocks: any;
}

const Post: React.FC<PostProps> = ({ post, blocks }) => {
  const postTitle = post.properties.articleTitle.title[0].plain_text;
  const postDescription =
    post.properties.articleDescription.rich_text[0].plain_text;
  const postDate = new Date(
    post.properties.articleDate.date.start
  ).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const postSlug = post.properties.slug.rich_text[0].plain_text;

  return (
    <>
      <Head>
        <title>{postTitle} - Dott</title>
        <meta property="og:title" content={postTitle + " · Dott"} />
        <meta property="og:description" content={postDescription} />
        <meta
          property="og:url"
          content={"http://dott.love/writing/" + postSlug}
        />
      </Head>
      <article className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg:gap-20 lg:-ml-44">
          <Link
            className="group w-24 flex gap-1 items-center mb-10 lg:mb-4 -mt-16 lg:mt-0 text-[var(--label-base)] hover:text-[var(--label-title)] duration-300 ease-out transition"
            href={"/writing"}
          >
            <ReturnIcon className="h-4 w-4" />
            <div className="text-base font-normal group-hover:decoration-[var(--label-muted)] underline underline-offset-2 decoration-[var(--label-faint)] duration-300 ease-out transition">
              Back
            </div>
          </Link>
          <div className="text-[var(--label-muted)] text-base leading-normal mb-4">
            {postDate}
          </div>
        </div>
        <h1 className="font-semibold text-3xl text-[var(--label-title)] text-left mb-4 leading-tight">
          {postTitle}
        </h1>
        <Divider />
        <div className="flex flex-col md:flex-row mt-32 mb-32 md:mb-16 md:-ml-[112px] text-[var(--label-title)] before:-mb-6 md:before:mb-0 md:leading-normal before:-ml-9 md:before:ml-0 md:before:-mt-3 before:content-['“'] before:text-[var(--label-title)] before:text-6xl md:before:text-8xl md:before:mr-4">
          {postDescription}
        </div>
        <section className="flex flex-col gap-4">
          <RenderBlocks blocks={blocks} />
        </section>
        <Footer />
      </article>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map((post: any) => ({
      params: {
        post: post.properties.slug.rich_text[0].plain_text,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const posts = await getPosts();
  const filteredPosts = posts.filter(
    (post: any) =>
      post.properties.slug.rich_text[0].plain_text === context.params.post
  );
  const post = await getPage(filteredPosts[0].id);
  const blocks = await getBlocks(filteredPosts[0].id);

  const getChildrenBlocks = await Promise.all(
    blocks
      .filter((block: any) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );

  const blockWithChildren = blocks.map((block: any) => {
    if (block.has_children && getChildrenBlocks) {
      block[block.type].children = (getChildrenBlocks as any).find(
        (x: any) => x.id === block.id
      ).children;
    }
    return block;
  });

  if (posts.length > 0) {
    const rss = generateRss(posts);
    fs.writeFileSync("./public/rss.xml", rss);
  }

  return {
    props: {
      post,
      blocks: blockWithChildren,
    },
    revalidate: 1,
  };
};
