import {
  Alert,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsStore";
import Plus from "/plusicon.png";
const API_URL = "https://random-news-react-app.adaptable.app/posts";
const StyledForm = styled("form")`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 576px) {
    width: 500px;
  }
`;

export default function AddPostFormDialog() {
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
  const [isValid, setIsValid] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // Initialise values when closing dialog, to get them initialised when it is opened again
    setOpen(false);
    setConfirm(false);
    setIsValid(true);
    // Set all props to empty when the dialog is closed
    setNewPost({
      title: "",
      description: "",
      location: "",
      date: "",
      category: "",
      imageURL: "",
      URL: "",
    });
  };

  const handleConfirmAdd = () => {
    axios
      .post(API_URL, newPost)
      .then((response) => {
        const post = response.data;
        const updatedPosts = [post, ...posts];
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
    if (
      newPost.title === "" ||
      newPost.description === "" ||
      newPost.category === ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setConfirm(true);
    }
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
                value={newPost.title}
                onChange={(e) => {
                  setNewPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Description"
                id="title"
                name="description"
                placeholder="Write a description"
                required={true}
                value={newPost.description}
                onChange={(e) => {
                  setNewPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Location"
                id="title"
                name="location"
                placeholder="Specify the location"
                value={newPost.location}
                onChange={(e) => {
                  setNewPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label={newPost.date ? "Date" : undefined}
                id="date"
                type="date"
                name="date"
                value={newPost.date}
                onChange={(e) => {
                  setNewPost((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <TextField
                label="Image"
                id="imageURL"
                type="text"
                name="imageURL"
                placeholder="Paste image URL"
                value={newPost.imageURL}
                onChange={(e) => {
                  setNewPost((prev) => ({
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
                  value={newPost.category}
                  label="Category"
                  onChange={(e) => {
                    setNewPost((prev) => ({
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
              Are you sure you want to add this new post?
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleConfirmAdd}
            >
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
