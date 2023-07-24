import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="w-full ml-16 p-2 mt-20">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
