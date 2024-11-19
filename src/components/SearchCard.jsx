import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Time from "../loader/Time";
import { Link } from "react-router-dom";
import dummy from "../../public/dummy.png";
console.log(dummy);
const SearchCard = ({ video }) => {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex gap-4">
          {/* Thumbnail & duration */}
          <div className="h-40 lg:h-44 xl:h-50 w-32 min-w-[368px] lg:w-30 lg:min-w-[328px]   xl:w-50 xl:min-w-[350px] rounded-xl hover:rounded-none duration-200 overflow-hidden relative">
            <img
              src={video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
              className="object-contain"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo & title */}
          <div className="flex mt-3 space-x-3 ">
            <div>
              <div className="flex items-center">
              <span className="text-sm font-semibold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              </div>
              <div className="flex items-center mb-3 space-x-1 text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="text-gray-600">•</span>
                <span>{video?.publishedTimeText}</span>
              </div>
              <div className="items-center flex gap-4 mb-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full rounded-full object-contain"
                    src={video?.author?.avatar[0].url || dummy}
                    alt="channel logo"
                  />
                </div>
                {video?.author?.title}
              </div>
              <div className="line-clamp-2 text-sm">
                <span>{video?.descriptionSnippet}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
