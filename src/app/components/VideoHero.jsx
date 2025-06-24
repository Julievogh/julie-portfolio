"use client";
import { useRef, useState } from "react";

export default function VideoHero({
  videoSrc = "/imgs/profile-video.mp4",
  alt = "Julie Vogh",
  images = ["/imgs/julie7.jpeg", "/imgs/julie1.jpeg", "/imgs/julie6.jpeg"], // add your images here
}) {
  const [videoCount, setVideoCount] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef();

  const handleVideoEnd = () => {
    if (videoCount < 0) {
      setVideoCount((c) => c + 0);
      videoRef.current.play();
    } else {
      setShowImage(true);
    }
  };

  return (
    <div className="bg-gray-200 aspect-video w-full overflow-hidden rounded-lg flex items-center justify-center">
      {!showImage ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={images[0]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      ) : (
        <div className="flex w-full h-full">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${alt} ${i + 1}`}
              className="w-1/3 h-full object-cover object-[center_20%]"
            />
          ))}
        </div>
      )}
    </div>
  );
}
