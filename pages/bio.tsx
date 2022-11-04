import React from "react";
import Image from "next/image";

type Props = {};

function Bio({}: Props) {
  return (
    <div>
      <div>
        <h2>Andrew Owen Wolinsky</h2>
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
          A versatile, and creative content producer with a wealth of production
          experience Andrew Owen Wolinsky has been a creative force in film,
          television and video for over twenty years.
        </p>

        <p>
          A graduate of Royal Saint George&apos;s College and the University of
          British Columbia&apos;s Film School; Andrew has worked on Films, TV shows
          and Videos in Canada and abroad in Asia. From 2005-2010, while based
          in Japan; Andrew began shooting music videos and directing docuseries.
        </p>

        <p>
          Past responsibilities have included producing, writing (creative and
          copy), directing, budgeting, casting, scheduling, logistics, editing
          and production assistance. Specialties include; Strategy, Brand
          Development, Writing, Creative Direction, and Content Production.
        </p>
      </div>
    </div>
  );
}

export default Bio;
