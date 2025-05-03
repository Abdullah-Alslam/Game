import { useState } from "react";
import { car, sport, war } from "../../Components/games/games";
import Footer from "../../Components/website/Footer";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Games() {
  const allGames = [...car, ...sport, ...war];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // عدد الألعاب في الصفحة

  // تصفية الألعاب بناءً على البحث
  const filteredGames = allGames.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  // حساب بداية ونهاية الألعاب في الصفحة الحالية
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem);

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

  // تغيير الصفحة
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="h-[450vh] dark">
      <TopBar />
      <Line />

      <div className="h-[85vh]">
        <img
          src="/img/page-top-bg/3.jpg"
          alt="green image"
          className=" h-[66vh]"
        />
      </div>

      <div className="p-3 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Find Your Game🎮
        </h1>

        <div className="w-full">
          <input
            type="text"
            placeholder="اكتب اسم اللعبة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border-2  border-gray-300 rounded-lg mb-14 w-[300px] focus:outline-none focus:border-blue-500 relative left-[930px]"
          />
        </div>

        {/* عرض الألعاب */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {currentItems.map((item, key) => (
                <div
                  key={key}
                  className="max-w-sm bg-gray-800 text-white rounded-2xl overflow-hidden shadow-md p-5 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    className="w-full h-44 object-cover rounded-xl"
                    src={item.src}
                    alt="Game Cover"
                  />
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-300">
                      <span className="bg-red-600 px-2 py-0.5 rounded-full">
                        Horror
                      </span>
                      <span className="bg-purple-600 px-2 py-0.5 rounded-full">
                        Multiplayer
                      </span>
                      <span className="bg-blue-600 px-2 py-0.5 rounded-full">
                        Survival
                      </span>
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
                  <Link to={`/gamedetail/${item.name}`}>
                    <button className="mt-5 w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded-xl transition cursor-pointer">
                      Click to Download
                    </button>
                  </Link>
                </div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10 text-xl">
            No Games Found... 🔍
          </div>
        )}

        {/* الترقيم */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-[300px]">
        <Footer />
      </div>
    </section>
  );
}
