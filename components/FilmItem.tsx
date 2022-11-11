import React from "react";
import type { Film } from "./filmlist";



export type FilmItemProps = {
  film: Film;
};

type Props = {};

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  return (
    <div className="p-3 filter drop-shadow-xl">
      <iframe
        width="560"
        height="315"
        src={film.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FilmItem;
