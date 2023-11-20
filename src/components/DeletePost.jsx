import axios from "axios";
import React, { useState } from "react";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function DeletePost({ postId, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  function deletePost() {
    setIsDeleting(true);
    axios
      .delete(`${API_URL}/${postId}`)
      .then(() => {
        console.log("Post deleted");
        onDelete();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        setIsDeleting(false);
      });
  }

  return <button onClick={deletePost}>Delete</button>;
}

export default DeletePost;
