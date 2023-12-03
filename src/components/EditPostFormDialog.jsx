import {
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
  Alert,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsStore";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

const StyledForm = styled("form")`
  padding: 5px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 576px) {
    width: 500px;
  }
`;

export default function EditPostFormDialog({ post, onClose }) {
  const [open, setOpen] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const [confirm, setConfirm] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { posts, updatePosts } = useContext(PostsContext);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
    setConfirm(false);
    setIsValid(true);
    setEditedPost(post);
  };

  const handleConfirmEdit = () => {
    axios
      .put(`${API_URL}/${post.id}`, editedPost)
      .then((response) => {
        const editedPost = response.data;
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
    if (
      editedPost.title === "" ||
      editedPost.description === "" ||
      editedPost.category === ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setConfirm(true);
    }
  };

  return (
    <>
      <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit post</DialogTitle>
        <DialogContent>
          {!confirm ? (
            <StyledForm>
              {!isValid ? (
                <Alert severity="error">
                  The following fields are required:
                  <ul>
                    <li>Title</li>
                    <li>Description</li>
                    <li>Category</li>
                  </ul>
                </Alert>
              ) : null}
              <TextField
                label="Title"
                id="title"
                name="title"
                placeholder="Enter title"
                required={true}
                value={editedPost.title}
                onChange={(e) => {
                  setEditedPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Description"
                id="description"
                name="description"
                placeholder="Write a description"
                required={true}
                value={editedPost.description}
                onChange={(e) => {
                  setEditedPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Location"
                id="location"
                name="location"
                placeholder="Specify the location"
                value={editedPost.location}
                onChange={(e) => {
                  setEditedPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Date"
                id="date"
                type="date"
                name="date"
                value={editedPost.date}
                onChange={(e) => {
                  setEditedPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Image"
                id="image"
                type="text"
                name="image"
                placeholder="Paste image URL"
                value={editedPost.image}
                onChange={(e) => {
                  setEditedPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <FormControl fullWidth>
                <InputLabel id="category-label">Category *</InputLabel>
                <Select
                  id="category"
                  labelId="category-label"
                  name="category"
                  value={editedPost.category}
                  label="Category"
                  onChange={(e) => {
                    setEditedPost((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                  required
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="weather">Weather</MenuItem>
                  <MenuItem value="selling">Selling</MenuItem>
                  <MenuItem value="entertainment">Entertainment</MenuItem>
                  <MenuItem value="events">Events</MenuItem>
                  <MenuItem value="traffic">Traffic</MenuItem>
                  <MenuItem value="social">Social</MenuItem>
                  <MenuItem value="jobs">Jobs</MenuItem>
                  <MenuItem value="education">Education</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </StyledForm>
          ) : (
            <DialogContentText>
              Are you sure you want to edit?
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
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
          {confirm ? (
            <Button variant="contained" onClick={handleConfirmEdit}>
              Confirm
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleFormSubmit}
              sx={{
                backgroundColor: "#dea883",
                ":hover": {
                  backgroundColor: "#1c0a52",
                },
              }}
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
