import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let cardWidth = "24rem";

  if (!isMenuOpen) {
    cardWidth = "22rem";
  }

  return (
    <div className={`m-2 w-[${cardWidth}] shadow-lg`}>
      <img
        className="w-full rounded-xl"
        alt="Thumbnail"
        src={thumbnails.medium.url}
      ></img>
      <ul className="ml-2">
        <li className="font-bold">{title}</li>
        <li className="mt-2">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
