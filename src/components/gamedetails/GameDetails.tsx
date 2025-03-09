import React, { useState } from "react";
import data from "./data.json";
import parse from "html-react-parser";
import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";

const GameDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isOnPlaystation = data.parent_platforms.some(
    (platform) => platform.platform.slug === "playstation"
  );
  const isOnPC = data.parent_platforms.some(
    (platform) => platform.platform.slug === "pc"
  );
  const isOnXbox = data.parent_platforms.some(
    (platform) => platform.platform.slug === "xbox"
  );

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex gap-7">
      <div className="w-[40%]">
        <div className="flex gap-2 py-4">
          {isOnPC && <FaWindows className="text-red-400" />}
          {isOnPlaystation && <FaPlaystation className="text-red-400" />}
          {isOnXbox && <FaXbox className="text-red-400" />}
        </div>
        <h1 className="font-black text-6xl mb-4">{data.name}</h1>
        <div>
          <h3 className="font-bold text-2xl text-red-400">About</h3>
          <div className={`text-sm ${isExpanded ? "" : "line-clamp-6"}`}>
            {parse(data.description)}
          </div>
          <button
            onClick={toggleDescription}
            className="font-bold text-red-400"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        </div>
      </div>
      <div className="w-[60%]">
        <video controls autoPlay muted className="h-full w-full rounded-xl">
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default GameDetails;
