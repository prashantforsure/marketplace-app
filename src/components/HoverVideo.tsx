// components/HoverVideo.tsx
"use client"
import { useRef } from 'react';

interface HoverVideoProps {
  src: string;
  alt: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ src, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        muted
        loop
      />
    </div>
  );
};

export default HoverVideo;

