import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { AboutUs } from './pages/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/about"} element={<AboutUs />} />
        <Route path={"/about"} element={<Pro />} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
