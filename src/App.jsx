import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
