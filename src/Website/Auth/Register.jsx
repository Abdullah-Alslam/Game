import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { handleFirebaseError } from "../../utils/handleFarebaseError";

export default function Register() {
   // UseSTATE....
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(false);
  const nav = useNavigate("");

  //handleForm.....
  function HandleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handleSubmit.....
  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      nav("/");
      console.log(res);
    } catch (err) {
      setErr(handleFirebaseError(err.code));
      console.log(err.code);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#ffb320]">
          Register
        </h2>
        <form className="space-y-5" onSubmit={HandleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={HandleForm}
              type="text"
              placeholder="Your Name..."
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb320]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
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
              type="password..."
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb320]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#ffb320] text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition duration-200 cursor-pointer"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400 ">
          Already have an account?
          <Link to="/signin" className="text-[#ffb320] hover:underline">
            Sign in
          </Link>
        </p>
        <p className="text-red-500 text-center mt-[7px]">
          {err && <span>{err}</span>}
        </p>
      </div>
    </div>
  );
}
