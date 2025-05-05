import { Link } from "react-router-dom";
import { comment, post } from "../Body/card";

export default function Footer() {
  return (
    <section className="bg-[url(/img/pattern.png)] text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4">
            <img
              src="/img/footer-logo.png"
              alt="logo"
              className="w-[180px] sm:w-[220px] md:w-[260px]"
            />
            <p className="text-[#dcdcdc]">
              Discover the latest and greatest in the world of gaming. From
              top-rated releases to community tournaments — all in one place.
            </p>
            <img
              src="/img/footer-top-bg.png"
              alt="Footer Design"
              className="w-full"
            />
          </div>

          {/* Right Section (Posts + Comments) */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Latest Posts */}
            <div className="bg-[#252525] p-5 rounded">
              <h1 className="text-lg font-semibold mb-4">Latest Posts</h1>

              {post.map((item) => (
                <div key={item} className="flex gap-4 mb-5">
                  <img src={item.src} className="w-20 h-20 object-cover" />
                  <div className="text-sm">
                    <h2 className="text-[#ffa522]">{item.date}</h2>
                    <p className="py-2">{item.desc}</p>
                    <span className="text-[#6f6f6f]">{item.author}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Comments */}
            <div className="bg-[#252525] p-5 rounded">
              <h1 className="text-lg font-semibold mb-4">Top Comments</h1>

              {comment.map((item, key) => (
                <div key={key} className="flex gap-4 items-center mb-5">
                  <img
                    src={item.src}
                    alt="Author avatar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p>
                      <strong>{item.author}</strong>{" "}
                    </p>
                    <p className="text-[#ffa522]">{item.date}</p>
                    <p className="">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#252525] py-4">
        <div className="text-center text-[#a1aeae] text-sm">
          © 2025 All rights reserved | Made with 💙 by{" "}
          <Link to="https://www.linkedin.com/in/abdullah-abd-al-salam-a8ab05357/?trk=opento_sprofile_goalscard">
            <span className="text-[#146fff]">abd</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
 