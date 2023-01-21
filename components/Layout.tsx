import React from "react";
import Head from 'next/head'
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";


interface LayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const description = "A blog website."

    return (
        <>
            <Head>
                <link rel="icon" href="/images/portrait-rounded.png" />
                <meta name="description" content={description} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@DottChen" />
                <meta name="twitter:creator" content="@DottChen" />
                {/* <script async src="https://cdn.splitbee.io/sb.js" /> */}
            </Head>
            <NavigationBar />
            <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
                {children}
            </div>
            <Footer />
        </>
    );
  }

export default Layout;