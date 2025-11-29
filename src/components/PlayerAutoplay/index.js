"use client";

import { MediaPlayer, MediaOutlet } from "@vidstack/react";
import { VolumeOff } from "lucide-react";
import { Pause, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function PlayerAutoplay() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const updateState = () => {
      setIsPlaying(player.state.playing);
      if (!player.state.playing) {
        setShowGif(true);
      }
    };

    player.subscribe(updateState);

    const timer = setTimeout(() => {
      if (player.state.playing) setShowGif(false);
    }, 2500);

    return () => {
      player.unsubscribe(updateState);
      clearTimeout(timer);
    };
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;

    if (player.state.playing) {
      player.pause();
    } else {
      player.play();
      setShowGif(false);
    }
  };

  const enableAudio = () => {
    const player = playerRef.current;
    if (!player) return;

    player.muted = false;
    setMuted(false);
  };

  return (
    <div
      className="flex flex-col items-center gap-4 relative rounded-xl overflow-hidden w-full max-w-sm cursor-pointer"
      onClick={togglePlay}
    >
      <MediaPlayer
        ref={playerRef}
        title="Video"
        src="/video/move.mp4"
        playsInline
        autoplay
        muted={muted}
        className="w-full rounded-xl shadow-lg"
      >
        <MediaOutlet />
      </MediaPlayer>

      {showGif && (
        <img
          src="/assets/img/video-banner.gif"
          alt="video banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-xl"
        />
      )}

      {muted && !showGif && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            enableAudio();
          }}
          className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg"
        >
          <VolumeOff width={25} height={25} className="volume-pulse" /> Clique
          para ouvir
        </button>
      )}

      <button className="absolute bottom-2 left-2 z-10 px-3 py-2 bg-neutral-900 text-white rounded-lg opacity-80">
        {isPlaying ? (
          <Pause width={20} height={20} />
        ) : (
          <Play width={20} height={20} />
        )}
      </button>
    </div>
  );
}
