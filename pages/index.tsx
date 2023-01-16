import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavigationBar from '@/components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = 'Dott\'s Blog'
  const description = 'A blog about writing, projects, and craft.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className="">
      </main>
    </>
  )
}
