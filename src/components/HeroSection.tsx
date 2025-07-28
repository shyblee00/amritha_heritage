"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

// ImagesSlider Component (integrated)
const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut" as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {/* Overlay removed - no vignette effect */}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center sm:object-cover"
          />
        </AnimatePresence>
      )}
    </div>
  );
};

// Main HeroSection Component
export default function HeroSection() {
  // Replace these placeholder URLs with your 4 villa hotel images
  const images = [
    "/assets/images/hero/hero-1.jpg", // Replace with your first villa image
    "/assets/images/hero/hero-2.jpg", // Replace with your second villa image
    "/assets/images/hero/hero-3.jpg", // Replace with your third villa image
    "/assets/images/hero/hero-4.jpg", 
    "/assets/images/hero/hero-5.jpg", // Replace with your fourth villa image
    "/assets/images/hero/hero-6.jpg", // Replace with your fourth villa image
    // Replace with your fourth villa image
  ];

  return (
    <ImagesSlider
      className="h-screen w-full min-h-screen" // Full screen height and width with mobile optimization
      images={images}
      autoplay={true}
      direction="up"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-end items-center px-2 sm:px-4 absolute bottom-0 left-0 right-0 pb-2 sm:pb-4"
      >
        {/* Main Heading */}
        <motion.h1
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white py-2 sm:py-4 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 800,
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Promise of Well-Being
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white text-center mb-4 sm:mb-6 md:mb-8 font-light leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where Tradition Meets Modern Comfort
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}









