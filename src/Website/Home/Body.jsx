import { card, recent, review, tournament } from "../../Components/Body/card";
import { news } from "../../Components/icon/icons";
import Line from "../../Components/website/Line";

export default function Body() {
   
  return (
    <section className=" ">
      <div className="body h-[520vh]">
        <div className="img  bg-black bg-[url(/img/slider-1.jpg)]  h-[120vh]   bg-no-repeat ">
          <div className="flex flex-col px-[160px]  py-[290px] gap-[20px]">
            <h2 className="text-white text-[60px] ">
              The Best <span className="text-[#ffb320]">Games</span> Out There
            </h2>
            <h2 className="text-[20px] text-[white]">
              The best site to download the best and latest games for free
            </h2>
            <div className="register text-white bg-[#ffb320] h-[50px] w-[140px] rounded-[30px]">
              <p className="text-center pt-[12px] ">Read More</p>
            </div>
          </div>
        </div>
        <Line />

                       {/* GAME */}
        <div className="card-4 grid grid-cols-4 gap-[2px] col-g h-[400px]  my-[100px] mb-[220px] mx-[158px]">
          {card.map((item, key) => (
            <div key={key} className="  w-[300px]">
              <span className="">{item.type} </span>
              <img src={item.src} alt="" className="object-contain" />
            </div>
          ))}
        </div>

        <div className="recent-game h-[850px]  bg-[#ffffff] bg-[url(/img/recent-game-bg.png)] bg-no-repeat bg-center  mt-[10px]">
          <div className=" h-[120px] flex flex-col items-center justify-center gap-[30px]">
            {news}
            <h1 className="font-bold">Recent Games</h1>
          </div>
                       {/*RECENT GAME */}
          <div className="cards flex flex-row items-center justify-center gap-[30px]">
            {recent.map((item, key) => (
              <div
                key={key}
                className="w-[360px]  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <img className="rounded-t-lg" src={item.src} alt="" />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOURNAMENT */}

        <div className="gradient h-[500px] bg-[url(\img\pattern.png)]  flex flex-row items-center justify-center content-between gap-[30px] ">
          {tournament.map((item, key) => (
            <div key={key}>
              <div className="bg-[#fb6e10] w-[150px] text-[13px] h-[30px] text-[white] font-semibold text-center pt-[5px]">
                TOURUNEMT
              </div>
              <div
                key={key}
                className="tournament bg-[#252525] h-[300px] w-[600px]"
              >
                <div className="ti-notic bg-[#ffb320] w-[200px] h-[40px] text-center font-bold pt-[7px]">
                  Premium Tournament
                </div>
                <div className="ti-content flex gap-[50px] items-center  justify-center mt-[30px] text-[12px]">
                  <div className="">
                    {" "}
                    <img
                      src={item.src}
                      alt=""
                      className="w-[210px] pl-[20px] "
                    />
                  </div>
                  <div className="ti-text flex flex-col gap-[10px]">
                    <h4 className="text-[#ffb320] text-[26px] font-bold pb-[10px]">
                      World Of WarCraft
                    </h4>
                    <ul className="text-white flex flex-col gap-[5px]">
                      <li>
                        <span className="text-[#898990]">
                          Tournament Beggins:
                        </span>{" "}
                        June 20, 2018
                      </li>
                      <li>
                        <span className="text-[#898990]">Tounament Ends:</span>{" "}
                        July 01, 2018
                      </li>
                      <li>
                        <span className="text-[#898990]">Participants:</span> 10
                        teams
                      </li>
                      <li>
                        <span className="text-[#898990]">
                          Tournament Author:
                        </span>{" "}
                        Admin
                      </li>
                    </ul>
                    <p className="text-[#898990]">
                      <span className="text-yellow-400">Prizes:</span> 1st place
                      $2000, 2nd place: $1000, 3rd place: $500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Review*/}

        <div className="Review bg-[#ffffff]  bg-[url(/img/review-bg.png)] bg-contain bg-no-repeat  h-[870px]  flex flex-row items-center justify-center content-between gap-[30px] ">
          {review.map((item, key) => (
            <div key={key}>
              {" "}
              {item.mark}
              <div className="flex flex-col gap-[10px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[300px]">
                <img
                  className="rounded-t-lg h-[330px] w-[300px]"
                  src={item.src}
                  alt=""
                />
                <div className="">
                  <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
