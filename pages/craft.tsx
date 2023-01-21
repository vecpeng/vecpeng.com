import Head from "next/head";

const Craft = () => {
    const title = "Craft"

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-screen h-screen">
                <div>{title}</div>
            </main>
        </>
    )
}

export default Craft;