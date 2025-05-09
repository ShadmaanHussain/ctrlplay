// import data from "./data.json";
import GameDetailsAbout from "./GameDetailsAbout";
import GameDetailsHeader from "./GameDetailsHeader";
import GameDetailsMedia from "./GameDetailsMedia";
import useMediaQuery from "@/hooks/useMediaQuery";
import GameDetailsStores from "./GameDetailsStores";
import GameDetailsInfo from "./GameDetailsInfo";
import { isOnPlatform } from "@/lib/GameUtils";
import { GameDetails as GameInterface } from "@/types/GameTypes";

interface GameDetailsProps {
  data: GameInterface;
}

const transformGameData = (data: GameInterface) => {
  const gameHeaderData = {
    isOnPC: isOnPlatform(data?.parent_platforms ?? [], "pc"),
    isOnPlaystation: isOnPlatform(data?.parent_platforms ?? [], "playstation"),
    isOnXbox: isOnPlatform(data?.parent_platforms ?? [], "xbox"),
    gameName: data?.name || "Unknown Game",
    released: data?.released || null,
    rating: data?.rating || null,
    totalRatings: data?.ratings_count || null,
  };

  const gameInfoData = {
    platforms: data?.platforms ?? [],
    genres: data?.genres ?? [],
    releaseDate: data?.released,
    developers: data?.developers ?? [],
    publishers: data?.publishers ?? [],
    website: data?.website,
    tags: data?.tags ?? [],
  }

  return {
    gameHeaderData,
    gameInfoData,
  };
}

const GameDetails: React.FC<GameDetailsProps> = ({ data }) => {
  const { isTabletView } = useMediaQuery();
  console.log(data);

  const { gameHeaderData, gameInfoData } = transformGameData(data);

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
        <GameDetailsInfo data={gameInfoData} />
      </div>
      <div className="w-full md:w-[40%]">
        {!isTabletView && <GameDetailsMedia />}
        {data?.stores && <GameDetailsStores stores={data.stores} />}
      </div>
    </div>
  );
};

export default GameDetails;
