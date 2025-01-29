import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Signup/>} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
