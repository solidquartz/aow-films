import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="bg-bg bg-cover min-h-screen bg-fixed">

        <Head>
          <title>AOW Films</title>
        </Head>
        {/* HEADER */}
        <div className="top-0 sticky z-50">
          <Header />
        </div>

        <div className="flex flex-col items-center space-y-7 pb-[100px]">
          {/* HERO */}
          <div className="flex flex-col items-center pt-[100px] pb-[100px] max-w-[500px]">
            <h1 className="text-9xl font-hero tracking-widest text-white text-center">
              AOW FILMS
            </h1>

            <h2 className="text-3xl uppercase tracking-wider text-white text-center font-body">
              Andrew Owen Wolinsky
            </h2>

            <h3 className="text-xl uppercase tracking-widest text-white text-center font-body">
              Filmmaker . Director .
            </h3>
          </div>

          {/* REEL */}
          <div>
            <iframe
              width="640"
              height="480"
              src="https://www.youtube.com/embed/dmhOOYsmrJg?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <Link href="/films">
              <p className="text-white uppercase text-xl font-thin font-body hover:font-semibold cursor-pointer">
                View Portfolio
              </p>
            </Link>
          </div>
        </div>
      </div>

  );
};

export default Home;
