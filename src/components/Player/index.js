"use client";

import { MediaPlayer, MediaOutlet } from "@vidstack/react";
import { Pause } from "lucide-react";
import { Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Video() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const updateState = () => setIsPlaying(player.state.playing);

    player.subscribe(updateState);

    return () => player.unsubscribe(updateState);
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;

    player.state.playing ? player.pause() : player.play();
  };

  return (
    <div
      className="flex flex-col items-center gap-4 relative rounded-xl overflow-hidden"
      onMouseLeave={() => setShowPlayButton(false)}
      onMouseEnter={() => setShowPlayButton(true)}
      onClick={togglePlay}
    >
      <MediaPlayer
        ref={playerRef}
        title="Video"
        src="/video/move.mp4"
        className="w-full max-w-sm rounded-xl shadow-lg"
      >
        <MediaOutlet />
      </MediaPlayer>

      {!isPlaying && (
        <img
          src="/assets/img/video-banner.gif"
          alt="video banner"
          className="rounded-xl overflow-hidden w-full h-[685px] max-w-sm absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        />
      )}

      <button
        onClick={togglePlay}
        className={`${
          showPlayButton && "opacity-100"
        } hover:text-red-400 z-10 cursor-pointer opacity-0 transition-opacity ease-linear absolute bottom-2 left-2 px-4 py-2 bg-neutral-900 text-white rounded-lg`}
      >
        {isPlaying ? (
          <Pause width={20} height={20} />
        ) : (
          <Play width={20} height={20} />
        )}
      </button>
    </div>
  );
}
