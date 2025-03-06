import React from 'react'
import data from './data.json'

const GameDetails = () => {
    console.log(data);
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
        <div>GameDetails</div>
      </div>
    </div>
  )
}

export default GameDetails