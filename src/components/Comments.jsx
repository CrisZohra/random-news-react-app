import { useState } from "react";

function AddComment() {
  const [comments, setComments] = useState(["first comment", "second comment"]);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    setComments(...comments, comment);
  }
console.log(comment)
console.log(comments)
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Write your thoughts"
            value={comment}
            onChange={(e) => {
                setComment(e.target.value);
            }}
          />
          <button>submit</button>
        </form>
      </div>
                {comments.map((comment) => {
                  return <p>{comment}</p>;
                })}
    </>
  );
}

export default AddComment;
