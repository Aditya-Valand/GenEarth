import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { PlayIcon, PauseIcon } from 'lucide-react';

const PodcastTile = ({ title, url, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'bg-opacity-50' : 'bg-opacity-0'}`}>
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <PauseIcon size={48} color="white" className="opacity-100" />
            ) : (
              <PlayIcon size={48} color="white" className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            )}
          </button>
        </div>
        {hasInteracted && (
          <ReactPlayer
            ref={playerRef}
            url={url}
            width="0"
            height="0"
            playing={isPlaying}
            controls={false}
            config={{
              youtube: {
                playerVars: { autoplay: 0 }
              }
            }}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-tealBlue truncate">{title}</h3>
      </div>
    </div>
  );
};

export default PodcastTile;