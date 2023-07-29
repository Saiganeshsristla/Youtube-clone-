import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  },[]);

  const [searchParams] = useSearchParams();

  return (
    <div className="ml-20 p-5 mt-20">
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1"
        }
        width="900"
        height="420"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  );
};

export default WatchPage;
