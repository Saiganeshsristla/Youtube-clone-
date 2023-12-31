import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let ml = "ml-52";
  if (!isMenuOpen) {
    ml = "ml-4";
  }

  return (
    <div className={`w-full ${ml} p-2 mt-20 `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
