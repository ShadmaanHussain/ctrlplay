import React, { useState } from "react";
import parse from "html-react-parser";

interface GameDetailsAboutProps {
  description: string;
}

const GameDetailsAbout: React.FC<GameDetailsAboutProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mb-8">
      <h3 className="font-bold text-2xl text-red-400">About</h3>
      <div className={`text-sm ${isExpanded ? "" : "line-clamp-6"}`}>
        {parse(description)}
      </div>
      <button onClick={toggleDescription} className="font-bold text-red-400">
        {isExpanded ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default GameDetailsAbout;
