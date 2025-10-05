import { useEffect, useState } from "react";
import { author } from "../../Components/website/forums";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";
import Footer from "../../Components/website/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Forums() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo / Loader Animation */}
            <motion.div
              className="text-[#ffb320] text-5xl font-bold tracking-widest"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: 1,
                textShadow: [
                  "0px 0px 0px #ffb320",
                  "0px 0px 15px #ffb320",
                  "0px 0px 30px #ffb320",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              G-Community
            </motion.div>
            <motion.div
              className="mt-6 w-32 h-1 bg-[#ffb320] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <TopBar />
            <Line />

            {/* البانر العلوي */}
            <div className="relative h-[60vh] flex items-center justify-center bg-[url(/img/page-top-bg/4.jpg)] bg-cover bg-center bg-no-repeat">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center px-6 md:px-10 max-w-2xl"
              >
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent">
                  OUR COMMUNITY
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Welcome to the hub of our gaming community! Dive into discussions, share tips, and stay updated with the latest news and trends in the gaming world.
                </p>
              </motion.div>
            </div>

            {/* محتوى الأعضاء */}
            <div className="bg-[url(/img/community-bg.jpg)] bg-cover bg-center bg-no-repeat py-20">
              <div className="bg-black/70 backdrop-blur-sm px-4 sm:px-10 lg:px-20 py-10 rounded-md max-w-6xl mx-auto">
                <h1 className="font-bold text-2xl sm:text-3xl mb-12 border-l-4 border-red-500 pl-3">
                  All Members <span className="text-gray-400 text-sm">(344)</span>
                </h1>

                <div className="flex flex-col gap-8">
                  {author.map((item, key) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: key * 0.1 }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 0px 25px rgba(255, 179, 32, 0.3)",
                      }}
                      className="bg-[#1a1d20]/90 border border-[#2a2e33] w-full max-w-4xl mx-auto p-6 rounded-xl transition-all duration-500"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <motion.img
                          src={item.src}
                          alt="Author"
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-transparent hover:ring-[#ffb320] transition-all duration-500"
                          whileHover={{ rotate: 3, scale: 1.05 }}
                        />
                        <div>
                          <h5 className="text-[#ffb320] text-lg font-semibold">
                            {item.name}
                            <span className="text-[#aaa] pl-2 text-sm font-normal">
                              posted an update
                            </span>
                          </h5>
                          <div className="text-[#ff5f5f] text-sm pt-1">
                            June 21, 2018
                          </div>
                          <p className="text-gray-200 pt-3 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
