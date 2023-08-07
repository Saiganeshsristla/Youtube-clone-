import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { generateName, generateMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

  const dispatch = useDispatch();

  const messages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({name:generateName(), message: "live chat testing"}));
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="border border-black h-[420px] overflow-y-hidden overflow-y-scroll flex flex-col-reverse">
      {messages.map((m, index) => {
        return <ChatMessage key={index} name={m.name} message={m.message} />
      })}
      </div>
    </>
  );
};

export default LiveChat;
