import Head from "next/head";

const Craft = () => {
  const title = "Craft";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-titiel)] leading-6 shadow-highlight">
          {title}
        </div>
      </main>
    </>
  );
};

export default Craft;
