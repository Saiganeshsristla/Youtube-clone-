const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2">
      <img
        className="h-6 pt-1"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
      ></img>
      <div className="mx-2">
        <span className="font-bold">{name}</span>
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
