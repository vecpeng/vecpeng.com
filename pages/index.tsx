import Head from "next/head";
import Divider from "@/components/Divider";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const title = "Dott's Blog";
  const greeting = "Hey! I'm Dott.";
  const descriptionPragraphOne = `
  A software product designer crafting user interfaces. Coding my own design to bridge the gap\
  between design and engineering. Interested in design system, web & iOS development and augmented\
  reality. Trying to bring magic and joy to future software.
  `;
  const descriptionPragraphTwo = `
  You can know more about me through the demos I crafted, the articles I wrote, and the projects\
  I did in the past.
  `;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <div className="text-base font-medium text-[var(--label-titiel)] leading-6 shadow-highlight">
          {greeting}
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {descriptionPragraphOne}
        </div>
        <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
          {descriptionPragraphTwo}
        </div>
        <Divider />
        <div className="text-base font-medium text-[var(--label-titiel)] leading-6">
          Selected
        </div>
      </main>
    </>
  );
};

export default Home;
