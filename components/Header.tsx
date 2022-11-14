import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-white object-cover flex justify-between items-center pt-3 pb-3 pl-5 pr-5 max-h-[50px]">
      {/* Left */}
      <div className="space-x-2 invisible md:visible">
        <SocialIcon url="https://www.instagram.com/awolie01/" bgColor="black" />
        <SocialIcon url="https://www.facebook.com/awolinsky" bgColor="black" />
        <SocialIcon
          url="https://www.linkedin.com/in/andrewwolinsky/"
          bgColor="black"
        />
        <SocialIcon url="https://vimeo.com/user64502745" bgColor="black" />
        <SocialIcon
          url="https://www.youtube.com/channel/UCYccqQ64c0jpEHrrmN1Sv6g"
          bgColor="black"
        />
      </div>

      {/* Right */}
      <div className="space-x-4 text-xl uppercase text-black tracking-wider">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/bio" className="hover:underline">
          Bio
        </Link>
        <Link href="/films" className="hover:underline">
          Work
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
