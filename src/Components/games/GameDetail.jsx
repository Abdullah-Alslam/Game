import { Link, useParams } from "react-router-dom";
import { car, sport, war } from "./games";
import Comments from "./Comments";

function GameDetail() {
  const { gameId } = useParams();
  const games = [...car, ...sport, ...war];
  const game = games.find((g) => g.name === gameId);

  if (!game) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-2xl font-bold">
        ❌ اللعبة غير موجودة
      </div>
    );
  }
  console.log(game.src);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-4xl">
        {/* صورة اللعبة */}
        <img
          src={game.path}
          alt={game.name}
          className="w-full h-100 object-cover rounded-lg shadow-lg "
        />

        {/* اسم اللعبة */}
        <h1 className="text-4xl font-bold mt-6 text-center text-yellow-400">
          {game.name}
        </h1>

        {/* فئات اللعبة */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {game.category.map((cat, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-yellow-400"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* تقييم اللعبة */}
        <div className="flex justify-center items-center mt-6">
          <span className="text-yellow-400 text-2xl">⭐</span>
          <span className="ml-2 text-xl font-semibold">{game.star}</span>
        </div>

        {/* وصف اللعبة */}
        <p className="mt-6 text-center text-lg text-gray-300">
          {game.desc || "وصف اللعبة غير متوفر."}
        </p>

        {/* زر تحميل اللعبة */}
        <div className="flex justify-center mt-8">
          <Link
            to={game.link} // قم بتعديل الرابط ليكون الرابط الفعلي للتحميل
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300"
          >
            تحميل اللعبة
          </Link>
        </div>
      </div>
      <div className="m-[50px]">
        {" "}
        <Comments gameId="game123" />
      </div>
    </div>
  );
}

export default GameDetail;
