import { formatDate, getCommaSeparatedString } from "@/lib/GameUtils";
import { GameDeveloper, GameGenre, GamePlatformDetails, GamePublisher } from "@/types/GameTypes";
import React from "react";

interface GameDetailsInfoProps {
  data: {
    platforms: GamePlatformDetails[];
    genres: GameGenre[];
    releaseDate: string | null;
    developers: GameDeveloper[];
    publishers: GamePublisher[];
    website: string | null;
  }
}

const GameDetailsInfo: React.FC<GameDetailsInfoProps> = ({ data }) => {
  const { platforms, genres, releaseDate, developers, publishers, website } = data;

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Platforms
        </h4>
        <div className="text-md">
          {getCommaSeparatedString(platforms.map((platform) => platform.platform.name))}
        </div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">Genre</h4>
        <div className="text-md">{getCommaSeparatedString(genres.map((genre) => genre.name))}</div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Release Date
        </h4>
        <div className="text-md">{releaseDate && formatDate(releaseDate)}</div>
      </div>
      <div className=""> 
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Developers - Make Interface
        </h4>
        <div className="text-md">{getCommaSeparatedString(developers.map((devs) => devs.name))}</div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Publishers - Make Interface
        </h4>
        <div className="text-md">{getCommaSeparatedString(publishers.map((publisher) => publisher.name))}</div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Website
        </h4>
        <div className="text-md">{website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        )}</div>
      </div>
    </div>
  );
};

export default GameDetailsInfo;
