import { signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export default function TopBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("تم تسجيل الخروج بنجاح");
        // ممكن توجه المستخدم لصفحة تسجيل الدخول
        navigate("/signin");
      })
      .catch((error) => {
        console.error("فشل تسجيل الخروج", error);
      });
  };

  return (
    <section className="bg-black">
      <div className=" ">
        <div className="top-bar w-full  bg-[#131313] h-[80px] flex justify-around items-center border-b-[#ffb320] border-[4px] ">
          <div>
            <Link to="/">
              <img src="/img/footer-logo.png" alt="" />
            </Link>
          </div>
          <div className="center text-white flex gap-[35px]">
            <Link to="/">Home</Link>

            <Link to="/games">Games </Link>

            <Link to="/blog">Blog</Link>
            <Link to="/forums">Forums</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="register text-white bg-[#ffb320] h-[50px] w-[150px] rounded-[30px]">
            <button
              onClick={handleLogout}
              className=" btn-logout w-full h-full -[#ffb320] cursor-pointer text-[18px] font-semibold"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
