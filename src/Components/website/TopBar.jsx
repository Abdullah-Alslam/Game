import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Sign-out failed", error);
      });
  };

  return (
    <header className="bg-[#131313] border-b-4 border-[#ffb320]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/img/footer-logo.png" alt="Logo" className="h-[40px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white text-[16px]">
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/forums">Forums</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Logout Button */}
        <div className="hidden md:flex">
          <button
            onClick={handleLogout}
            className="bg-[#ffb320] text-white px-6 py-2 rounded-full text-[16px] font-medium hover:bg-yellow-500 transition"
          >
            Log Out
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] text-white text-center py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/games" onClick={() => setMenuOpen(false)}>Games</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/forums" onClick={() => setMenuOpen(false)}>Forums</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-[#ffb320] text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
          >
            Log Out
          </button>
        </div>
      )}
    </header>
  );
}
