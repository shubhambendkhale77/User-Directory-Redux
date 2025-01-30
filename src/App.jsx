import User from "./components/User";
import { Routes, Route } from "react-router";
import UserInfo from "./components/UserInfo";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/:id" element={<UserInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
