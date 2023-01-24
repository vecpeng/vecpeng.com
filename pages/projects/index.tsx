import Head from "next/head";
import Link from "next/link";
import Divider from "@/components/UIElements/Divider";
import ArrowRightIcon from "@/public/icons/arrowRight.svg";
import RedirectIcon from "@/public/icons/redirect.svg";

interface ProjectItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  link: string;
  date: string;
  redirect?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  link,
  date,
  redirect = false,
}) => {
  return (
    <Link className="group" href={`${redirect ? link : `/projects/${link}`}`}>
      <div className="flex flex-col w-full hover:cursor-pointer pt-6 group-last:pb-6">
        <div className="flex flex-col sm:flex-row sm:flex gap-2 sm:gap-4">
          <div className="flex flex-col flex-1">
            <div className="flex gap-2 items-center">
              <div className="font-normal text-[var(--label-muted)] group-hover:text-[var(--label-base)] text-sm text-ellipsis overflow-hidden transition duration-300 ease-out">
                {title}
              </div>
              {redirect ? (
                <RedirectIcon className="text-[var(--label-faint)] group-hover:text-[var(--label-muted)] h-4 w-4 transition duration-300 ease-out" />
              ) : (
                <ArrowRightIcon className="text-[var(--label-faint)] group-hover:text-[var(--label-muted)] h-4 w-4 transition duration-300 ease-out" />
              )}
            </div>
            <div
              className={`mt-2 font-normal text-[var(--label-faint)] group-hover:text-[var(--label-muted)] text-xs transition duration-300 ease-out ${
                description ? "" : "hidden"
              }`}
            >
              {description}
            </div>
          </div>
          <div className="font-normal font-mono text-[var(--label-faint)] group-hover:text-[var(--label-muted)] w-16 text-start sm:text-end text-sm transition duration-300 ease-out">
            {date}
          </div>
        </div>
        <Divider className="mt-6" />
      </div>
    </Link>
  );
};

const Projects = () => {
  const title = "Projects";
  const description = `
  Here are all of my past projects. Some silly, some serious, some experimental, and some are just\
  plain fun. I hope you enjoy them as much as I do.
  `;

  return (
    <>
      <Head>
        <title>{title} - Dott</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
          Projects
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
        </div>
        <div>
          <Divider />
          <ProjectItem
            title="ZipPhoto"
            description="An iOS photo organizer for professionals."
            link="https://zipphoto.app"
            date="2023"
            redirect={true}
          />
          <ProjectItem
            title="NotionComments"
            description="A comment tool made for content creators who use Notion as their CMS."
            link="https://notioncomments.com"
            date="2022"
            redirect={true}
          />
          <ProjectItem
            title="AR Knowledge Base"
            description="Where I organize resources about augmented reality."
            link="https://ar.dott.love"
            date="2022"
            redirect={true}
          />
        </div>
      </main>
    </>
  );
};

export default Projects;
