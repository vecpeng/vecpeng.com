import Head from "next/head";

const Projects = () => {
  const title = "Projects";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-titiel)] leading-6 shadow-highlight">
          Projects
        </div>
      </main>
    </>
  );
};

export default Projects;
