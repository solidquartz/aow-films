import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-white object-cover flex justify-between items-center p-3">
      {/* Left */}
      <div className="space-x-2">
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
        <Link href="/Bio" className="hover:underline">
          Bio
        </Link>
        <Link href="/Films" className="hover:underline">
          Work
        </Link>
        <Link href="/Contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
