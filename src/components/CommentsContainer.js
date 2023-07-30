import { comments } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, comment } = data;

  return (
    <div className=" bg-gray-100 flex m-2">
      <img
        className="h-10 w-10 mt-1"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
      />
      <div className="ml-5">
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <>
            <Comment data={comment} />
            <div className="ml-8 border border-l-black">
            <CommentList comments={comment.replies} />
            </div>
          </>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="ml-10">
      <h1 className="font-bold text-lg">Comments:</h1>
      <div className="p-2 ">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default CommentsContainer;
