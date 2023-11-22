import axios from "axios";
import { useState } from "react";



function AddComment(props) {
  const API_URL = `https://random-news-react-app.adaptable.app/posts/${props.postID}?_embed=comments`
  
  const [comments, setComments] = useState([]);
  const [commentMessage, setCommentMessage] = useState("");

  axios.get(API_URL)
.then(response => {
  setComments(response.data.comments)
})
.catch(error => error)


function handleSubmit(e) {
  e.preventDefault();
  console.log("form submitted");
  
  {/* 
  axios.post(API_URL, )
  .then()
  .catch(error => error)
  
}
*/}
}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="commentMessage"
            placeholder="Write your thoughts"
            value={commentMessage}
            onChange={(e) => {
                setCommentMessage(e.target.value);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
                {comments.map((elm) => {
                  return (
                  <p key={elm.id} >{elm.message}</p>
                  )
                })}
    </>
  );
}

export default AddComment;
