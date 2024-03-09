import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import FeedVideos from "./FeedVideos";
import { featchDate } from "../utils/fatchFromAPI";

import data from "../utils/data.json";

const Feed = () => {
  const [cruntCategory, setCruntCategory] = useState("New");
  const [videos, setVideos] = useState(data);

  useEffect(() => {
    // featchDate(`search?part=snippet&q=${cruntCategory}`).then((res) => {
    //   setVideos(res.data.items);
    // });
  }, [cruntCategory]);

  return (
    <>
      <section className="w-full ">
        <div className="container m-auto relative  ">
          <div className="flex flex-col lg:flex-row">
            <Sidebar
              cruntCategory={cruntCategory}
              setCruntCategory={setCruntCategory}
            />
            <section className=" p-1 w-full min-h-[calc(100vh-3.5rem)] lg:ml-72 bg-primary  ">
              <div className="w-full  p-2">
                <h1 className="text-secondary text-3xl font-bold">
                  <span className="text-white">{cruntCategory} </span>
                  Videos
                </h1>
              </div>
              <div className="w-full flex flex-wrap ">
                <FeedVideos videos={videos} />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feed;
