import React, { useState } from "react";
import data from "./data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GameDetailsAbout from "./GameDetailsAbout";
import GameDetailsHeader from "./GameDetailsHeader";
import GameDetailsScreenshots from "./GameDetailsScreenshots";

const GameDetails = () => {
  console.log(data);
  const isOnPlaystation =
    data?.parent_platforms?.some(
      (platform) => platform.platform.slug === "playstation"
    ) ?? false;
  const isOnPC =
    data?.parent_platforms?.some(
      (platform) => platform.platform.slug === "pc"
    ) ?? false;
  const isOnXbox =
    data?.parent_platforms?.some(
      (platform) => platform.platform.slug === "xbox"
    ) ?? false;

  return (
    <div className="flex gap-7">
      <div className="w-[60%]">
        <GameDetailsHeader
          isOnPC={isOnPC}
          isOnPlaystation={isOnPlaystation}
          isOnXbox={isOnXbox}
          gameName={data?.name || "Unknown Game"}
          released={data?.released ?? null}
          rating={data?.rating ?? null}
          totalRatings={data?.ratings_count ?? null}
        />
        {data?.description && (
          <GameDetailsAbout description={data.description} />
        )}
      </div>
      <div className="w-[40%]">
        <video controls autoPlay muted loop className="w-full mb-2">
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <GameDetailsScreenshots />
      </div>
    </div>
  );
};

export default GameDetails;
