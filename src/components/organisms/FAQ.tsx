import { motion } from "framer-motion";
import FAQItem from "../molecules/FAQItem";

const faqItems = [
  {
    question: "Est-ce que mes histoires sont privées ?",
    answer:
      "Par défaut, vos histoires sont publiques mais anonymes. Vous pouvez choisir de les partager uniquement avec vos amis ou de les garder totalement privées dans vos souvenirs personnels.",
  },
  {
    question: "Comment sont modérées les histoires ?",
    answer:
      "Notre communauté s'engage à partager des histoires de bon goût. Un système de signalement et une équipe de modération veillent à maintenir une ambiance fun mais respectueuse.",
  },
  {
    question: "Puis-je modifier ou supprimer mes histoires ?",
    answer:
      "Bien sûr ! Vous pouvez modifier ou supprimer vos histoires à tout moment. Les lieux et détails peuvent être ajustés selon vos souhaits.",
  },
  {
    question: "Comment fonctionne le système de notation ?",
    answer:
      "Les utilisateurs peuvent noter les histoires de 1 à 5 étoiles. Les meilleures histoires sont mises en avant dans notre section 'Coups de cœur' hebdomadaire.",
  },
  {
    question: "Les personnes mentionnées peuvent-elles voir mes histoires ?",
    answer:
      "Seuls les lieux sont automatiquement tagués. Vous choisissez d'identifier ou non les personnes concernées, et elles devront accepter d'être mentionnées.",
  },
  {
    question: "Comment protéger mon anonymat ?",
    answer:
      "Vous pouvez utiliser un pseudo, masquer certains détails des lieux.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir pour partager vos histoires en toute
            sérénité
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
