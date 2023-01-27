import Head from "next/head";
import Link from "next/link";
import Divider from "@/components/UIElements/Divider";
import Footer from "@/components/Footer";
import ReturnIcon from "@/public/icons/return.svg";

const Craft: React.FC = () => {
  // Edit this to change the metadata of the page
  const craftMetaData = {
    title: "Spotify Playing Status",
    description: "Listen with me. Made with Spotify API and TailwindCSS.",
    slug: "spotify",
    date: "Jan 2023",
  };

  return (
    <>
      <Head>
        {/* <title>{craftMetaData.title} - Craft · Dott</title> */}
        <meta
          property="og:title"
          content={craftMetaData.title + " - Craft · Dott"}
        />
        <meta property="og:description" content={craftMetaData.description} />
        <meta
          property="og:url"
          content={"http://dott.love/craft/" + craftMetaData.slug}
        />
      </Head>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg:gap-20 lg:-ml-44">
          <Link
            className="group w-24 flex gap-1 items-center mb-10 lg:mb-4 -mt-16 lg:mt-0 text-[var(--label-base)] hover:text-[var(--label-title)] duration-300 ease-out transition"
            href={"/craft"}
          >
            <ReturnIcon className="h-4 w-4" />
            <div className="text-base font-normal group-hover:decoration-[var(--label-muted)] underline underline-offset-2 decoration-[var(--label-faint)] duration-300 ease-out transition">
              Craft
            </div>
          </Link>
          <div className="font-mono text-[var(--label-muted)] text-base leading-normal mb-4">
            {craftMetaData.date}
          </div>
        </div>
        <h1 className="font-semibold text-3xl text-[var(--label-title)] text-left mb-4 leading-tight">
          {craftMetaData.title}
        </h1>
        <Divider />
        <div className="flex flex-col leading-normal my-6 text-[var(--label-muted)]">
          {craftMetaData.description}
        </div>
        <section className="flex w-full bg-[var(--bg-sub)] rounded-lg border border-[var(--bg-border)] mt-12 -mb-20 overflow-hidden">
          {/* Edit here */}
          <video
            className="object-cover w-full h-full rounded-lg"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/585f2742-62fc-4dfc-b92c-08ef8ca22d0d/SpotifyPlayCard.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T112138Z&X-Amz-Expires=86400&X-Amz-Signature=f937cf1230543bc8be5b31f6c60472d01f8ece0159a27717aba34cc24595d09a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22SpotifyPlayCard.mp4%22&x-id=GetObject"
            autoPlay
            loop
          />
        </section>
        <Footer type="craft" />
      </div>
    </>
  );
};

export default Craft;
