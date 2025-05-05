import { formatDate, getCommaSeparatedString } from "@/lib/GameUtils";
import {
  GameDeveloper,
  GameGenre,
  GamePlatform,
  GamePublisher,
  GameTag,
} from "@/types/GameTypes";
import React, { ReactNode } from "react";

interface GameDetailsInfoProps {
  data: {
    platforms: GamePlatform[];
    genres: GameGenre[];
    releaseDate: string | null;
    developers: GameDeveloper[];
    publishers: GamePublisher[];
    website: string | null;
    tags: GameTag[];
  };
}

interface GameDetailsGridItemProps {
  gridName: string;
  gridData: ReactNode | string;
  isSingleLineGridData?: boolean;
  isFullWidth?: boolean;
}

const GameDetailsInfo: React.FC<GameDetailsInfoProps> = ({ data }) => {
  const {
    platforms,
    genres,
    releaseDate,
    developers,
    publishers,
    website,
    tags,
  } = data;

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {platforms.length > 0 && (
        <GameDetailsInfoItem
          gridName="Platforms"
          gridData={getCommaSeparatedString(
            platforms.map((platform) => platform.platform.name)
          )}
        />
      )}
      {genres.length > 0 && (
        <GameDetailsInfoItem
          gridName="Genre"
          gridData={getCommaSeparatedString(genres.map((genre) => genre.name))}
        />
      )}
      {releaseDate && (
        <GameDetailsInfoItem
          gridName="Release Date"
          gridData={formatDate(releaseDate)}
        />
      )}
      {developers.length > 0 && (
        <GameDetailsInfoItem
          gridName="Developers"
          gridData={getCommaSeparatedString(
            developers.map((devs) => devs.name)
          )}
        />
      )}
      {publishers.length > 0 && (
        <GameDetailsInfoItem
          gridName="Publishers"
          gridData={getCommaSeparatedString(
            publishers.map((publisher) => publisher.name)
          )}
        />
      )}
      {website && (
        <GameDetailsInfoItem
          gridName="Website"
          gridData={
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          }
          isSingleLineGridData={true}
        />
      )}
      {tags.length > 0 && (
        <GameDetailsInfoItem
          gridName="Tags"
          gridData={getCommaSeparatedString(tags.map((tag) => tag.name))}
          isFullWidth={true}
        />
      )}
    </div>
  );
};

const GameDetailsInfoItem: React.FC<GameDetailsGridItemProps> = ({
  gridName,
  gridData,
  isSingleLineGridData,
  isFullWidth,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 mb-4 ${isFullWidth ? "col-span-2" : ""}`}
    >
      <h4 className="text-muted-foreground font-bold text-sm">{gridName}</h4>
      <div
        className={`text-md ${isSingleLineGridData ? "truncate" : ""} ${
          isSingleLineGridData ? "overflow-hidden whitespace-nowrap" : ""
        }`}
      >
        {gridData}
      </div>
    </div>
  );
};

export default GameDetailsInfo;
