import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText, DialogTitle, MenuItem } from "@mui/material";
import axios from "axios";
import { PostsContext } from "../context/PostsStore";
import { useNavigate, useLocation } from "react-router-dom";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

export default function DeletePostDialog({ post: postToDelete, onClose }) {
  const [open, setOpen] = useState(false);
  const { posts, updatePosts } = useContext(PostsContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/${postToDelete.id}`)
      .then(() => {
        debugger;
        if (location.pathname === "/") {
          const updatedPosts = posts.filter(
            (post) => post.id !== postToDelete.id
          );
          updatePosts(updatedPosts);
          handleClose();
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error updating post...");
        console.log(error);
      });
  };

  return (
    <>
      <MenuItem onClick={handleClickOpen}>Delete</MenuItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete post</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "#dea883",
              border: "#dea883",
              ":hover": {
                backgroundColor: "#1c0a52",
                color: "white",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            sx={{
              color: "#dea883",
              border: "#dea883",
              ":hover": {
                backgroundColor: "#1c0a52",
                color: "white",
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
