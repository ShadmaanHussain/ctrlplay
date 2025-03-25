import data from "./media.json";
import GameVideo from "./GameVideo";
import GameScreenshots from "./GameScreenshots";

const GameDetailsMedia = () => {

  return (
    <div className="flex mb-8 gap-2 overflow-hidden overflow-x-scroll md:block md:overflow-x-auto">
      <div className="md:min-w-full min-w-[300px]">
        <GameVideo />
      </div>
      <div>
        <GameScreenshots screenshots={data.results} />
      </div>
    </div>
  );
};

export default GameDetailsMedia;
