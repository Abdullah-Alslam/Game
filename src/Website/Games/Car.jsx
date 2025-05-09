import { Link } from "react-router-dom";
import { car } from "../../Components/games/games";
import Footer from "../../Components/website/Footer";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";

export default function Car() {
  return (
    <section className="bg-[url(/icon/5.jpg)] bg-cover bg-no-repeat">
      <TopBar />
      <Line />

      {/* Banner with title */}
      <div className="relative">
        <img
          src="/img/page-top-bg/5.jpg"
          alt="Racing Banner"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-amber-400 text-black text-3xl sm:text-4xl font-extrabold px-10 py-3 rounded-full shadow-xl z-10">
          RACING GAMES
        </div>
      </div>

      {/* Games content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {car.map((item, key) => (
            <div
              key={key}
              className="bg-gray-800 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Game image */}
              <div className="h-52 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src={item.src}
                  alt="Game Cover"
                />
              </div>

              {/* Card content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-3">
                    {item.category.map((cat, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full ${
                          index === 0
                            ? "bg-red-600"
                            : index === 1
                            ? "bg-purple-600"
                            : "bg-blue-600"
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating + platform */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-yellow-400 text-sm space-x-1">
                    <span>★ {item.star}</span>
                    <span className="text-gray-300">(890k reviews)</span>
                  </div>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                    PC / Console
                  </span>
                </div>

                {/* Download button */}
                <Link to={`/gamedetail/${item.name}`}>
                    <button className="mt-5 w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded-xl transition cursor-pointer">
                      Click to Download
                    </button>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
}
