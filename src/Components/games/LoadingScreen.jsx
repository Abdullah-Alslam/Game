import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 gap-4">
      <div className="flex space-x-2">
        {[0, 0, 0].map((_, idx) => (
          <motion.div
            key={idx}
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              repeatType: "loop",
              delay: idx * 0.2,
            }}
            className="w-4 h-4 bg-yellow-500 rounded-full"
          />
        ))}
      </div>
      <div className="text-xl font-semibold text-gray-700 mt-4">
        Loading Games...
      </div>
    </div>
  );
}
