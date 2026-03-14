import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function PreviousSessionCard({ session }) {
  return (
    <div className="w-[298.66px] max-w-full bg-white rounded-lg overflow-hidden border border-bdColor">
      <div className="relative aspect-video group cursor-pointer">
        <img
          src={session.image || "/images/live-placeholder.png"}
          alt={session.title}
          className="w-full h-full object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-primary shadow-lg group-hover:scale-110 transition-transform">
            <FaPlay className="size-5 ml-1" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-[12px] font-medium z-10">
          {session.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[15px] sm:text-[16px] text-grayDark line-clamp-1">
          {session.title}
        </h3>
        <p className="text-textMuted text-[13px] mt-1">
          Streamed {session.streamed}
        </p>
      </div>
    </div>
  );
}
