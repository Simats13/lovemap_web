import { useEffect } from "react";
import { Header } from "../components/organisms/Header";
import { Hero } from "../components/organisms/Hero";
import Features from "../components/organisms/Features";
import HowItWorks from "../components/organisms/HowItWorks";
import FAQ from "../components/organisms/FAQ";
import Footer from "../components/organisms/Footer";
import MobileBanner from "../components/MobileBanner";
import { motion } from "framer-motion";
import DailyShots from "../components/organisms/DailyShots";

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 overflow-x-hidden bg-gradient-to-b from-rose-100 to-white">
        <Hero />

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="py-16 md:py-24 bg-pink-50"
        >
          <Features />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full bg-white"
        >
          <DailyShots />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white"
        >
          <HowItWorks />
        </motion.section>

        <FAQ />
      </main>
      <Footer />
      <MobileBanner />
    </>
  );
};

export default LandingPage;
