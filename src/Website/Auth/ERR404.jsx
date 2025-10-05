import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Lights */}
      <motion.div
        className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="z-10 text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-[100px] md:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 select-none"
          animate={{
            textShadow: [
              "0 0 20px #ffb320",
              "0 0 40px #ffb320",
              "0 0 20px #ffb320",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Looks like you’re lost in the game universe 💫
        </motion.p>

        <motion.a
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold text-lg shadow-lg hover:shadow-yellow-400/50 transition"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.a>
      </motion.div>

      {/* Floating Icon */}
      <motion.div
        className="absolute top-10 right-10 text-5xl"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        🎮
      </motion.div>
    </div>
  );
}
