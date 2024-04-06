import logo from "./logo.svg";
import "./App.css";
import Signup from "./Pages/MainLogin/Signup";
import Login from "./Pages/MainLogin/Login";
import Home from "./Pages/Home page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./Pages/Service page/Service";
import HomePageBtn from "./Components/HomePageBtn";
import Navgation from "./Components/Navbar/Navgation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapMarker from "./Components/MapMarker";
import Footer from "./Components/Footer";
import GarageOwner from "./Pages/MainLogin/GarageOwner";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Garageowner" element={<GarageOwner />} />
          <Route path="/test" element={<DashboardPage />} />
          <Route path="/pay" element={<Payment />} />
        </Routes>
        {/* <GarageOwner/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
