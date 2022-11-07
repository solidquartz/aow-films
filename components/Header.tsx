import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-black/20 object-cover flex justify-between items-center p-4">

      {/* Left */}
      <div className="space-x-2">
        <SocialIcon url="https://www.instagram.com/awolie01/" bgColor="white" />
        <SocialIcon url="https://www.facebook.com/awolinsky" bgColor="white" />
        <SocialIcon
          url="https://www.linkedin.com/in/andrewwolinsky/"
          bgColor="white"
        />
        <SocialIcon url="https://vimeo.com/user64502745" bgColor="white" />
      </div>

      {/* Right */}
      <div className="space-x-4 text-lg uppercase text-white tracking-wider font-extralight">
        <Link href="/">Home</Link>
        <Link href="/Bio">Bio</Link>
        <Link href="/Films">Films</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
