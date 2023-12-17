import React from "react";

export function BackgroundVideo({src}: {src: string}) {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed top-0 z-[-1] h-screen w-screen object-cover blur-sm filter"
      style={{}}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
