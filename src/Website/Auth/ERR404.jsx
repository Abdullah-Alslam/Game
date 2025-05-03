
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <motion.a
          href="/"
          className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg text-lg font-semibold hover:bg-yellow-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Home
        </motion.a>
      </motion.div>
    </div>
  );
}
