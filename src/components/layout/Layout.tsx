import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../header";
import DashboardHeader from "../header/DashboardHeader";
import Sidebar from "../sidebar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();

  const isDashboard = router.asPath.includes("/dashboard");
  return (
    <>
      <Head>
        <title>Good Doctor App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isDashboard && <Header />}
      <div className="flex relative">
          {isDashboard 
           ? (
            <aside className="hidden md:block fixed top-0 bottom-0 left-0 z-40">
              <Sidebar />
            </aside>
          ) : null}
          <div
            className={`w-full relative ${
              isDashboard ? "md:ml-52" : ""
            } min-h-screen`}
          >
            {isDashboard ? <DashboardHeader /> : null}
            <div className="px-4">{props.children}</div>
          </div>
        </div>

    </>
  );
};

export default Layout;
