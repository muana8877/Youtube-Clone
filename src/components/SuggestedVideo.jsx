import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const SuggestedVideo = ({video}) => {
  return (
    <div>
        <Link to={`/video/${video?.videoId}`}>
        <div className="flex gap-2">
          {/* Thumbnail & duration */}
          <div className="h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden relative">
            <img
              src={video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
              className="object-contain w-[100%] h-[100%]"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo & title */}
          <div className="flex  space-x-3 ">
            <div>
              <span className="text-sm font-semibold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold text-[12px] text-gray-600">
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
  )
}

export default SuggestedVideo