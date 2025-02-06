import { motion } from "framer-motion";
import { Header } from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

const PrivacySection = ({
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

const Privacy = () => {
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
              Politique de Confidentialité
            </h1>

            <PrivacySection title="Notre Engagement">
              <p>
                Chez LoveMap, nous prenons la protection de vos données
                personnelles très au sérieux. Notre objectif est de vous
                permettre de partager vos histoires d'amour tout en gardant le
                contrôle sur vos informations personnelles.
              </p>
            </PrivacySection>

            <PrivacySection title="Informations Collectées">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Informations de base :</strong> email, nom
                  d'utilisateur
                </li>
                <li>
                  <strong>Contenu partagé :</strong> vos histoires, les lieux
                  associés
                </li>
                <li>
                  <strong>Données de localisation :</strong> uniquement pour
                  afficher les histoires sur la carte
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="Contrôle de Vos Données">
              <p>
                Vous avez le contrôle total sur vos histoires et pouvez à tout
                moment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modifier ou supprimer vos histoires</li>
                <li>
                  Choisir qui peut voir vos publications (public, amis, privé)
                </li>
                <li>Télécharger ou supprimer vos données</li>
                <li>Désactiver temporairement ou supprimer votre compte</li>
              </ul>
            </PrivacySection>

            <PrivacySection title="Protection des Données">
              <p>
                Nous utilisons des technologies de cryptage avancées pour
                protéger vos données personnelles. Nos serveurs sont hébergés
                dans l'Union Européenne et respectent le RGPD.
              </p>
            </PrivacySection>

            <PrivacySection title="Partage des Données">
              <p>
                Nous ne vendons jamais vos données personnelles. Les seules
                informations partagées sont celles que vous choisissez de rendre
                publiques dans vos histoires.
              </p>
            </PrivacySection>

            <PrivacySection title="Cookies et Traceurs">
              <p>
                Nous utilisons uniquement les cookies essentiels au
                fonctionnement de l'application. Vous pouvez les gérer dans vos
                paramètres.
              </p>
            </PrivacySection>

            <PrivacySection title="Nous Contacter">
              <p>
                Pour toute question concernant vos données personnelles,
                contactez notre délégué à la protection des données :
              </p>
              <p className="mt-2">
                <a
                  href="mailto:contact@simats.dev"
                  className="text-rose-600 hover:text-rose-700"
                >
                  contact@simats.dev
                </a>
              </p>
            </PrivacySection>

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

export default Privacy;
