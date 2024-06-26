import "./App.css";
import Signup from "./Pages/MainLogin/Signup.tsx";
import Home from "./Pages/Home page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GarageOwner from "./Pages/MainLogin/GarageOwner.tsx";
import Contact from "./Pages/Contact/Contact";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import Login from "./Pages/MainLogin/Login.tsx";
import SignMap from "./Pages/MainLogin/SignMap.jsx";
import Payment from "./Pages/Payment/Payment";
import Nservice from "../../EasyPark/src/Pages/Service page/Nservice";
import  Navbar  from "./Components/Navbar/Navbar.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Garageowner" element={<GarageOwner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<DashboardPage />} />
          <Route path="/test2" element={<SignMap />} />
          <Route path="/service" element={<Nservice />} />
          <Route path="/test4" element={<Navbar />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
