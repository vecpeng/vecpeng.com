import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavigationBar from "./NavigationBar";
import Header from "./Header";

interface LayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const description = "A blog website.";
  const [currentPage, setCurrentPage] = useState("/");
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  });

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
      <Header />
      {(currentPage === "/" || "/craft" || "/writing" || "/projects") && (
        <NavigationBar />
      )}
      <div className="flex flex-col max-w-2xl w-full mx-auto py-40 px-6">
        {children}
      </div>
    </>
  );
};

export default Layout;
