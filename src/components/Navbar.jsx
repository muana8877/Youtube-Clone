import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/logo.png";
import profileImg from "../../public/profile.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";

const Navbar = ({ isSearchVisible, setIsSearchVisible }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();

  useEffect(()=>{
     console.log(isSidebar, mobileShow)
  },[isSidebar])   

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handelSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };

  return (
    <div className="flex justify-between px-6 py-2 items-center fixed top-0 w-[100%] bg-white z-50">
      <div className="space-x-4 flex items-center">
        <GiHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={handelSidebar} // Toggle sidebar on click
        />
        <Link to={`/`}>
          <img
            src={logo}
            alt="LOGO"
            className="w-28 cursor-pointer object-contain hidden sm:block"
          />
        </Link>
      </div>

      <div
        className={`flex items-center w-full sm:w-[35%] ${
          isSearchVisible ? "" : "hidden sm:flex"
        }`}
      >
        <div className="w-[100%] border-gray-400 px-4 py-2 rounded-l-full border">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-[100%]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-gray-400 bg-gray-100 border rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
      </div>

      <div
        className={`items-center space-x-5 flex ${
          isSearchVisible ? "hidden sm:flex" : ""
        }`}
      >
        <CiSearch
          size={"24px"}
          className="cursor-pointer sm:hidden"
          onClick={() => setIsSearchVisible(!isSearchVisible)} // Toggle search input visibility
        />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profileImg} size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
