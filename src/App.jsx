import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./pages/MyProfile";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
      <div className="flex flex-1">
        <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
