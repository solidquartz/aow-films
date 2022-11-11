import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-white object-cover flex justify-between items-center pt-3 pb-3 pl-5 pr-5 bottom-0 w-full">
      <div className="w-full">
        <p className="italic text-center text-xs">
          &copy; 2022 AOW Films
        </p>
      </div>
    </div>
  );
}

export default Footer;
