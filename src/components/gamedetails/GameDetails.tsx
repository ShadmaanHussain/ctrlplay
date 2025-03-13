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

const GameDetails = () => {
  console.log(data);
  const isOnPlaystation = data?.parent_platforms?.some(
    (platform) => platform.platform.slug === "playstation"
  ) ?? false;
  const isOnPC = data?.parent_platforms?.some(
    (platform) => platform.platform.slug === "pc"
  ) ?? false;
  const isOnXbox = data?.parent_platforms?.some(
    (platform) => platform.platform.slug === "xbox"
  ) ?? false;

  return (
    <>
      <GameDetailsHeader
        isOnPC={isOnPC}
        isOnPlaystation={isOnPlaystation}
        isOnXbox={isOnXbox}
        gameName={data?.name || "Unknown Game"}
        released={data?.released ?? null}
        rating={data?.rating ?? null}
        totalRatings={data?.ratings_count ?? null}
      />
      <div className="flex gap-7">
        <div className="w-[70%]">
          <video controls autoPlay muted className="w-full rounded-xl">
            <source
              src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {data?.description && <GameDetailsAbout description={data.description} />}
        </div>
        <div className="w-[30%]"></div>
      </div>
    </>
  );
};

export default GameDetails;
