import React from "react";
import data from "./media.json";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ellipsis } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GameDetailsScreenshots = () => {
  const slicedData = data.results.slice(0, 3);
  return (
    <div>
      <Dialog>
        <div className="grid grid-cols-2 gap-2">
          {slicedData.map((screenshot) => (
            <DialogTrigger asChild key={screenshot.id}>
              <button className="w-full">
                <img src={screenshot.image} alt="" loading="lazy" />
              </button>
            </DialogTrigger>
          ))}
          <DialogTrigger asChild>
            <button
              title="View all"
              className="w-full bg-muted hover:bg-muted-foreground transition duration-300 text-muted-foreground hover:text-muted"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <Ellipsis className="h-10 w-10 m-auto" />
              </div>
            </button>
          </DialogTrigger>
        </div>

        <DialogContent className="py-16 px-10 text-white bg-transparent border-none max-w-screen h-screen flex justify-center items-center">
          <Carousel className="w-full max-w-[80vw]">
            <CarouselContent>
              {data.results.map((img) => (
                <CarouselItem key={img.id}>
                  <img src={img.image} alt="" loading="lazy"/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameDetailsScreenshots;
