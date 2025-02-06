interface StoreButtonProps {
  store: "apple" | "google";
}

const StoreButton = ({ store }: StoreButtonProps) => {
  const storeData = {
    apple: {
      text: "Télécharger sur l'App Store",
      icon: "/icones/apple-store.svg",
      href: "#",
    },
    google: {
      text: "Disponible sur Google Play",
      icon: "/icones/google-play.svg",
      href: "#",
    },
  };

  const { text, icon, href } = storeData[store];

  return (
    <a
      href={href}
      className="flex items-center px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-gray-50 transition-all duration-300"
    >
      <img src={icon} alt={text} className="w-6 h-6 mr-3" />
      <span>{text}</span>
    </a>
  );
};

export default StoreButton;
