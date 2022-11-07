import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-scroll bg-bg bg-cover min-h-screen min-w-full bg-no-repeat flex flex-col justify-center items-center">
      <Head>
        <title>AOW Films</title>
      </Head>
      <div className="top-0 absolute">
        <Header />
      </div>


      <div className="flex justify-center flex-col items-center min-w-full min-h-full"/>
        <div>
          <h1 className="text-9xl font-hero tracking-widest text-white text-center">
            AOW FILMS
          </h1>
        </div>
      </div>
  );
};

export default Home;
