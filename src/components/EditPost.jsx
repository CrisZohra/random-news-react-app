import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function EditPost({postId, post}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("other");
  const [imageURL, setImageURL] = useState("");
  const [URL, setURL] = useState("");
  const [editedPost, setEditedPost] = useState(post)
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const requestBody = {
    //   title,
    //   description,
    //   location,
    //   date,
    //   category,
    //   imageURL,
    //   URL,
    // };

    axios
      .put(`${API_URL}/${postId}`, editedPost)
      .then(() => {
        console.log("Post edited");
      })
      .catch((error) => {
        console.log("Error updating post...");
        console.log(error);
      });
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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))
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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))

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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))

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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))

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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))

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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))

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
            setEditedPost(prev => ({...prev, [e.target.name] : e.target.value}))

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
    </form>
  );
}

export default EditPost;
