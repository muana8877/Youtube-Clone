import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import Listitems from "./Listitems";

const Home = ({ isSearchVisible, setIsSearchVisible }) => {  // Accept props here
  const { data } = useAuth();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="home flex mt-16 h-[100%]">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="h-[100%] w-[100%] overflow-y-scroll overflow-x-hidden">
        <Listitems />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-4 md:px-5 px-12">
          {data.map((item, index) => {
            if (item.type !== "video") return null;
            return <Video key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
