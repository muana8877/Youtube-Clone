import React from "react";
import { GoHistory, GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineFeedback,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlinePlaylistPlay,
  MdOutlineSubscriptions,
  MdWatchLater,
} from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { PiMusicNoteLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { useUtils } from "../context/UtilsContext";

const Sidebar = () => {

  const {isSidebar, mobileShow, setMobileShow} = useUtils();

  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlinePlaylistPlay />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <GiLinkedRings />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Music",
      icon: <PiMusicNoteLight />,
    },
    {
      id: 3,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 4,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 5,
      name: "Sport",
      icon: <TfiCup />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report History",
      icon: <MdOutlineFlag />,
    },
    {
      id: 3,
      name: "Help",
      icon: <MdOutlineHelpOutline />,
    },
    {
      id: 4,
      name: "Send Feedback",
      icon: <MdOutlineFeedback />,
    },
  ];
  return (
    <div className={`${mobileShow ? "fixed top-16 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[-70%] sm:w-[30%]"
     : "hidden h-[100%] top-0 md:w-[25%] lg:w-[22%]"} lg:px-6 xl:static xl:block px-2  overflow-y-scroll overflow-x-hidden  no-scrollbar`}>
      {/* home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon} </div>
              <span className="cursor-pointer text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You*/}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div  key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* Explore*/}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* More From Youtube*/}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">More From Youtube</h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red">{item.icon}</div>
              <span className="cursor-pointer text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*Extra*/}
      <div className="mt-4 space-y-3 items-center">
        {sidebarItems5.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*footer*/}
      <div className="mt-4 space-y-3 items-center">
        <span className="text-xs flex flex-col space-y-5 text-gray-500">
          <span>
            About Press Copyright <br /> Contact us Creator Advertise <br />
            Developers
          </span>
          <span>
            Terms Privacy Policy & Safety <br /> How YouTube works <br />
            Test new features
          </span>
          <span>© 2024 Google LLC</span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
