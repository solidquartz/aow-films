import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AOW Films</title>
      </Head>

      <Header />

    </div>
  );
};

export default Home;
