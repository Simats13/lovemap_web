import { motion } from "framer-motion";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "text-yellow-400"
              : star - rating <= 0.5
              ? "text-yellow-400/50"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const DailyShots = () => {
  const stories = [
    {
      id: 1,
      author: "Sophie, 27 ans",
      location: "Le Baron, Paris",
      date: "1 février 2025",
      content:
        "Il m'a fait danser toute la nuit... Quand il m'a raccompagnée, on s'est embrassés sous la pluie comme dans les films. Le videur nous a applaudis ! 🌧️💋",
      likes: 234,
      notes: 4.5,
    },
    {
      id: 2,
      author: "Thomas, 31 ans",
      location: "Plage de Pampelonne, Saint-Tropez",
      date: "1 janvier 2025",
      content:
        "Elle était sublime dans son maillot rouge. J'ai fait semblant de me noyer pour qu'elle vienne me sauver (oui, je sais, c'est nul 😅). 3 ans plus tard, on est mariés ! 🏖️❤️",
      likes: 187,
      notes: 4.5,
    },
    {
      id: 3,
      author: "Emma, 24 ans",
      location: "Rooftop du Perchoir, Paris",
      date: "25 janvier 2025",
      content:
        "Il m'a invitée à 'voir la vue'... La vue était pas mal, mais ses baisers encore meilleurs. Maintenant c'est notre spot secret pour les soirées torrides 🔥",
      likes: 312,
      notes: 5,
    },
  ];

  const gridStories = [
    "Cette soirée où j'ai perdu ma culotte dans son ascenseur...",
    "Quand il m'a fait grimper aux rideaux... littéralement !",
    "Un massage qui a dérapé de la plus belle des façons...",
    "Cette nuit de folie dans la cabine d'essayage...",
    "Quand elle m'a fait perdre tous mes moyens en lingerie...",
    "Ce slow qui est devenu très, très rapproché...",
    "La fois où ses parents sont rentrés au mauvais moment...",
    "Cette séance de yoga qui a pris une tournure inattendue...",
    "Un plan drague qui s'est transformé en plan à trois...",
    "Cette soirée Netflix & Chill qui n'avait rien de chill...",
    "Quand j'ai découvert qu'elle ne portait rien sous sa robe...",
    "Ce fameux week-end où on n'a pas quitté la chambre...",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Les plus belles histoires de notre communauté
      </h2>

      {/* Stories en vedette */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {story.author[0]}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{story.author}</h3>
                <div className="text-sm text-gray-500">{story.date}</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-gray-700 mb-2">{story.content}</div>
              <div className="text-sm text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {story.location}
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <button className="flex items-center hover:text-rose-500 transition-colors">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {story.likes}
              </button>
              <StarRating rating={story.notes} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grille d'aperçus */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gridStories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-100 opacity-60"
            >
              <p className="text-gray-700 text-sm line-clamp-3">{story}</p>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white flex items-end justify-center pb-8">
          <p className="text-xl font-semibold text-gray-800">
            Des milliers d'autres histoires à découvrir !
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyShots;
