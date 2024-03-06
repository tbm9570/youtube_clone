import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const FeedVideos = ({ videos }) => {
  return (
    <>
      <div className="  w-full flex flex-wrap gap-3 ">
        {videos.map((item, index) => {
          return (
            <>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard />}
            </>
          );
        })}
      </div>
    </>
  );
};

export default FeedVideos;
