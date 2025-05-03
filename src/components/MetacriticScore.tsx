import React from "react";
import { calculateMetacriticRatingColor } from "@/lib/GameUtils";

interface MetacriticScoreProps {
  score: number;
}

const MetacriticScore: React.FC<MetacriticScoreProps> = ({ score }) => {
  return (
    <div
      className={`text-sm w-5 h-5 ${calculateMetacriticRatingColor(
        score
      )} text-black font-bold ml-2 p-3 rounded-sm flex justify-center items-center`}
    >
      <p className="leading-none">{score}</p>
    </div>
  );
};

export default MetacriticScore;
