import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function TopBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  //Handle Logout
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Sign-out failed", error);
      });
  }

  return (
    <header className="bg-[#131313] border-b-4 border-[#ffb320]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/img/footer-logo.png" alt="Logo" className="h-[40px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white text-[16px] font-medium">
          {["Home", "Games", "Blog", "Forums", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-[#ffb320]">
                {item}
              </span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#ffb320] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Auth Button */}
        <div className="hidden md:flex">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#ffb320] text-white px-6 py-2 rounded-full text-[16px] font-medium hover:bg-yellow-500 transition cursor-pointer"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/signin")}
              className="bg-[#ffb320] text-white px-6 py-2 rounded-full text-[16px] font-medium hover:bg-yellow-500 transition cursor-pointer"
            >
              Sign In / Register
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] text-white text-center py-4 flex flex-col gap-4">
          {["Home", "Games", "Blog", "Forums", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ffb320] transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-[#ffb320] text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/signin");
                setMenuOpen(false);
              }}
              className="bg-[#ffb320] text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
            >
              Sign In / Register
            </button>
          )}
        </div>
      )}
    </header>
  );
}
