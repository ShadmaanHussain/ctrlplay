import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Ellipsis } from "lucide-react";
import { GameScreenshot } from "@/types/GameTypes";

interface GameScreenshotsProps {
  screenshots: GameScreenshot[];
}

const GameScreenshots: React.FC<GameScreenshotsProps> = ({ screenshots }) => {
  const [startIndex, setStartIndex] = useState(0);
  const slicedData = screenshots.slice(0, 3);
  
  return (
    <Dialog>
      <div className="flex md:grid md:grid-cols-2 gap-2">
        {slicedData.map((screenshot, index) => (
          <DialogTrigger asChild key={screenshot.id}>
              <button className="md:min-w-full min-w-[300px]" onClick={() => setStartIndex(index)}>
                <img src={screenshot.image} alt="" loading="lazy" />
              </button>
          </DialogTrigger>
        ))}
        <DialogTrigger asChild>
            <button
              title="View all"
              className="md:min-w-full min-w-[300px] bg-muted hover:bg-muted-foreground transition duration-300 text-muted-foreground hover:text-muted"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <Ellipsis className="h-10 w-10 m-auto" />
              </div>
            </button>
        </DialogTrigger>
      </div>

      <DialogContent className="py-16 px-10 text-white bg-transparent border-none max-w-screen h-screen flex justify-center items-center">
        <Carousel
          className="w-full max-w-[70vw]"
          opts={{
            startIndex: startIndex,
          }}
        >
          <CarouselContent>
            {screenshots.map((img) => (
              <CarouselItem key={img.id}>
                <img src={img.image} alt="" loading="lazy" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default GameScreenshots;
