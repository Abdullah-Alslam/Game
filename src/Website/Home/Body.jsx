import { Link } from "react-router-dom";
import { card, recent, review, tournament } from "../../Components/Body/card";
import { news } from "../../Components/icon/icons";
import Line from "../../Components/website/Line";

export default function Body() {
  return (
    <section>
      <div className="body">
        {/* Hero Section */}
        <div className="img bg-black bg-[url(/img/slider-1.jpg)] h-screen bg-no-repeat bg-cover">
          <div className="flex flex-col px-6 md:px-16 lg:px-40 py-[150px] gap-5">
            <h2 className="text-white text-4xl md:text-6xl font-bold">
              The Best <span className="text-[#ffb320]">Games</span> Out There
            </h2>
            <h2 className="text-lg md:text-xl text-white">
              Explore and download the latest and <br /> greatest games all for free, all in one place.
            </h2>
            <div className="register text-white bg-[#ffb320] h-12 w-36 rounded-full flex items-center justify-center">
              <Link to="/blog">Read More</Link>
            </div>
          </div>
        </div>

        <Line />

        {/* Game Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20 px-4 md:px-16">
          {card.map((item, key) => (
            <Link to={item.link} key={key}>
              <div className="w-full">
                <span>{item.type}</span>
                <img src={item.src} alt="" className="object-contain w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Games */}
        <div className="recent-game bg-[#ffffff] bg-[url(/img/recent-game-bg.png)] bg-no-repeat bg-center py-16">
          <div className="text-center flex flex-col items-center justify-center  mb-10">
            <div>{news}</div>
            <br />
            <h1 className="font-bold text-2xl">Recent Games</h1>
          </div>

          <div className="flex flex-wrap justify-center gap-6 px-4">
            {recent.map((item, key) => (
              <div
                key={key}
                className="w-full sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img className="rounded-t-lg w-full" src={item.src} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tournament Section */}
        <div className="gradient bg-[url(/img/pattern.png)] py-12 px-4 flex flex-wrap justify-center gap-8">
          {tournament.map((item, key) => (
            <div key={key} className="max-w-xl w-full">
              <div className="bg-[#fb6e10] text-white font-semibold text-center py-1 text-sm">
                TOURNAMENT
              </div>
              <div className="bg-[#252525] p-4">
                <div className="bg-[#ffb320] text-center font-bold py-2 text-sm">
                  Premium Tournament
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 mt-6 text-white text-xs">
                  <img src={item.src} alt="Tournament" className="w-[210px]" />
                  <div>
                    <h4 className="text-[#ffb320] text-xl font-bold mb-2">
                      World of WarCraft: Battle Royale
                    </h4>
                    <ul className="space-y-1">
                      <li><span className="text-[#898990]">Tournament Begins:</span> June 20, 2025</li>
                      <li><span className="text-[#898990]">Tournament Ends:</span> July 01, 2025</li>
                      <li><span className="text-[#898990]">Participants:</span> 20 teams</li>
                      <li><span className="text-[#898990]">Author:</span> Admin</li>
                    </ul>
                    <p className="mt-2 text-[#898990]">
                      <span className="text-yellow-400">Prizes:</span> 1st: $5000, 2nd: $3000, 3rd: $1500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Rated */}
        <div className="text-center text-3xl font-bold text-[#ffb320] my-12">Top Rated</div>
        <div className="Review bg-[#ffffff] bg-[url(/img/review-bg.png)] bg-contain bg-no-repeat py-12 px-4 flex flex-wrap justify-center gap-8">
          {review.map((item, key) => (
            <Link to={item.link} key={key}>
              {item.mark}
              <div className="flex flex-col gap-3 w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[330px] w-full object-cover" src={item.src} alt="" />
                <div className="px-4 pb-4">
                  <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
