import { news,  startegy } from "../icon/icons";

export default function Line() {
  return (
    <section>
      <div className="bg-[#131313f6] h-[82px] flex ">
        <div className="bg-[#ffb320] z-50 font-extrabold w-[450px] h-full ">
          <h2 className="text-[#ffffff] pt-[25px] text-[21px]  ml-[250px] w-full h-full ">
            Latest News
          </h2>
        </div>

        <div className="text-white flex gap-[0px]  ">
          <div className="flex lines   m-[30px] gap-[45px]    ">
            <span className="">{news}</span>{" "}
            <h2>Lorem ipsum dolor sit, amet consectetuads </h2>{" "}
          </div>

          <div className="flex lines  m-[30px] gap-[45px]   ">
            <span className="">{startegy}</span>{" "}
            <h2>Lorem ipsum dolor ,sit, amet consectetur  consectetursdd .</h2>{" "}
          </div>



        </div>
      </div>
    </section>
  );
}
