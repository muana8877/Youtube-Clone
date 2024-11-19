import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import dummy from "../../public/dummy.png";
import { FaThumbsUp } from "react-icons/fa";
import SuggestedVideo from "./SuggestedVideo";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };
  const fetchRelatedVideo = ()=>{
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  }
  return (
    <div className="flex justify-center flex-row h-[calc(100%-100px)] mt-16 overflow-y-scroll">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className=" lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-8 py-3 lg:py-6 ">
          {/* player */}
          <div className="h-[200px] md:h-[500px] ml-[-16px] lg:ml-0 mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          {/* title */}
          <div className="font-bold text-xl mt-4">
            <span>{video?.title}</span>
          </div>
          {/* channel name + likes + views _ subscribers */}
          <div className="flex justify-between mt-3">
            <div className="flex items-center space-x-5">
              <div className="flex mt-3 space-x-3 ">
                <div className="items-start flex">
                  <div className="flex h-9 w-9 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={video?.author?.avatar || dummy} // Fallback if no avatar
                    />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                    )}
                  </span>
                  <span className="flex items-center font-semibold text-[12px] text-gray-600">
                    {video?.author?.stats?.subscribers || "No subscribers"}
                  </span>
                </div>
              </div>
              <div>
                <span className="cursor-pointer bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="flex items-center bg-slate-300 py-1 px-4 rounded-full">{`${abbreviateNumber(
                video?.stats?.views,
                2
              )} views`}</span>
              <span className="flex item items-center gap-3 bg-slate-300 py-1 px-4 rounded-full">
                <FaThumbsUp />
                {`${abbreviateNumber(video?.stats?.likes, 2)}`}
              </span>
            </div>
          </div>
          {/* description */}
          <div className="mt-8">
            <div className="p-5 bg-gray-300 rounded-lg">
              <span>{video?.description}</span>
            </div>
            <div className="font-bold text-xl mt-4">
              <span>Comments {video?.stats?.comments}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[100%]  lg:w-[350px] xl:w-[400px] gap-4">
          {
            relatedVideo?.contents?.map((item, index)=>{
              if(item?.type!=="video") return null;
              return <SuggestedVideo key={index} video={item?.video} />
            })
          }
        </div>

      </div>
    </div>
  );
};

export default PlayingVideo;
