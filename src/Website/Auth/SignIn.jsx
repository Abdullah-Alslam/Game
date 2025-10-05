import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { handleFirebaseError } from "../../utils/handleFarebaseError";
import { motion } from "framer-motion";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  function HandleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function HandleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(res);
      nav("/");
    } catch (error) {
      console.error(error.code);
      setErr(handleFirebaseError(error.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-[#ffb320]">
          Welcome Back 👋
        </h2>

        <form onSubmit={HandleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={HandleForm}
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-[#ffb320] focus:border-transparent transition duration-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              name="password"
              value={form.password}
              onChange={HandleForm}
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-[#ffb320] focus:border-transparent transition duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold rounded-xl transition duration-300 
            ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#ffb320] hover:bg-yellow-400 text-gray-900"
              }`}
          >
            {loading ? (
              <motion.div
                className="flex justify-center items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing in...
              </motion.div>
            ) : (
              "Sign In"
            )}
          </motion.button>
        </form>

        {/* Error message */}
        {err && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mt-4"
          >
            {err}
          </motion.p>
        )}

        {/* Link to Register */}
        <p className="mt-8 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#ffb320] hover:text-yellow-400 hover:underline transition"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
