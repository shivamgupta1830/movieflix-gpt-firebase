import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ image_path }) => {
  return (
    <div className="cursor-pointer hover:scale-125 transition-all">
      <img src={`${IMG_URL}${image_path}`} alt="" />
    </div>
  );
};

export default MovieCard;
