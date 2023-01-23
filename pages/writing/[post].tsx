import Head from "next/head";
import { getPosts, getPage, getBlocks } from "@/utils/notion-request";
import { RenderBlocks } from "@/utils/notion-format";
import generateRss from "@/utils/rss";
import Sign from "@/components/Sign";
import Divider from "@/components/UIElements/Divider";
import fs from "fs";

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
        <title>{postTitle} · Dott</title>
        <meta property="og:title" content={postTitle + " · Dott"} />
        <meta property="og:description" content={postDescription} />
        <meta
          property="og:url"
          content={"http://dott.love/writing/" + postSlug}
        />
      </Head>
      <article className="flex flex-col">
        <div className="text-[var(--label-muted)] text-sm mb-2">{postDate}</div>
        <h1 className="font-semibold text-4xl text-[var(--label-title)] text-left mb-4">
          {postTitle}
        </h1>
        <Divider />
        <div className="flex my-16 leading-5 -mr-6 before:content-['“'] before:text-[var(--label-title)] before:text-8xl before:mr-3">
          {postDescription}
        </div>
        <section className="flex flex-col">
          <RenderBlocks blocks={blocks} />
          <Sign />
        </section>
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
