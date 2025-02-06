import { motion } from "framer-motion";
import PhoneMockup from "../molecules/PhoneMockup";

const steps = [
  {
    title: "Crée ton compte",
    description: "Rejoins la communauté LoveMap en quelques secondes.",
  },
  {
    title: "Partage tes histoires",
    description: "Place tes anecdotes de rencontres sur la carte interactive.",
  },
  {
    title: "Explore les rencontres",
    description: "Découvre les histoires d'amour autour de toi.",
  },
  {
    title: "Interagis et vote",
    description: "Réagis aux histoires des autres et deviens populaire !",
  },
];

const screenshots = [
  "/images/createAccount.PNG",
  "/images/addLovePin.png",
  "/images/modalPin.png",
  "/images/account.png",
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600">
            Commence à partager tes histoires en 4 étapes simples
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <PhoneMockup screenshots={screenshots} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
