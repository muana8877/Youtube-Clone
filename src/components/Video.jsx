import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  console.log(video);
  return (
    <div className="">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/* Thumbnail & duration */}
          <div className="md:h-auto md:w-fit sm:h-[100%] sm:-w[100%]  rounded-xl hover:rounded-none duration-200 overflow-hidden relative">
            <img
              src={video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
              className="object-contain w-[100%]"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo & title */}
          <div className="flex mt-3 space-x-3 ">
            <div className="items-start flex">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full rounded-full object-contain"
                  src={video?.author?.avatar[0].url}
                  alt="channel logo"
                />
              </div>
            </div>
            <div>
              <span className="md:text-sm sm:text-lg font-semibold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex items-center space-x-1 text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,2
                )} views`}</span>
                <span className="text-gray-600">•</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
