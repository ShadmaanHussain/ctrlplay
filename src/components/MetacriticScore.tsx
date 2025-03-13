import React from "react";

interface MetacriticScoreProps {
  score: number;
}

const calculateRatingColor = (rating: number) => {
  if (rating >= 75) {
    return "bg-green-400";
  } else if (rating < 75 && rating >= 50) {
    return "bg-yellow-400";
  } else {
    return "bg-red-400";
  }
};

const MetacriticScore: React.FC<MetacriticScoreProps> = ({ score }) => {
  return (
    <div
      className={`text-sm w-5 h-5 ${calculateRatingColor(
        score
      )} text-black font-bold ml-2 p-3 rounded-sm flex justify-center items-center`}
    >
      <p className="leading-none">{score}</p>
    </div>
  );
};

export default MetacriticScore;
