import { motion } from "framer-motion";
import { Header } from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

const TermsSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="prose prose-gray max-w-none">{children}</div>
  </motion.section>
);

const Terms = () => {
  return (
    <>
      <Header />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              Conditions Générales d'Utilisation
            </h1>

            <TermsSection title="1. Objet">
              <p>
                Les présentes CGU régissent l'utilisation de l'application
                LoveMap, qui permet aux utilisateurs de partager et découvrir
                des histoires de rencontres géolocalisées.
              </p>
            </TermsSection>

            <TermsSection title="2. Inscription et Compte">
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous devez avoir 18 ans ou plus pour utiliser LoveMap</li>
                <li>
                  Vos informations d'inscription doivent être exactes et à jour
                </li>
                <li>
                  Vous êtes responsable de la confidentialité de vos
                  identifiants
                </li>
                <li>Un seul compte par personne est autorisé</li>
              </ul>
            </TermsSection>

            <TermsSection title="3. Règles de Publication">
              <p>En utilisant LoveMap, vous vous engagez à :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Partager uniquement des histoires respectueuses et de bon goût
                </li>
                <li>
                  Ne pas publier de contenu explicite, pornographique ou
                  choquant
                </li>
                <li>
                  Respecter la vie privée des personnes mentionnées dans vos
                  histoires
                </li>
                <li>
                  Ne pas utiliser l'application à des fins commerciales ou
                  publicitaires
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="4. Modération">
              <p>LoveMap se réserve le droit de :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modérer tout contenu publié sur la plateforme</li>
                <li>Supprimer sans préavis tout contenu inapproprié</li>
                <li>
                  Suspendre ou supprimer les comptes ne respectant pas les
                  règles
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="5. Propriété Intellectuelle">
              <p>
                En publiant du contenu sur LoveMap, vous conservez vos droits
                mais accordez à LoveMap une licence non-exclusive d'utilisation
                et de diffusion sur la plateforme.
              </p>
            </TermsSection>

            <TermsSection title="6. Responsabilité">
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous êtes responsable du contenu que vous publiez</li>
                <li>
                  LoveMap ne peut être tenu responsable des rencontres
                  effectuées via l'application
                </li>
                <li>
                  LoveMap ne garantit pas l'exactitude des informations
                  partagées par les utilisateurs
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="7. Modifications">
              <p>
                LoveMap se réserve le droit de modifier ces conditions à tout
                moment. Les utilisateurs seront informés des changements
                importants.
              </p>
            </TermsSection>

            <TermsSection title="8. Contact">
              <p>
                Pour toute question concernant ces conditions, contactez-nous :
              </p>
              <p className="mt-2">
                <a
                  href="mailto:contact@simats.dev"
                  className="text-rose-600 hover:text-rose-700"
                >
                  contact@simats.dev
                </a>
              </p>
            </TermsSection>

            <div className="mt-12 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
