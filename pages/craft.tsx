import Head from "next/head";

const Craft = () => {
  const title = "Craft";
  const description = `
  Craftsmanship is what makes a great idea become a great product. Here I explore the possibilities\
  of polished interfaces and delightful interactions.
  `;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
          {title}
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {description}
        </div>
      </main>
    </>
  );
};

export default Craft;
