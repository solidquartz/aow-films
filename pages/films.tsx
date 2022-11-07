import React from 'react'
import Head from "next/head";
import Header from "../components/Header";

type Props = {}

function Films({}: Props) {
  return (
    <div className="bg-scroll bg-bg bg-cover h-screen bg-no-repeat flex justify-center">
      <Head>
        <title>AOW Films</title>
      </Head>
      <div>
        <Header />
      </div>
      <div>
        <h2>Films</h2>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RU-mt9uHe6A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Films