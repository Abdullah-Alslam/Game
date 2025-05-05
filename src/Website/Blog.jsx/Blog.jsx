import React from "react";
import TopBar from "../../Components/website/TopBar";
import Line from "../../Components/website/Line";
import { Link } from "react-router-dom";

export default function GameBlogPost() {
  return (
    <section>
      <TopBar />
      <Line />
      <img
        src="/img/categories/game.jpg"
        alt="Game Cover"
        className="rounded-xl w-full h-[600px]"
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Cover */}

        <article className="bg-white shadow-xl rounded-3xl p-8 space-y-8">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900">
            🔥 Titan Realms: A New Era of Open-World Combat
          </h1>
          <p className="text-sm text-gray-500">By DevGamer | April 19, 2025</p>

          {/* Intro */}
          <p className="text-lg text-gray-700">
            The long-awaited MMORPG <strong>Titan Realms</strong> has finally
            arrived. After years of development, the game promises dynamic
            battles, expansive worlds, and immersive storytelling. But does it
            live up to the hype?
          </p>

          {/* Visuals */}
          <h2 className="text-2xl font-bold text-gray-800">
            🎨 Visuals & World Design
          </h2>
          <p className="text-gray-700">
            From frozen tundras to molten wastelands, Titan Realms boasts one of
            the most visually diverse maps we’ve seen. The Unreal Engine 5
            visuals push the boundaries of detail and realism.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src="img/categories/titan.jpg"
              alt="Game Screenshot 1"
              className="rounded-xl h-[256px]"
            />
            <img
              src="img/categories/titan2.jpg"
              alt="Game Screenshot 2"
              className="rounded-xl"
            />
          </div>

          {/* Mechanics */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            ⚔️ Gameplay Mechanics
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Real-time combat with dodge and parry systems</li>
            <li>Dynamic events and massive boss raids</li>
            <li>classNameless progression with full customization</li>
          </ul>

          {/* Highlight */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-xl mt-6">
            <p className="text-blue-800 font-medium">
              💡 Pro Tip: Use terrain elevation to your advantage during PvP
              battles.
            </p>
          </div>

          {/* Audio */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            🎧 Sound & Music
          </h2>
          <p className="text-gray-700">
            Titan Realms offers an adaptive soundtrack that intensifies during
            combat. The ambient sound design truly immerses players in every
            zone.
          </p>

          {/* Quests */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            📖 Questing & Narrative
          </h2>
          <p className="text-gray-700">
            Unlike many MMORPGs, this game focuses heavily on narrative. Choices
            impact outcomes and even unlock entire quest lines based on
            reputation and alignment.
          </p>

          {/* Sample Code */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            💻 Sample Ability Script
          </h2>
          <pre className="bg-gray-900 text-green-300 p-4 rounded-xl overflow-x-auto text-sm">
            {`function castFireball(target) {
  if (player.mana < 20) return "Not enough mana";
  player.mana -= 20;
  target.health -= 50;
  return "Fireball cast successfully!";
}`}
          </pre>

          {/* Verdict */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            🏁 Final Verdict
          </h2>
          <p className="text-gray-700">
            <strong>Titan Realms</strong> is a rich, living world with tight
            combat, engaging quests, and beautiful design. There are a few bugs
            here and there, but overall, it’s one of the best online RPGs of the
            decade.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-xl font-bold text-green-600">
              9.5 / 10 – Editor’s Choice
            </span>
            <Link to="https://steamdb.info/app/601050/" >
              {" "}
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition cursor-pointer">
                Play Now
              </button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
