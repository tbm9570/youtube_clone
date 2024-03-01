import React from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <>
      <section className="w-full ">
        <div className="container m-auto relative  ">
          <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className=" lg:ml-72">Feed</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feed;
