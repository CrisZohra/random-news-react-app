import axios from "axios";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import avatar from "/default-avatar.webp"

function AddComment(props) {
  const API_URL = `https://random-news-react-app.adaptable.app/posts/${props.postID}?_embed=comments`;

  const [comments, setComments] = useState([]);
  const [commentMessage, setCommentMessage] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => error);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("form submitted");
    console.log(commentMessage);

    const requestBody = {
      postId: props.postID,
      message: commentMessage,
    };

    axios
      .post("https://random-news-react-app.adaptable.app/comments", requestBody)

      .then((response) => {
        console.log("submitted: ", comments);
        setCommentMessage("");

        setComments((prev) => [...prev, response.data]);
      })
      .catch((error) => {
        console.log("Error creating new comment...");
        console.log(error);
      });
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
          <button type="submit">Submit</button>
        </form>
      </div>
      {comments.map((elm) => {
        return (
          <div style={{ padding: 14 }} >

          <Paper style={{ padding: "20px 10px" }}>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
      <Avatar alt="anonymous" src={avatar} />
    </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <p style={{ textAlign: "left" }}>
                  <p key={elm.id}>{elm.message}</p>{" "}
                </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
          </div>
        );
      })}
    </>
  );
}

export default AddComment;
