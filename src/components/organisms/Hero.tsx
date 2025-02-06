import StoreButton from "../atoms/StoreButton";
import PhoneMockup from "../molecules/PhoneMockup";
import { motion } from "framer-motion";

const screenshots = [
  "/images/splashscreen.png",
  "/images/homepage.png",
  "/images/friends.png",
  "/images/lovePin.png",
];

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-candaTawa text-5xl text-rose-600">
              LoveMap 💘
            </span>

            <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
              Partagez vos histoires d'amour sur la carte
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Immortalisez vos rencontres, découvrez celles des autres et créez
              une carte interactive remplie d'amour et d'anecdotes uniques.
            </p>
            <div className="flex flex-wrap gap-4">
              <StoreButton store="apple" />
              <StoreButton store="google" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-200/30 via-pink-300/30 to-rose-200/30 opacity-30 blur-xl" />
          <PhoneMockup screenshots={screenshots} autoplayInterval={4000} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-20 text-center"
      >
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Partager vos plus belles histoires d&apos;amour et plus si affinités 👀
        </p>
        <p className="text-gray-600">
          Rejoignez notre communauté et partagez vos plus belles rencontres
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
