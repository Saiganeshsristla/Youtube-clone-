const VideoCard2 = ({ info }) => {
  console.log(info);

  const { snippet } = info;

  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="m-2 w-[70rem] shadow-lg flex">
      
        <img
          className="h-48 rounded-2xl"
          alt="thumbnail"
          src={thumbnails.high.url}
        />

      <div className="m-2 mx-4">
        <h1 className="font-semibold text-xl">{title}</h1>
        <h1 className="text-md mt-2">{channelTitle}</h1>
      </div>
    </div>
  );
};

export default VideoCard2;
