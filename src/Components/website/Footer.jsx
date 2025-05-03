export default function Footer() {
  return (
    <section className="bg-[url(/img/pattern.png)] text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4">
            <img src="/img/footer-logo.png" alt="logo" className="w-[150px]" />
            <p className="text-[#dcdcdc]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ipsam.
            </p>
            <img src="/img/footer-top-bg.png" alt="" />
          </div>

          {/* Right Section (Posts + Comments) */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Latest Posts */}
            <div className="bg-[#252525] p-5 rounded">
              <h1 className="text-lg font-semibold mb-4">Latest Posts</h1>

              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 mb-5">
                  <img src={`/img/latest-blog/${item}.jpg`} className="w-20 h-20 object-cover" />
                  <div className="text-sm">
                    <h2 className="text-[#ffa522]">June 21,2018</h2>
                    <p className="py-2">Lorem ipsum dolor sit amet elit. Ipsa, facilis?</p>
                    <span className="text-[#6f6f6f]">By admin</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Comments */}
            <div className="bg-[#252525] p-5 rounded">
              <h1 className="text-lg font-semibold mb-4">Top Comments</h1>

              {[1, 4, 3, 2].map((author) => (
                <div key={author} className="flex gap-4 items-center mb-5">
                  <img
                    src={`/img/authors/${author}.jpg`}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p>Jams Smith on Lorem ipsum dolor sit amet.</p>
                    <p className="text-[#ffa522]">June 21,2018</p>
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
          © 2025 All rights reserved | Made with 💙 by <span className="text-[#146fff]">abd</span>
        </div>
      </div>
    </section>
  );
}
