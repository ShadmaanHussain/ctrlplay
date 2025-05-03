import React from "react";

const GameDetailsInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Platforms
        </h4>
        <div className="text-md">
          PC, Xbox Series S/X, PC, Xbox Series S/X, PC, Xbox Series S/X, PC,
          Xbox Series S/X,
        </div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">Genre</h4>
        <div className="text-md">PC, Xbox Series S/X</div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Release Date
        </h4>
        <div className="text-md">PC, Xbox Series S/X</div>
      </div>
      <div className=""> 
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Developers - Make Interface
        </h4>
        <div className="text-md">PC, Xbox Series S/X</div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Publishers - Make Interface
        </h4>
        <div className="text-md">PC, Xbox Series S/X</div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">
          Website
        </h4>
        <div className="text-md">PC, Xbox Series S/X</div>
      </div>
    </div>
  );
};

export default GameDetailsInfo;
