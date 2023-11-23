import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";
import { PostsContext } from "../context/PostsStore";
import Plus from "/plusicon.png";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

export default function AddPostFormDialog({ onClose }) {
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    category: "",
    imageURL: "",
    URL: "",
  });
  const [confirm, setConfirm] = useState(false);
  const { posts, updatePosts } = useContext(PostsContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmEdit = () => {
    axios
      .post(API_URL, newPost)
      .then((response) => {
        const newPost = response.data;

        const updatedPosts = [newPost, ...posts];
        updatePosts(updatedPosts);

        handleClose();
      })
      .catch((error) => {
        console.log("Error adding post...");
        console.log(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <>
      <Button onClick={handleClickOpen} sx={{ height: "100%", width: "100%" }}>
        <img src={Plus} alt="plus icon" />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add post</DialogTitle>

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
                  value={newPost.title}
                  onChange={(e) => {
                    setNewPost((prev) => ({
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
                  value={newPost.description}
                  onChange={(e) => {
                    setNewPost((prev) => ({
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
                  value={newPost.location}
                  onChange={(e) => {
                    setNewPost((prev) => ({
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
                  value={newPost.date}
                  onChange={(e) => {
                    setNewPost((prev) => ({
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
                  value={newPost.imageURL}
                  onChange={(e) => {
                    setNewPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setImageURL(e.target.value);
                  }}
                />
              </label>

              <br />
              <label className="form">
                Choose Category:
                <select
                  name="category"
                  value={newPost.category}
                  onChange={(e) => {
                    setNewPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));

                    // setCategory(e.target.value);
                  }}
                >
                  <option value="">Select category</option>
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
              Are you sure you want to add this new post?
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
