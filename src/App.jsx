import { Route, Routes } from "react-router-dom";
import HomePage from "./Website/Home/HomePage";
import Games from "./Website/Games/Games";
import Sport from "./Website/Games/Sport";
import Car from "./Website/Games/Car";
import War from "./Website/Games/War";
import Forums from "./Website/Forums/Forums";
import Contact from "./Website/Contact/Contact";
import Register from "./Website/Auth/Register";
import SignIn from "./Website/Auth/SignIn";
import RequireAuth from "./Website/Auth/RequireAuth";
import ERR404 from "./Website/Auth/ERR404";
import GameBlogPost from "./Website/Blog/Blog";
import GameDetail from "./Website/Games/GameDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* AUTH.... */}
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />

        <Route index element={<HomePage />} />
        {/* Games */}
        <Route path="games" element={<Games />} />
        <Route path="sport" element={<Sport />} />
        <Route path="war" element={<War />} />
        <Route path="car" element={<Car />} />
        <Route path="/gamedetail/:gameId" element={<GameDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<GameBlogPost />} />
        <Route element={<RequireAuth />}>
          <Route path="forums" element={<Forums />} />
        </Route>
        <Route path="*" element={<ERR404 />} />
      </Routes>
    </div>
  );
}
export default App;
