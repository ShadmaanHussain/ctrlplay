import data from "./data.json";
import GameDetailsAbout from "./GameDetailsAbout";
import GameDetailsHeader from "./GameDetailsHeader";
import GameDetailsMedia from "./GameDetailsMedia";
import useMediaQuery from "@/hooks/useMediaQuery";
import GameDetailsStores from "./GameDetailsStores";
import GameDetailsInfo from "./GameDetailsInfo";
import { ParentPlatform } from "@/types/GameTypes";

const isOnPlatform = (platforms: ParentPlatform[], slug: string) => {
  return platforms?.some((platform) => platform.platform.slug === slug) ?? false;
}

const GameDetails = () => {
  const { isTabletView } = useMediaQuery();
  console.log(data);

  const gameHeaderData = {
    isOnPC: isOnPlatform(data?.parent_platforms, "pc"),
    isOnPlaystation: isOnPlatform(data?.parent_platforms, "playstation"),
    isOnXbox: isOnPlatform(data?.parent_platforms, "xbox"),
    gameName: data?.name || "Unknown Game",
    released: data?.released ?? null,
    rating: data?.rating ?? null,
    totalRatings: data?.ratings_count ?? null,
  }

  return (
    <div className="flex gap-7 flex-col md:flex-row">
      <div className="w-full md:w-[60%]">
        <GameDetailsHeader
          data={gameHeaderData}
        />
        {isTabletView && <GameDetailsMedia />}
        {data?.description && (
          <GameDetailsAbout description={data.description} />
        )}
        <GameDetailsInfo />
      </div>
      <div className="w-full md:w-[40%]">
        {!isTabletView && <GameDetailsMedia />}
        {data?.stores && <GameDetailsStores stores={data.stores} />}
      </div>
    </div>
  );
};

export default GameDetails;
