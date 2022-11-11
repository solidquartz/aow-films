import React from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";

type Props = {};

function Bio({}: Props) {
  return (
    <div className="bg-scroll bg-bg bg-cover h-screen bg-no-repeat flex justify-center">
      <Head>
        <title>AOW Films</title>
      </Head>
      <div>
        <Header />
      </div>
      <div>
        <h2>About AOW</h2>
      </div>
      <div>
        <Image
          src="/images/a-2.jpg"
          width="280"
          height="180"
          alt="Profile picture of Andrew Wolinsky"
        />
      </div>
      <div>
        <p>
          A versatile, and creative content producer with a wealth of film
          production experience, Andrew Owen Wolinsky has been a creative force
          in Canadian film, television and video for over twenty years.
        </p>

        <p>
          A graduate of Royal Saint George&amp;s College and the University of
          British Columbia&amp;s Film School, Andrew has worked on large films,
          TV shows and videos in Canada and abroad in Asia. From 2005-2010,
          while based in Japan, Andrew began directing music videos, webisodes
          and industrial videos.
        </p>

        <p>
          Past responsibilities have included producing, writing (creative &amp;
          copy), directing, budgeting, casting, scheduling, logistics, editing
          and production assistance. Specialties include; Strategy, Brand
          Development, Writing, Creative Direction, and Content Production.
        </p>
      </div>
    </div>
  );
}

export default Bio;
