import Head from "next/head"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
  const title = "Blog Navigation"

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

export default Home;