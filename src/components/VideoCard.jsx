import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet.thumbnails);
  return (
    <>
      <div className="flex justify-center items-center lg:block w-[calc(100%-12px)] md:w-[calc(50%-12px)] xl:w-[calc(33.3%-12px)] 2xl:w-[calc(25%-12px)]">
        <Link to={`/video/${videoId}`}>
          <div className="">
            <img src={snippet.thumbnails.high.url} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
