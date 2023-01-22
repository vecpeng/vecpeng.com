import Head from "next/head";

const Projects = () => {
  const title = "Projects";
  const description = `
  Here are all of my past projects. Some silly, some serious, some experimental, and some are just\
  plain fun. I hope you enjoy them as much as I do.
  `;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-titiel)] leading-7 shadow-highlight">
          Projects
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
        </div>
      </main>
    </>
  );
};

export default Projects;
