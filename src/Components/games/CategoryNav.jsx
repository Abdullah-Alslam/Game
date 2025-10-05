import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CategoryNav() {
  const categories = [
    { name: "All Games", path: "/games" },
    { name: "Sport", path: "/sport" },
    { name: "Racing", path: "/car" },
    { name: "War", path: "/war" },
  ];

  return (
    <div className="flex flex-wrap justify-center sm:justify-end gap-3 mx-4 sm:mx-40 mb-10 mt-8">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to={category.path}
            className="bg-[#ffb320] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition-colors duration-200 block text-center"
          >
            {category.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
