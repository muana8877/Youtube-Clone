import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";

const App = () => {
  const { loading } = useAuth();

  const [isSearchVisible, setIsSearchVisible] = useState(false); // Declare state here
  
  return (
    <div className="h-screen">
      {loading && <Loading />}
      <Navbar
        isSearchVisible={isSearchVisible}
        setIsSearchVisible={setIsSearchVisible} // Pass down the prop
      />
      <Routes>
        <Route path="/" exact element={<Home isSearchVisible={isSearchVisible} setIsSearchVisible={setIsSearchVisible} />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
};

export default App;
