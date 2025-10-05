import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameCard({ game }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm bg-gray-800 text-white rounded-2xl overflow-hidden shadow-md p-5 hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <img
        className="w-full h-44 object-cover rounded-xl"
        src={game.src}
        alt="Game Cover"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{game.name}</h2>
        <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-300">
          <span className="bg-red-600 px-2 py-0.5 rounded-full">Horror</span>
          <span className="bg-purple-600 px-2 py-0.5 rounded-full">
            Multiplayer
          </span>
          <span className="bg-blue-600 px-2 py-0.5 rounded-full">Survival</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-yellow-400 text-sm space-x-1">
          <span>★ 4.4</span>
          <span className="text-gray-300">(890k reviews)</span>
        </div>
        <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
          PC / Console
        </span>
      </div>
      <Link to={`/gamedetail/${game.name}`}>
        <button className="mt-5 w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded-xl transition cursor-pointer">
          Click to Download
        </button>
      </Link>
    </motion.div>
  );
}
