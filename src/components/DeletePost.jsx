import axios from "axios";
import React, { useState } from "react";

import ConfirmModal from "./ConfirmModal";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function DeletePost({ postId, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  function deletePost() {
    setIsDeleting(true);
    axios
      .delete(`${API_URL}/${postId}`)
      .then(() => {
        console.log("Post deleted");
        onDelete();
        setIsDeleting(false);
        setIsConfirmationOpen(false);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        setIsDeleting(false);
      });
  }

  const handlePostDelete = () => {
    setIsConfirmationOpen(true);
  };

  return (
    <>
      <button onClick={handlePostDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      <ConfirmModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={deletePost}
        message={"Are you sure you want to delete this post?"}
      />
    </>
  );
}

export default DeletePost;
