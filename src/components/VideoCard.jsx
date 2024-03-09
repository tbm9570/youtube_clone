import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet);
  return (
    <>
      <div className="flex justify-center items-center lg:block w-[calc(100%-12px)] md:w-[calc(50%-12px)] xl:w-[calc(33.3%-12px)] 2xl:w-[calc(25%-12px)] px-8 lg:px-0 ">
        <Link to={`/video/${videoId}`} className="w-full">
          <div className="flex flex-col  ">
            <img src={snippet.thumbnails.high.url} alt="" />
            <h1 className="text-white">{snippet.title}</h1>
            <Link to={`/channel/${snippet.channelId}`}>
              <p className="text-gray-500 pl-2">{snippet.channelTitle}</p>
            </Link>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
