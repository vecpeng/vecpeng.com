import Head from "next/head";

const Projects = () => {
    const title = "Projects"

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <main className="flex w-screen h-screen">
            <div>{title}</div>
        </main>
      </>
    )
};

export default Projects;