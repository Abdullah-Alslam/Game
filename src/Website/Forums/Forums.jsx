import { author } from "../../Components/website/forums";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";
import Footer from "../../Components/website/Footer";

export default function Forums() {
  return (
    <section className="bg-black text-white">
      <TopBar />
      <Line />

      {/* البانر العلوي */}
      <div className="bg-[url(/img/page-top-bg/4.jpg)] bg-cover bg-center bg-no-repeat h-[60vh] flex items-center ">
        <div className=" px-4 md:px-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">OUR COMMUNITY</h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto mb-6">
          Welcome to the hub of our gaming community! Dive into discussions, share tips, and stay updated with the latest news and trends in the gaming world.

          </p>

        </div>
      </div>

      {/* محتوى الأعضاء */}
      <div className="bg-[url(/img/community-bg.jpg)] bg-cover bg-center bg-no-repeat py-20">
        <div className="bg-black/60 px-4 sm:px-10 lg:px-20 py-10 rounded-md">
          <h1 className="font-bold text-xl sm:text-2xl mb-10">All Members (344)</h1>

          <div className="flex flex-col gap-8">
            {author.map((item, key) => (
              <div
                key={key}
                className="bg-[#1f2225] w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <img src={item.src} alt="Author" className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h5 className="text-[#da2133] text-lg">
                      {item.name}
                      <span className="text-[#7a7a6f] pl-2 text-sm">posted an update</span>
                    </h5>
                    <div className="text-[#ffa522] text-sm pt-2">June 21, 2018</div>
                    <p className="text-white pt-3 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
