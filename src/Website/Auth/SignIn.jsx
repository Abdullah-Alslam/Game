import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { handleFirebaseError } from "../../utils/handleFarebaseError";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState();
  const nav = useNavigate();

  function HandleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(res);
      nav("/");
    } catch (err) {
      console.log(err);
      setErr(handleFirebaseError(err.code));
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#ffb320]">
          Sign In
        </h2>
        <form className="space-y-5" onSubmit={HandleSubmit}>
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
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb320]"
            />
          </div>
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
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb320]"
            />
          </div>
          <button
            type="submit"
            className=" w-full py-2 bg-[#ffb320] text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          Don’t have an account?
          <Link to="/register" className="text-[#ffb320] hover:underline">
           Register
          </Link>
        </p>
        <p className="text-red-500 text-center mt-[7px]">
          {err && <span>{err}</span>}
        </p>
      </div>
    </div>
  );
}
