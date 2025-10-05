import { useState, useEffect } from "react";
import { car, sport, war } from "../../Components/games/games";
import TopBar from "../../Components/website/TopBar";
import Line from "../../Components/website/Line";
import Footer from "../../Components/website/Footer";
import GameCard from "../../Components/games/GameCard";
import Pagination from "../../Components/games/Pagination";
import LoadingScreen from "../../Components/games/LoadingScreen";
import SearchBar from "../../Components/games/SearchBar";
import CategoryNav from "../../Components/games/CategoryNav"; 
export default function Games() {
  const allGames = [...car, ...sport, ...war];
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;

  // Search
  const filteredGames = allGames.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  // Number of Page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Fake Loading ...
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <section className="h-[450vh]">
      <TopBar />
      <Line />

      {}
      <div className="h-[85vh]">
        <img
          src="/img/page-top-bg/3.jpg"
          alt="green image"
          className="h-[66vh] w-full object-cover"
        />
      </div>

      {/* Filter */}
      <CategoryNav />

      {/* Search*/}
      <SearchBar search={search} setSearch={setSearch} />

      <div className="p-3 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Find Your Game🎮
        </h1>

        {/* 🎮 Card Games*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems.map((item, key) => (
            <GameCard key={key} game={item} />
          ))}
        </div>

        {/* 🔢 Pagination Buttons*/}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="mt-[300px]">
        <Footer />
      </div>
    </section>
  );
}
