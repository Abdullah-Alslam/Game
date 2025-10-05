import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../../Components/website/TopBar";
import Line from "../../Components/website/Line";
import { Link } from "react-router-dom";

export default function GameBlogPost() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 border-4 border-t-yellow-400 border-gray-700 rounded-full"
        ></motion.div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen"
    >
      <TopBar />
      <Line />

      {/* Header Image */}
      <motion.img
        src="/img/categories/game.jpg"
        alt="Game Cover"
        className="rounded-xl w-full h-[600px] object-cover shadow-2xl"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.article
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-3xl p-10 space-y-8 hover:shadow-yellow-200/50 transition-all"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🔥 Titan Realms: A New Era of Open-World Combat
          </h1>
          <p className="text-sm text-gray-500">By DevGamer | April 19, 2025</p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The long-awaited MMORPG <strong>Titan Realms</strong> has finally
            arrived. After years of development, the game promises dynamic
            battles, expansive worlds, and immersive storytelling. But does it
            live up to the hype?
          </p>

          <h2 className="text-2xl font-bold text-gray-800">
            🎨 Visuals & World Design
          </h2>
          <p className="text-gray-700">
            From frozen tundras to molten wastelands, Titan Realms boasts one of
            the most visually diverse maps we’ve seen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {["titan.jpg", "titan2.jpg"].map((img, i) => (
              <motion.img
                key={i}
                src={`img/categories/${img}`}
                alt={`Screenshot ${i}`}
                className="rounded-xl h-[256px] object-cover shadow-md hover:scale-105 hover:shadow-yellow-300/40 transition-transform duration-500"
                whileHover={{ rotate: 1 }}
              />
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            ⚔️ Gameplay Mechanics
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Real-time combat with dodge and parry systems</li>
            <li>Dynamic events and massive boss raids</li>
            <li>Classless progression with full customization</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl mt-6 shadow-sm">
            <p className="text-yellow-800 font-medium">
              💡 Pro Tip: Use terrain elevation to your advantage during PvP
              battles.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            🎧 Sound & Music
          </h2>
          <p className="text-gray-700">
            Titan Realms offers an adaptive soundtrack that intensifies during
            combat. The ambient sound design truly immerses players.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            📖 Questing & Narrative
          </h2>
          <p className="text-gray-700">
            Unlike many MMORPGs, this game focuses heavily on narrative. Choices
            impact outcomes and even unlock entire quest lines.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            💻 Sample Ability Script
          </h2>
          <motion.pre
            className="bg-gray-900 text-green-300 p-4 rounded-xl overflow-x-auto text-sm shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            {`function castFireball(target) {
  if (player.mana < 20) return "Not enough mana";
  player.mana -= 20;
  target.health -= 50;
  return "Fireball cast successfully!";
}`}
          </motion.pre>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            🏁 Final Verdict
          </h2>
          <p className="text-gray-700">
            <strong>Titan Realms</strong> is a rich, living world with tight
            combat, engaging quests, and beautiful design.
          </p>

          <div className="flex items-center justify-between mt-6">
            <span className="text-xl font-bold text-green-600">
              9.5 / 10 – Editor’s Choice
            </span>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="https://steamdb.info/app/601050/">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-all">
                  Play Now
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
