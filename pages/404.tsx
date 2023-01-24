import Head from "next/head";
import Button from "@/components/UIElements/Button";
import ReturnIcon from "@/public/icons/return.svg";

const Custom404 = () => {
  const title = "404";
  return (
    <>
      <Head>
        <title>{title} - Dott</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full h-full gap-8">
        <div className="text-base font-medium text-[var(--label-title)] leading-7 shadow-highlight">
          404 - Page Not Found
        </div>
        <Button
          className=""
          text="Return home"
          onClick={() => window.open("/", "_self")}
        >
          <ReturnIcon />
        </Button>
      </main>
    </>
  );
};

export default Custom404;
