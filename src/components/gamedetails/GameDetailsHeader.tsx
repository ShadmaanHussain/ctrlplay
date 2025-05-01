import React from "react";
import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import ReleaseDate from "../ReleaseDate";
import { FaStar } from "react-icons/fa";

interface GameDetailsHeaderProps {
  data: {
    isOnPC: boolean;
    isOnPlaystation: boolean;
    isOnXbox: boolean;
    gameName: string;
    released: string | null;
    rating: number | null;
    totalRatings: number | null;
  };
}

const GameDetailsHeader: React.FC<GameDetailsHeaderProps> = ({ data }) => {
  const {
    isOnPC,
    isOnPlaystation,
    isOnXbox,
    gameName,
    released,
    rating,
    totalRatings,
  } = data;
  
  return (
    <div className="mb-10">
      <div className="flex gap-3 py-4 items-center">
        <ReleaseDate released={released} />
        {isOnPC && <FaWindows className="text-xl" />}
        {isOnPlaystation && <FaPlaystation className="text-xl" />}
        {isOnXbox && <FaXbox className="text-xl" />}
      </div>
      <h1 className="font-black text-6xl mb-4">{gameName}</h1>
      {rating && (
        <div className="flex items-center">
          <FaStar color="gold" className="mr-3" />
          <span className="font-bold">{rating}</span>
          {totalRatings !== null && (
            <>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
              <span className="text-gray-500">{totalRatings} reviews</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GameDetailsHeader;
