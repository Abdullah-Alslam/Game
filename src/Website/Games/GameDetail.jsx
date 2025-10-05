import { Link, useParams } from "react-router-dom";
import { car, sport, war } from "../../Components/games/games";
import Comments from "../../Components/games/Comments";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function GameDetail() {
  const { gameId } = useParams();
  const games = [...car, ...sport, ...war];
  const game = games.find((g) => g.name === gameId);

  const [loading, setLoading] = useState(true);

  // Loader simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 gap-4">
        <div className="flex space-x-2">
          <motion.div
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.6, repeatType: "loop" }}
            className="w-4 h-4 bg-yellow-400 rounded-full"
          />
          <motion.div
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              repeatType: "loop",
              delay: 0.2,
            }}
            className="w-4 h-4 bg-yellow-400 rounded-full"
          />
          <motion.div
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              repeatType: "loop",
              delay: 0.4,
            }}
            className="w-4 h-4 bg-yellow-400 rounded-full"
          />
        </div>
        <div className="text-xl font-semibold text-white mt-4">
          Loading Game Details...
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-2xl font-bold">
        ❌ Game not found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Game Image */}
        <motion.img
          src={game.path}
          alt={game.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />

        {/* Game Name */}
        <h1 className="text-4xl font-bold mt-6 text-center text-yellow-400">
          {game.name}
        </h1>

        {/* Game Categories */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {game.category.map((cat, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-yellow-400"
            >
              {cat}
            </motion.span>
          ))}
        </div>

        {/* Game Rating */}
        <div className="flex justify-center items-center mt-6">
          <span className="text-yellow-400 text-2xl">⭐</span>
          <span className="ml-2 text-xl font-semibold">{game.star}</span>
        </div>

        {/* Game Description */}
        <p className="mt-6 text-center text-lg text-gray-300">
          {game.desc || "Description not available."}
        </p>

        {/* Download Button */}
        <div className="flex justify-center mt-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to={game.link} // Adjust the link to be the actual download link
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Download Game
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Comments */}
      <div className="m-[50px] w-full max-w-4xl">
        <Comments gameId={gameId} />
      </div>
    </div>
  );
}

export default GameDetail;
