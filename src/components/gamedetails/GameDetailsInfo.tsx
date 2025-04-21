import React from 'react'
import data from "./data.json";

const GameDetailsInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">Platforms</h4>
        <div className='text-md'>
            PC, Xbox Series S/X
        </div>
      </div>
      <div className="">
        <h4 className="text-muted-foreground font-bold text-sm mb-2">Platforms</h4>
        <div className='text-md'>
            PC, Xbox Series S/X
        </div>
      </div>
      <div className="">Column 1 Content</div>
      <div className="">Column 2 Content</div>
    </div>
  )
}

export default GameDetailsInfo