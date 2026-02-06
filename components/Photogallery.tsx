"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const VISIBLE_SLIDES = 3.5;

  const hasPhotos = photos && photos.length > 0;
  const safePhotos = hasPhotos ? photos : [];
  const originalLen = safePhotos.length;

  const extendedPhotos = useMemo(() => {
    return hasPhotos 
      ? [...safePhotos, ...safePhotos, ...safePhotos, ...safePhotos, ...safePhotos] 
      : [];
  }, [safePhotos, hasPhotos]);

  const middleStartIndex = originalLen * 2; 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // REFS
  const posRef = useRef<number>(middleStartIndex); 
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideWidthRef = useRef<number>(0); // Store pixel width here

  const openModal = (index: number) => {
    const startPos = middleStartIndex + index;
    posRef.current = startPos;
    setBackgroundIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  // Measure slide width in pixels for smooth animation
  useEffect(() => {
    if (!isModalOpen || !trackRef.current) return;

    const measure = () => {
      if (trackRef.current) {
        // The track width is huge, so we measure the viewport or finding a single slide element would be better.
        // Easier: Calculate based on window width since we know logic is 100vw / VISIBLE_SLIDES
        const vw = window.innerWidth;
        slideWidthRef.current = vw / VISIBLE_SLIDES;
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen || originalLen === 0) return;

    const speed = 0.0005; 
    lastTimeRef.current = performance.now();

    const animate = (now: number) => {
      const last = lastTimeRef.current ?? now;
      const delta = now - last;
      lastTimeRef.current = now;

      // 1. Logic
      let next = posRef.current + speed * delta;
      
      const middleEnd = middleStartIndex + originalLen;

      if (next >= middleEnd) {
        next = next - originalLen;
      }
      if (next < middleStartIndex) {
        next = next + originalLen;
      }
      
      posRef.current = next;

      // 2. High-Performance Pixel Transform
      if (trackRef.current && slideWidthRef.current > 0) {
        const xPixels = next * slideWidthRef.current;
        // translate3d forces GPU acceleration
        trackRef.current.style.transform = `translate3d(-${xPixels}px, 0, 0)`;
      }

      // 3. Background Update
      const rawIndex = Math.round(next);
      const normalizedIndex = ((rawIndex % originalLen) + originalLen) % originalLen;
      
      setBackgroundIndex((prev) => {
        if (prev !== normalizedIndex) return normalizedIndex;
        return prev;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isModalOpen, originalLen, middleStartIndex]);

  if (!hasPhotos) return null;

  return (
    <>
      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
        {photos.slice(0, 2).map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => openModal(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white text-base md:text-lg font-semibold">
                View Gallery
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-lightorange z-50 flex flex-col items-center justify-center"
          onClick={closeModal}
        >
          {/* Background Image - Animation Removed */}
          <div className="hidden md:block absolute inset-0 w-full h-full z-[40] pointer-events-none">
            {photos[backgroundIndex] && (
              <Image
                key={backgroundIndex}
                src={photos[backgroundIndex].src}
                alt={photos[backgroundIndex].alt}
                fill
                className="object-cover scale-105" 
                sizes="100vw"
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl md:text-4xl hover:text-gray-300 transition-colors z-[70] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div
            className="relative w-full h-[60vh] flex items-center z-[60] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={trackRef}
              className="flex h-full items-center will-change-transform"
              style={{
                width: "max-content",
                // Initial render fallback
                transform: `translateX(calc(-${middleStartIndex} * (100vw / ${VISIBLE_SLIDES})))`,
              }}
            >
              {extendedPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex items-center justify-center px-2"
                  style={{
                    width: `calc(100vw / ${VISIBLE_SLIDES})`,
                    flex: `0 0 calc(100vw / ${VISIBLE_SLIDES})`,
                  }}
                >
                  <div className="relative w-full h-full">
                     <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={Math.abs(idx - middleStartIndex) < VISIBLE_SLIDES}
                     />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-xs z-[70] bg-black/50 px-4 py-2 rounded-full">
            Swipe to navigate
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
