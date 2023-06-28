import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abir Khan</title>
        <meta name="description" content="Abir Does Frontend | Powered by NextJs"/>
        <meta name="viewport" content="width=device-width , initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
      </main>
    </>
  );
}
