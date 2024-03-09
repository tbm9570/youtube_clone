import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({
  card: {
    id: { channelId },
    snippet,
  },
}) => {
  return (
    <div className="sm:flex sm:justify-center sm:items-center  w-[calc(100%-12px)] md:w-[calc(50%-12px)] xl:w-[calc(33.3%-12px)] 2xl:w-[calc(25%-12px)]   ">
      <div className="flex flex-col justify-center items-center gap-2">
        <Link to={`/channel/${channelId}`}>
          <img
            src={snippet.thumbnails.high.url}
            alt=""
            className="max-w-[180px] rounded-full"
          />
        </Link>
        <Link to={`/channel/${channelId}`}>
          <h2 className="text-gray-300 text-xl font-bold">
            {snippet.channelTitle}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default ChannelCard;
