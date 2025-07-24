import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "../pages/homePage.jsx";
import Aurora from "../ReactBits/Aurora/Aurora";
import SplashCursor from "../ReactBits/SplashCursor/SplashCursor";
import video from "./assets/shooting-star.mp4";
import './App.css';

const NotFound = () => (
  <div style={{ padding: '20px', color: 'red' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you’re looking for doesn’t exist.</p>
  </div>
);

function App() {
  return (
    <>
    <video className="back-video" autoPlay muted loop id="myVideo">
      <source src={video} type="video/mp4" />
    </video>
    <Aurora />
    <SplashCursor />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
