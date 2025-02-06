import { useEffect, useState } from "react";

const MobileBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsVisible(isMobile);
  }, []);

  if (!isVisible) return null;

  const appScheme = "lovemap://";
  const storeUrl = isIOS
    ? "https://apps.apple.com/app/lovemap/id123456789"
    : "https://play.google.com/store/apps/details?id=com.lovemap.app";

  const badgeUrl = isIOS
    ? "/icones/apple-store.svg"
    : "/icones/google-play.svg";

  const badgeAlt = isIOS
    ? "Télécharger sur l'App Store"
    : "Disponible sur Google Play";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-3 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700 text-center mb-1">
            Téléchargez notre application mobile sur votre smartphone
          </p>
          <div className="flex justify-center items-center">
            <a
              href={storeUrl}
              className="h-10"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = appScheme;
                setTimeout(() => {
                  window.location.href = storeUrl;
                }, 500);
              }}
            >
              <img src={badgeUrl} alt={badgeAlt} className="h-full w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
