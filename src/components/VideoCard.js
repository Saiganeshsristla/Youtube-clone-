import React from "react";

const VideoCard = ({ info }) => {
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  
  return (
    <div className="m-2 w-96 shadow-lg">
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
