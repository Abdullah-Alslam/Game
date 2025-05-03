import { author } from "../../Components/website/forums";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";
import Footer from "../../Components/website/Footer";

export default function Forums() {
  return (
    <section className=" ">
      <TopBar />
      <Line />
      <div className="body h-[510vh]">
        <div className="  bg-black bg-[url(/img/page-top-bg/4.jpg)]  h-[68vh]   bg-no-repeat ">
          <div className="flex flex-col px-[160px]  py-[90px] gap-[20px]">
            <h2 className="text-white text-[60px] ">OUR COMUNITY</h2>
            <h2 className="text-[18px] text-[white]">
              Lorem ipsum dolor sit amet consectetur
              <br /> adipisicing elit. Ut perferendis quam, debitis
            </h2>
            <div className="register text-white bg-[#ffb320] h-[50px] w-[140px] rounded-[30px]">
              <p className="text-center pt-[12px] ">Read More</p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/community-bg.jpg)]  h-[380vh] bg-center bg-no-repeat">
          <div className=" h-[390vh] bg-[#b8b8b8]/10 mx-[70px] ">
            <h1 className="font-bold p-[90px] pl-[120px]">All Members (344) </h1>
            <div className="flex flex-col gap-[30px]">
              {author.map((item, key) => (
                <div
                  key={key}
                  className="container  community-post bg-[#1f2225] h-[280px] w-[1150px] "
                >
                  <div className="flex gap-[30px] pt-[50px] pl-[50px] py-[0px]">
                    <div className="author">
                      <img src={item.src} className="w-[80px] rounded-[40px]" />
                    </div>
                    <div className="post-content ">
                      <h5 className="text-[#da2133]">
                        {item.name}
                        <span className="text-[#7a7a6f] pl-[19px]">
                          posted an update
                        </span>
                      </h5>
                      <div className="post-date text-[#ffa522] text-[13px] pt-[13px]">
                        June 21, 2018
                      </div>
                    </div>
                  </div>
                  <p className="text-[white] pl-[155px] text-[14px]">
                    Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc
                    ing ipsum dolor sit ame. Lorem ipsum dolor sit amet,
                    consectetur adipisc ing ipsum dolor sit ame.Donec venenatis
                    at eros sit amet aliquam. Donec vel orci efficitur, dictum
                    nisl vitae, scelerisque nibh. Curabitur eget ipsum pulvinar
                    nunc gravida interdum.{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  );
}
