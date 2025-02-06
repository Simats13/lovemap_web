import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-4 cursor-pointer">
              <img
                src="/icones/logo_without_back.png"
                alt="Logo"
                className="h-10"
              />
              <span className="font-candaTawa text-2xl text-black">
                LoveMap 💘
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
