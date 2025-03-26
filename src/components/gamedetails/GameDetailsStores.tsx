import React from "react";
import { Button } from "../ui/button";
import { GameStores } from "@/types/GameTypes";
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { SiGogdotcom } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

interface GameDetailsStoresProps {
  stores: GameStores[];
}

const storeIcons: Record<string, JSX.Element> = {
  steam: <FaSteam className="!size-5" />,
  "playstation-store": <FaPlaystation className="!size-5" />,
  "xbox-store": <FaXbox className="!size-5" />,
  xbox360: <FaXbox className="!size-5" />,
  "apple-appstore": <GrAppleAppStore className="!size-5" />,
  gog: <SiGogdotcom className="!size-5" />,
  nintendo: <BsNintendoSwitch className="!size-5" />,
  "google-play": <FaGooglePlay className="!size-5" />,
  itch: <FaGamepad className="!size-5" />,
  "epic-games": <SiEpicgames className="!size-5" />,
};

const GameDetailsStores: React.FC<GameDetailsStoresProps> = ({ stores }) => {
  return (
    <>
      <h3 className="text-lg font-light mb-4">Where to buy</h3>
      <div className="grid grid-cols-2 gap-4">
        {stores.map((store) => (
          <a key={store.id} href={`http://${store.store.domain}`} target="_blank">
            <Button variant="secondary" className="py-6 w-full">
              {storeIcons[store.store.slug ?? ""] ?? <FaGamepad className="!size-5" />}
              <span className="text-ellipsis overflow-hidden">{store.store.name}</span>
            </Button>
          </a>
        ))}
      </div>
    </>
  );
};

export default GameDetailsStores;
