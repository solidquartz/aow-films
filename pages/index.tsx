import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";


const Home: NextPage = () => {

  return (
    <div className="bg-scroll bg-bg bg-cover h-screen bg-no-repeat flex justify-center">
      <Head>
        <title>AOW Films</title>
      </Head>
      <div>
        <Header />
      </div>


    </div>
  );
};

export default Home;
