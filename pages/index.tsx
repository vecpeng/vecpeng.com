import Head from "next/head";
import Divider from "@/components/UIElements/Divider";
import { motion } from "framer-motion";

const Home = () => {
  const greeting = "Hey! I'm Dott.";
  const descriptionOne = `
  A software product designer crafting user interfaces. Coding my own design to bridge the gap\
  between design and engineering. Interested in design system, web & iOS development and augmented\
  reality. Trying to bring magic and joy to future software.
  `;
  const descriptionTwo = `
  You can know more about me through the demos I crafted, the articles I wrote, and the projects\
  I did in the past.
  `;

  const currentlyOne = `
  A graduate student at Tongji University after getting my bachelor degree at Huazhong University of Science and Technology.
  `;

  const currentlyTwo = `
  🎨 Experimenting with product and design.
  `;

  const currentlyThree = `
  🧑🏻‍💻 Learning web development, SwiftUI and Python.
  `;

  const currentlyFour = `
  🍎 Keeping an eye on The Fruit Company.
  `;

  const currentlyFive = `
  👓 Passionate about the future of AR.
  `;

  return (
    <>
      <Head>
        <title>Dott&apos;s Blog - Dott</title>
      </Head>
      <main className="flex flex-col gap-8 w-full h-full">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight"
        >
          {greeting}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
          className="flex flex-col gap-8"
        >
          <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
            {descriptionOne}
          </div>
          <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
            {descriptionTwo}
          </div>
        </motion.div>
        {/* <Divider />
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
        Selected
      </div> */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 2 }}
          className="flex flex-col gap-8"
        >
          <Divider />
          <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
            Currently
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
              {currentlyOne}
            </div>
            <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
              {currentlyTwo}
            </div>
            <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
              {currentlyThree}
            </div>
            <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
              {currentlyFour}
            </div>
            <div className="text-sm font-normal text-[var(--label-muted)] leading-6">
              {currentlyFive}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 3 }}
          className="flex justify-end cursor-default mt-24 leading-normal text-end text-xs font-normal text-[var(--label-faint)] hover:shadow-highlight hover:text-[var(--label-title)] duration-300 transition ease-out"
        >
          Love is the answer.
        </motion.div>
      </main>
    </>
  );
};

export default Home;
