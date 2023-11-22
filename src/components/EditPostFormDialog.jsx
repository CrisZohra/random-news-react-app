import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText, DialogTitle, MenuItem } from "@mui/material";
import axios from "axios";
import { PostsContext } from "../context/PostsStore";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

export default function EditPostFormDialog({ post, onClose }) {
  const [open, setOpen] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const [confirm, setConfirm] = useState(false);
  const { posts, updatePosts } = useContext(PostsContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleConfirmEdit = () => {
    axios
      .put(`${API_URL}/${post.id}`, editedPost)
      .then((response) => {
        const editedPost = response.data;
        console.log("Post edited");

        const postIndex = posts.findIndex((post) => post.id === editedPost.id);
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = editedPost;
        updatePosts(updatedPosts);

        handleClose();
      })
      .catch((error) => {
        console.log("Error updating post...");
        console.log(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <>
      <MenuItem onClick={handleClickOpen}>Edit</MenuItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit post</DialogTitle>

        <DialogContent>
          {!confirm ? (
            <form>
              <label className="form">
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  required={true}
                  value={editedPost.title}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                    // setTitle(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="form">
                Description:
                <textarea
                  type="text"
                  name="description"
                  placeholder="Write a description"
                  required={true}
                  value={editedPost.description}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setDescription(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="form">
                Location:
                <input
                  type="text"
                  name="location"
                  placeholder="Specify the location"
                  value={editedPost.location}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setLocation(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="form">
                Date:
                <input
                  type="date"
                  name="date"
                  placeholder="Set the date"
                  value={editedPost.date}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setDate(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="form">
                Image:
                <input
                  type="text"
                  name="imageURL"
                  placeholder="Paste image URL"
                  value={editedPost.imageURL}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setImageURL(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="form">
                URL:
                <input
                  type="text"
                  name="URL"
                  placeholder="Add a URL"
                  value={editedPost.URL}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setURL(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="form">
                Choose Category:
                <select
                  name="category"
                  value={editedPost.category}
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setCategory(e.target.value);
                  }}
                >
                  <option value="weather">Weather</option>
                  <option value="selling">Selling</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="events">Events</option>
                  <option value="traffic">Traffic</option>
                  <option value="social">Social</option>
                  <option value="jobs">Jobs</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </form>
          ) : (
            <DialogContentText>
              Are you sure you want to edit?
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          {confirm ? (
            <Button onClick={handleConfirmEdit}>Confirm</Button>
          ) : (
            <Button onClick={handleFormSubmit}>Submit</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
