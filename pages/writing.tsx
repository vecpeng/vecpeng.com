import Head from "next/head";
import Button from "@/components/UIElements/Button";
import RssIcon from "@/public/icons/rss.svg";

interface PostItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  date: string;
}

const PostItem;

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
        <Button text="Subscribe">
          <RssIcon />
        </Button>
      </main>
    </>
  );
};

export default Writing;
