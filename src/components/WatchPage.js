import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";

const WatchPage = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();

  return (
    <div className="w-[95%]">
      <div className="ml-10 p-5 mt-20 flex w-full">
        <div>
          <iframe
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1"
            }
            width="900"
            height="420"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div className="">
          <div className="border border-black ml-2 w-96 h-[420px] ">
            <LiveChat />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(addMessage({ name: "saiganesh", message: text}))
              setText('')
            }}
          >
            <input
              className="px-2 m-2 border border-black w-72"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-green-200 px-2 p-1 m-1 w-16 rounded-lg">
              send
            </button>
          </form>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
