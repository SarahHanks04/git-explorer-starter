import "./App.css";
import { Route, Routes, UNSAFE_useScrollRestoration } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Navbar />}>

          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route element={<UserProfile />} path="/users/user" />

        </Route>

        <Route element={<NotFound />} path="*" />

      </Routes>
    </div>
  );
}

export default App;
