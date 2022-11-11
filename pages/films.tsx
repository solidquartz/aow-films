import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import FilmItem from "../components/FilmItem";
import { films } from "../components/filmlist";

type Props = {};

function Films({}: Props) {
  return (
    <div className="bg-bg bg-cover min-h-screen bg-fixed">
      <Head>
        <title>AOW Films</title>
      </Head>

      {/* HEADER */}
      <div className="top-0 sticky z-50">
        <Header />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center p-5">
        <div className="flex flex-col items-center pt-[80px] pb-[50px]">
          <h2 className="text-7xl font-hero tracking-widest text-white text-center uppercase filter drop-shadow-xl">
            Work
          </h2>
          <h3 className="text-xl uppercase tracking-widest text-white text-center font-body filter drop-shadow-lg">
            AOW FILMS
          </h3>
        </div>

        {/* Films */}
        <div className="flex items-center justify-center max-w-[1200px] flex-wrap">
          {films.map((film) => (
            <FilmItem key={film.url} film={film} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Films;
