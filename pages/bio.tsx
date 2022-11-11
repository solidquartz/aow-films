import React from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";

type Props = {};

function Bio({}: Props) {
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
          <h2 className="text-7xl font-hero tracking-widest text-white text-center uppercase">
            About AOW
          </h2>
          <h3 className="text-xl uppercase tracking-widest text-white text-center font-body">
            Filmmaker . Director .
          </h3>
        </div>
        <div className="pb-[50px]">
          {/* Image */}
          <Image
            src="/images/aowprofile.jpg"
            width="1000"
            height="667"
            alt="Profile picture of Andrew Wolinsky"
          />
        </div>

        {/* Paragraph */}
        <div className="max-w-[1000px] text-white bg-black/50 p-7 text-center space-y-5 text-lg font-body">
          <div>
            <p>
              A versatile and creative content producer with a wealth of film
              production experience, Andrew Owen Wolinsky has been a creative
              force in Canadian film, television and video for over twenty
              years.
            </p>
          </div>
          <div>
            <p>
              A graduate of Royal Saint George&amp;s College and the University
              of British Columbia&amp;s Film School, Andrew has worked on large
              films, TV shows, and videos in Canada and abroad in Asia. From
              2005-2010, while based in Japan, Andrew began directing music
              videos, webisodes and industrial videos.
            </p>
          </div>
          <div>
            <p>
              Past responsibilities have included producing, writing (creative
              &amp; copy), directing, budgeting, casting, scheduling, logistics,
              editing, and production assistance. Specialties include: Strategy,
              Brand Development, Writing, Creative Direction, and Content
              Production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
