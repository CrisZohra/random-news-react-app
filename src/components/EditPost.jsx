import { useState } from "react";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function EditPost({ post, onExitEditing }) {
  const [editedPost, setEditedPost] = useState(post);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsConfirmationOpen(true);
  };

  const confirmEdit = () => {
    axios
      .put(`${API_URL}/${post.id}`, editedPost)
      .then(() => {
        console.log("Post edited");
        onExitEditing();
      })
      .catch((error) => {
        console.log("Error updating post...");
        console.log(error);
      });

    setIsConfirmationOpen(false);
  };

  const cancelEdit = () => {
    setIsConfirmationOpen(false);
    onExitEditing();
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      <br />
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
      <br />

      <button type="submit">Edit</button>
      {isConfirmationOpen && (
        <ConfirmModal
          isOpen={isConfirmationOpen}
          onClose={cancelEdit}
          onConfirm={confirmEdit}
          message="Are you sure you want to edit this post?"
        />
      )}
    </form>
  );
}

export default EditPost;
