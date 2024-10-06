import React from 'react';
import ReactPlayer from 'react-player';

const VideoTile = ({ title, url }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        light={true}
        className="absolute top-0 left-0"
      />
    </div>
    <div className="p-4 flex-grow">
      <h3 className="text-xl font-bold text-tealBlue line-clamp-2">{title}</h3>
    </div>
  </div>
);

export default VideoTile;