import axios from "axios";
import { Avatar, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import avatar from "/default-avatar.webp";
import Button from "@mui/material/Button";


function AddComment(props) {
  const API_URL = `https://random-news-react-app.adaptable.app/posts/${props.postID}?_embed=comments`;

  const [comments, setComments] = useState([]);
  const [commentMessage, setCommentMessage] = useState("");

  
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
    
    useEffect(() => {
      axios
      .get(API_URL)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => error);
    }, []);

    let array = [];
    for (let i = comments.length - 1; i >= 0; i--) {
      array.push(comments[i]);
    }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="comment-input"
            type="text"
            name="commentMessage"
            placeholder="Write your thoughts"
            value={commentMessage}
            onChange={(e) => {
              setCommentMessage(e.target.value);
            }}
          />
          <Button  sx={{
              color: "#dea883",
              border: "#dea883",
              ":hover": {
                backgroundColor: "#1c0a52",
                color: "white",
              },
            }}
            type="submit">Submit</Button>
        </form>
      </div>
      {array.map((elm) => {
        return (
          <div style={{ padding: 10 }}>
            <Paper style={{ padding: "10px 5px" }}>
              <Grid container wrap="nowrap" spacing={1}>
                <Grid item>
                  <Avatar alt="anonymous" src={avatar} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <p style={{ textAlign: "left" }}>
                    <p key={elm.id}>{elm.message}</p>
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted recently
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
