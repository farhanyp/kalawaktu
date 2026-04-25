"use client";

import { useState, useRef, useEffect } from "react";
import { FiMusic, FiPause, FiPlay } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type MusicPlayerProps = {
  src: string;
  songTitle: string;
  artist: string;
};

export function MusicPlayer({ src, songTitle, artist }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay diblokir oleh browser. Menunggu interaksi user.");
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-60 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <audio ref={audioRef} src={src} loop playsInline />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: 20 }}
            className="mr-2 flex flex-col items-end pointer-events-none"
          >
            <div className="rounded-lg bg-black/60 px-4 py-2 backdrop-blur-md border border-white/10 shadow-2xl">
              <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white">
                {songTitle}
              </p>
              <p className="whitespace-nowrap text-[9px] text-stone-400 uppercase tracking-tighter">
                {artist}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={togglePlay}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90 md:h-14 md:w-14 ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20 ${!isPlaying && "hidden"}`}
        />

        {isPlaying ? (
          isHovered ? (
            <FiPause size={20} />
          ) : (
            <FiMusic size={20} />
          )
        ) : (
          <FiPlay size={20} className="ml-1" />
        )}
      </button>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
