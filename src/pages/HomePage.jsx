import axios from "axios";
import { useState } from "react";

function HomePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("other");
  const [imageURL, setImageURL] = useState("");
  const [URL, setURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      description,
      location,
      date,
      category,
      imageURL,
      URL,
    };
    console.log(requestBody);

    axios
      .post("https://random-news-react-app.adaptable.app/posts", requestBody)
      .then(() => {
        console.log("form submitted");

        setTitle("");
        setDescription("");
        setLocation("");
        setDate("");
        setCategory("");
        setImageURL("");
        setURL("");
      })
      .catch((error) => {
        console.log("Error creating new post...");
        console.log(error);
      });
  };

  return (
    <>
      <h1>Random News; the Portal</h1>

      <h2>Submit your own news snippet!</h2>
      <form onSubmit={handleSubmit}>
        <label className="form">
          Title:
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            required={true}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
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
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
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
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
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
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
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
            value={URL}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="form">
          Choose Category:
          <select
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
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
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default HomePage;
