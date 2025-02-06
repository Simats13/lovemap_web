const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">LoveMap</h3>
            <p className="text-sm">
              Partagez vos plus belles histoires d'amour et découvrez celles des
              autres.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Guide de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Règles de la communauté
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Signaler un abus
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/terms"
                  className="hover:text-rose-400 transition-colors"
                >
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-rose-400 transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© 2025 LoveMap. Tous droits réservés.</p>
          <p className="mt-2 text-gray-400">
            Fait avec ❤️ pour tous les amoureux
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
