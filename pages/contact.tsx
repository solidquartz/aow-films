import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

function Contact({}: Props) {
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
            Contact
          </h2>
          <h3 className="text-xl uppercase tracking-widest text-white text-center font-body filter drop-shadow-lg">
            AOW FILMS
          </h3>
        </div>

        {/* Content */}
        <div className="max-w-[1000px] text-white bg-black/70 p-7 text-center space-y-5 text-xl font-body">
          <div>
            <p className="italic">For bookings or inquiries, please contact:</p>
            <p className="uppercase font-bold">Andrew O. Wolinsky</p>
          </div>
          <div>
            <p>
              Email:
              <a href="mailto: awolinsky@gmail.com" className="hover:underline">
                {" "}
                awolinsky@gmail.com
              </a>
            </p>

            <p>
              Telephone:{" "}
              <a href="tel: 14165253456" className="hover:underline">
                +1 (416) 525 FILM (3456)
              </a>{" "}
            </p>
          </div>
          <div>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/awolie01/"
                className="hover:underline"
              >
                awolie01
              </a>
            </p>

            <p>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/awolinsky"
                className="hover:underline"
              >
                awolinsky
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/andrewwolinsky/"
                className="hover:underline"
              >
                andrewwolinsky
              </a>
            </p>

            <p>
              Vimeo:{" "}
              <a
                href="https://vimeo.com/user64502745"
                className="hover:underline"
              >
                Andrew Wolinsky
              </a>
            </p>

            <p>
              YouTube:{" "}
              <a
                href="https://www.youtube.com/channel/UCYccqQ64c0jpEHrrmN1Sv6g"
                className="hover:underline"
              >
                Andrew Wolinsky
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
