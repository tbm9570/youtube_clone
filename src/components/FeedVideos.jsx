import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const FeedVideos = ({ videos }) => {
  return (
    <>
      {!videos ? (
        <div className=" w-full h-[calc(100vh-7.5rem)] flex justify-center items-center ">
          <p className="text-white">Loading...</p>
        </div>
      ) : (
        <div className="  w-full flex flex-wrap gap-3 ">
          {videos.map((item, index) => {
            return (
              <>
                {item.id.videoId && <VideoCard video={item} key={index} />}
                {item.id.channelId && <ChannelCard card={item} key={index} />}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FeedVideos;












