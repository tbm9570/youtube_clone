import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet.thumbnails.high.url);
  return (
    <>
      <div className="w-33%">
        <Link to={`/video/${videoId}`}>
          <div className="">
            <img src={snippet.thumbnails.default.url} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
