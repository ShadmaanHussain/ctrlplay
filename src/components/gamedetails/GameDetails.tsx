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
import GameDetailsMedia from "./GameDetailsMedia";
import useMediaQuery from "@/hooks/useMediaQuery";

const GameDetails = () => {
  const { isTabletView } = useMediaQuery();
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
    <div className="flex gap-7 flex-col md:flex-row">
      <div className="w-full md:w-[60%]">
        <GameDetailsHeader
          isOnPC={isOnPC}
          isOnPlaystation={isOnPlaystation}
          isOnXbox={isOnXbox}
          gameName={data?.name || "Unknown Game"}
          released={data?.released ?? null}
          rating={data?.rating ?? null}
          totalRatings={data?.ratings_count ?? null}
        />
        {isTabletView && <GameDetailsMedia />}
        {data?.description && (
          <GameDetailsAbout description={data.description} />
        )}
        
      </div>
      <div className="w-full md:w-[40%]">
        {!isTabletView && <GameDetailsMedia />}
      </div>
    </div>
  );
};

export default GameDetails;
