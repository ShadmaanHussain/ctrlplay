import React from "react";

const GameVideo = () => {
  return (
    <video controls autoPlay muted loop className="w-full mb-2">
      <source
        src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default GameVideo;
