// import data from "./data.json";
import GameDetailsAbout from "./GameDetailsAbout";
import GameDetailsHeader from "./GameDetailsHeader";
import GameDetailsMedia from "./GameDetailsMedia";
import useMediaQuery from "@/hooks/useMediaQuery";
import GameDetailsStores from "./GameDetailsStores";
import GameDetailsInfo from "./GameDetailsInfo";
import { transformGameData } from "@/lib/GameUtils";
import { GameDetails as GameInterface } from "@/types/GameTypes";

interface GameDetailsProps {
  data: GameInterface;
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
