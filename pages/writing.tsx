import Head from "next/head";

const Writing = () => {
    const title = "Writing"

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

export default Writing;