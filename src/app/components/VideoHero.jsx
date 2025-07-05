"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function VideoHero({
  videoSrc = "/imgs/profile-video.mp4",
  alt = "Julie Vogh",
  images = ["/imgs/julie9.jpeg", "/imgs/julie1.jpeg", "/imgs/julie6.jpeg"], // add your images here
}) {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef();

  // Når videoen slutter, vis billeder
  const handleVideoEnd = () => setShowImage(true);

  return (
    <div className="bg-gray-200 aspect-video w-full overflow-hidden rounded-lg flex items-center justify-center">
      {/* VIDEOEN */}
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
        // SMOOTH BILLEDER MED ANIMATION
        <div className="flex w-full h-full">
          {images.map((src, i) => (
            <AnimatePresence key={src}>
              <motion.img
                src={src}
                alt={`${alt} ${i + 1}`}
                className="w-1/3 h-full object-cover object-[center_20%]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.2, // Stagger - ét billede ad gangen
                  ease: "easeOut",
                }}
              />
            </AnimatePresence>
          ))}
        </div>
      )}
    </div>
  );
}
