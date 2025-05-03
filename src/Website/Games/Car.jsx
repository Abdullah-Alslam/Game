import { car } from "../../Components/games/games";
import Footer from "../../Components/website/Footer";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";

export default function Car() {
  return (
    <section className="h-[400vh]">
      <TopBar />
      <Line />
      <div className="h-[85vh]">
        <img
          src="src/img/page-top-bg/5.jpg "
          alt="green image"
          className=" h-[66vh]"
        />
      </div>
      <div className="container">
      <div className="text-center text-[40px] font-extrabold mt-[-60px] mb-[100px] bg-amber-300  " >RACING GAMES </div>

        <div className="card-game  grid grid-cols-3  gap-[70px] ">
          {car.map((item, key) => (
            <div
              key={key}
              className="max-w-sm bg-gray-800 text-white rounded-2xl overflow-hidden shadow-md p-5 hover:shadow-xl transition-all duration-300"
            >
              <div className="">
                <img
                  className="w-full h-44 object-contein rounded-xl hover:h-[200px] "
                  src={item.src}
                  alt="Game Cover"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-300">
                  <span className="bg-red-600 px-2 py-0.5 rounded-full">
                    {item.category[0]}
                  </span>
                  <span className="bg-purple-600 px-2 py-0.5 rounded-full">
                    {item.category[1]}
                  </span>
                  <span className="bg-blue-600 px-2 py-0.5 rounded-full">
                    {item.category[2]}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-yellow-400 text-sm space-x-1">
                  <span>★ {item.star}</span>
                  <span className="text-gray-300">(890k reviews)</span>
                </div>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                  PC / Console
                </span>
              </div>

              <button className="mt-5 w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded-xl transition">
                Click TO Download
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[300px]">
        <Footer />
      </div>
    </section>
  );
}
