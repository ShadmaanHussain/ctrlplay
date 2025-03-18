import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import data from "./media.json";

const GameDetailsMedia = () => {
  const [displayImage, setDisplayImage] = useState<string | null>(null);
  console.log(data);
  return (
    <div className="px-5">
        <div className="w-full aspect-w-16 aspect-h-9">
            {displayImage && <img src={displayImage}/>}
        </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {data.results.map((image, index) => (
            <CarouselItem
              key={image.id}
              className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              onClick={() => setDisplayImage(image.image)}
            >
              <div>
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <div className="w-full aspect-w-16 aspect-h-9">
                      <img
                        src={image.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GameDetailsMedia;
