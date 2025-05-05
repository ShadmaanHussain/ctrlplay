import { formatDate, getCommaSeparatedString } from "@/lib/GameUtils";
import {
  GameDeveloper,
  GameGenre,
  GamePlatform,
  GamePublisher,
  GameTag,
} from "@/types/GameTypes";
import React, { ReactNode } from "react";

interface GameDetailsInfo {
  platforms: GamePlatform[];
  genres: GameGenre[];
  releaseDate: string | null;
  developers: GameDeveloper[];
  publishers: GamePublisher[];
  website: string | null;
  tags: GameTag[];
}

interface GameDetailsInfoProps {
  data: GameDetailsInfo;
}

interface GameDetailsGridItemProps {
  gridName: string;
  gridData: ReactNode | string;
  isSingleLineGridData?: boolean;
  isFullWidth?: boolean;
}

const getFieldsToRenderConfig = (data: GameDetailsInfo) => {
  const {
    platforms,
    genres,
    releaseDate,
    developers,
    publishers,
    website,
    tags,
  } = data;

  return [
    {
      label: "Platforms",
      data: platforms.length
        ? getCommaSeparatedString(platforms.map((p) => p.platform.name))
        : null,
    },
    {
      label: "Genre",
      data: genres.length
        ? getCommaSeparatedString(genres.map((g) => g.name))
        : null,
    },
    {
      label: "Release Date",
      data: releaseDate ? formatDate(releaseDate) : null,
    },
    {
      label: "Developers",
      data: developers.length
        ? getCommaSeparatedString(developers.map((d) => d.name))
        : null,
    },
    {
      label: "Publishers",
      data: publishers.length
        ? getCommaSeparatedString(publishers.map((p) => p.name))
        : null,
    },
    {
      label: "Website",
      data: website ? (
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      ) : null,
      isSingleLineGridData: true,
    },
    {
      label: "Tags",
      data: tags.length
        ? getCommaSeparatedString(tags.map((t) => t.name))
        : null,
      isFullWidth: true,
    },
  ];
};

const GameDetailsInfo: React.FC<GameDetailsInfoProps> = ({ data }) => {
  const fieldsToRender = getFieldsToRenderConfig(data);

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {fieldsToRender.map(
        ({ label, data, isSingleLineGridData, isFullWidth }) =>
          data && (
            <GameDetailsInfoItem
              key={label}
              gridName={label}
              gridData={data}
              isSingleLineGridData={isSingleLineGridData}
              isFullWidth={isFullWidth}
            />
          )
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
