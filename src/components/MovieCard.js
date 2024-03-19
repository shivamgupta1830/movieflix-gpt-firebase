import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ image_path }) => {
  return (
    <div className="cursor-pointer hover:scale-110 transition-all mr-2 w-32">
      <img src={`${IMG_URL}${image_path}`} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
