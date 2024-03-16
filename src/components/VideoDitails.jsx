import React, { useEffect, useState } from "react";
import { featchDate } from "../utils/fatchFromAPI";
import { Link, useParams } from "react-router-dom";

import data from "../utils/VideoDeatils.json";
import channels from "../utils/Channel.json";
import { BiComment, BiLike, BiLink, BiStreetView } from "react-icons/bi";
import { FaComment, FaRegComments } from "react-icons/fa";

const VideoDitails = () => {
  const [video, setVideo] = useState();
  console.log("🚀 ~ VideoDitails ~ video:", video);
  const [channel, setChannel] = useState();
  const { id } = useParams();

  useEffect(() => {
    featchDate(`videos?part=snippet,statistisc&id=${id}`)
      .then((res) => {
        setVideo(res.data.items[0]);

        featchDate(`channels?part=snippet&id=${res.data.items[0].snippet.channelId}`)
          .then((res) => {
            setChannel(res.data.items[0]);
            console.log("🚀 ~ .then ~ res.data:", res);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {!video ? (
        <section className="w-full">
          <div className="container m-auto min-h-[calc(100vh-3.5rem)] relative bg-[#100F0F] px-4 py-2  flex justify-center items-center ">
            <p className="text-white">loading...</p>
          </div>
        </section>
      ) : (
        <section className="w-full ">
          <div className="container m-auto relative bg-[#100F0F] px-4 py-2  lg:flex justify-center items-center ">
            <div className="w-full lg:w-[70%]">
              <iframe
                src={`https://www.youtube.com/embed/${id}?&autoplay=1`}
                allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-[30vh] md:h-[40vh] lg:h-[60vh] xl:lg:h-[70vh] "
              />
              <h1 className="text-white text-base lg:text-xl font-bold font-Raleway py-1 px-1">
                {video.snippet.title}
              </h1>

              <div className="flex justify-between py-1 px-1">
                <div className="text-zinc-300 flex items-center gap-1">
                  <BiStreetView size={22} />
                  <p className=" ">{video.statistics.viewCount} views </p>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div className="text-zinc-300 flex items-center gap-1">
                    <BiLike size={22} className="cursor-pointer" />
                    <p className="">{video.statistics.likeCount}</p>
                  </div>
                  <div className="text-zinc-300 flex items-center gap-1">
                    <FaRegComments size={22} className="cursor-pointer" />
                    <p className=" ">{video.statistics.commentCount}</p>
                  </div>
                </div>
              </div>
              <div className=" p-1 flex items-center gap-3 ">
                <div className="">
                  <Link to={`/channel/${channel?.id}`}>
                    <img
                      src={channel?.snippet.thumbnails.high.url}
                      alt="logo"
                      className="w-10 rounded-full"
                    />
                  </Link>
                </div>
                <div className="">
                  <Link to={`/channel/${channel?.id}`}>
                    <h1 className="text-zinc-100 font-Raleway text-base font-bold ">
                      {video.snippet.channelTitle}
                    </h1>
                  </Link>
                  <p className="text-zinc-400 text-sm">
                    {channel?.statistics.subscriberCount} subscribers
                  </p>
                </div>
              </div>
              <div className="p-1 w-full  ">
                <pre className="text-zinc-300 font-Raleway max-w-full whitespace-pre-wrap break-words">
                  {video.snippet.description}
                </pre>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">sad</div>
          </div>
        </section>
      )}
    </>
  );
};

export default VideoDitails;
