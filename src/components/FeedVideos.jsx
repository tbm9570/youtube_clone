import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const FeedVideos = ({ videos }) => {
  return (
    <>
      {videos.map((item, index) => {
        return (
          <div className="w-full " key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard />}
          </div>
        );
      })}
    </>
  );
};

export default FeedVideos;
