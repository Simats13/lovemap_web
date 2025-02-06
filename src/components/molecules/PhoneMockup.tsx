import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PhoneMockupProps {
  screenshots: string[];
  currentIndex?: number;
  autoplayInterval?: number; // Intervalle en millisecondes
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screenshots,
  currentIndex = 0,
  autoplayInterval = 3000, // 3 secondes par défaut
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  // Pause le défilement automatique au survol
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [screenshots.length, autoplayInterval, isPaused]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const previousImage = () => {
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <div
      className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="relative h-full">
          {screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {screenshots.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full"
              >
                <ChevronLeftIcon className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full"
              >
                <ChevronRightIcon className="w-4 h-4 text-white" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
