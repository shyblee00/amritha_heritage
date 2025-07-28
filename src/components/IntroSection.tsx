import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const toggleMute1 = () => {
    if (videoRef1.current) {
      videoRef1.current.muted = !isMuted1;
      setIsMuted1(!isMuted1);
    }
  };

  const toggleMute2 = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !isMuted2;
      setIsMuted2(!isMuted2);
    }
  };

  return (
    <div
      className="w-full bg-white"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* First Section - Mobile-First Responsive Layout */}
      <div
        ref={sectionRef}
        className="min-h-screen flex flex-col bg-white"
      >
        {/* Mobile Layout: Video with more space from top */}
        <div className="block md:hidden">
          {/* More space from top */}
          <div className="h-12 sm:h-16 md:h-20 bg-white"></div>
          
          {/* Video Section - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-3 sm:mx-4 mb-6 sm:mb-8"
          >
            <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden shadow-xl">
              <video
                ref={videoRef1}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/videos/intro_1.mp4" type="video/mp4" />
                <source
                  src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Mute Button - Mobile */}
              <button
                onClick={toggleMute1}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-amber-800/70 transition-all duration-300 shadow-lg"
              >
                {isMuted1 ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Content Section - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-4 sm:px-6 pb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-5xl font-medium text-[#3F1800] leading-tight mb-6 text-center"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block"
              >
                Discover
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-semibold block"
              >
                Amrítha Heritage
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, rotateX: 90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 80 }}
              className="text-xl sm:text-2xl text-[#55453c] italic leading-relaxed mb-6 text-center font-medium"
            >
              'A graceful revival of the past, a retreat into elegance, a
              tribute to Thiruvananthapuram's heritage.'
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-5 text-center font-normal"
              >
                Once known as Essenden Bungalow, this beautifully restored
                five-room villa blends Travancore's colonial charm with serene
                surroundings and vintage architecture.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-5 text-center font-normal"
              >
                Surrounded by gardens and timeless grace, it also marks the return
                of the iconic Kohinoor Restaurant, offering a blend of Indian and
                European flavours with open-lawn dining.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 text-center font-normal"
              >
                Experience a stay where the past lives on — gracefully.
              </motion.p>
            </motion.div>


          </motion.div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden md:flex min-h-screen">
          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-2/5 relative bg-white pl-[8%]"
          >
            <div className="relative w-full h-4/5 mt-16">
              <video
                ref={videoRef1}
                className="w-full h-full object-cover rounded-none"
                poster="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/videos/intro_1.mp4" type="video/mp4" />
                <source
                  src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Mute Button - Desktop */}
              <button
                onClick={toggleMute1}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-amber-800/70 transition-all duration-300"
              >
                {isMuted1 ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-3/5 bg-white flex flex-col justify-center pr-[8%] pl-12 py-20"
          >
            <div className="max-w-none">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl font-normal text-[#3F1800] leading-tight mb-8"
              >
                Discover
                <br />
                <span className="font-normal text-[#3F1800]">Amrítha Heritage</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-700 italic leading-relaxed pl-20 pr-12 mb-12"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                }}
              >
                'A graceful revival of the past, a retreat into elegance, a
                tribute to Thiruvananthapuram's heritage.'
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-lg text-black leading-relaxed px-20 mb-8"
                style={{
                  fontWeight: 800,
                  fontSize: "1.5rem",
                }}
              >
                Once known as Essenden Bungalow, this beautifully restored
                five-room villa blends Travancore's colonial charm with serene
                surroundings and vintage architecture.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-lg text-black leading-relaxed pl-20 pr-20 mb-8"
                style={{
                  fontWeight: 800,
                  fontSize: "1.5rem",

                }}
              >
                Surrounded by gardens and timeless grace, it also marks the return
                of the iconic Kohinoor Restaurant, offering a blend of Indian and
                European flavours with open-lawn dining.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg text-black leading-relaxed pl-20 pr-20 mb-16"
                style={{
                  fontWeight: 800,
                  fontSize: "1.5rem",

                }}
              >
                Experience a stay where the past lives on — gracefully.
              </motion.p>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Section - Full Width Video with Enhanced Mobile Experience */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full bg-gray-50 py-0"
      >
        <div className="w-full h-[70vh] sm:h-[80vh] md:h-screen relative flex items-center justify-center">
          <video
            ref={videoRef2}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/intro_2.mp4" type="video/mp4" />
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Mute Button - Enhanced for Mobile */}
          <button
            onClick={toggleMute2}
            className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-amber-800/70 transition-all duration-300 z-10 shadow-lg"
          >
            {isMuted2 ? (
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>

          {/* Enhanced Overlay for Mobile */}
  
        </div>
      </motion.div>
      
      {/* White space for disconnection to next page */}
      <div className="w-full h-16 sm:h-20 md:h-24 lg:h-32 bg-white"></div>
    </div>
  );
}
