import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./App.scss";
// import firebase from "./firebase";
// import { getDatabase, ref, get, set } from "firebase/database";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
