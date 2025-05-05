import { news, startegy } from "../icon/icons";

export default function Line() {
  return (
<section>
  <div className="bg-[#131313f6] h-auto md:h-[82px] hidden md:flex flex-col md:flex-row">
    {/* Line title*/}
    <div className="bg-[#ffb320] z-50 font-extrabold w-full md:w-[450px] h-[60px] md:h-full flex items-center justify-center md:justify-start md:pl-[250px]">
      <h2 className="text-white text-[18px] md:text-[21px]">Latest News</h2>
    </div>

    {/*NEWs*/}
    <div className="lines text-white flex flex-col md:flex-row md:gap-[0px] overflow-x-auto">
      <div className="flex items-center m-4 md:m-[30px] gap-4 md:gap-[45px]">
        <span>{news}</span>
        <h2 className="text-[14px] md:text-base">
          🕹 “PlayStation 6 Rumored to Launch in Late 2027”
        </h2>
      </div>

      <div className="flex items-center m-4 md:m-[30px] gap-4 md:gap-[45px]">
        <span>{startegy}</span>
        <h2 className="text-[14px] md:text-base">
          🎮 GTA 6 Trailer Officially Dropping This Summer
        </h2>
      </div>
    </div>
  </div>
</section>

  );
}
 