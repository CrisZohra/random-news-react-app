import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function HomePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [URL, setURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
      axios.post("https://random-news-react-app.adaptable.app/posts")
      .then()
      .catch((error) => {
        console.log("Error creating new post...");
        console.log(error);    
      })
 

    setTitle("");
    setDescription("")
    setLocation("")
    setDate("")
    setCategory("")
    setImageURL("")
    setURL("")

  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            name="title" 
            required={true} 
            value={title} 
            onChange={(e) => {setTitle(e.target.value) }}
            />
        </label>

        <label>
          Description:
          <textarea
            type="text"
            name="description"
            required={true}
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </label>

        <label>
          Location:
          <input 
            type="text" 
            name="location" 
            value={location} 
            onChange={(e) => { setLocation(e.target.value) }}
            />
        </label>

        <label>
          Date:
          <input 
            type="date" 
            name="date" 
            value={date} 
            onChange={(e) => { setDate(e.target.value) }}
            />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="imageURL"
            placeholder="paste image URL"
            value={imageURL}
            onChange={(e) => { setImageURL(e.target.value) }}
          />
        </label>

        <label>
          URL:
          <input 
            type="text" 
            name="URL" 
            placeholder=""
            value={URL}
            onChange={(e) => { setURL(e.target.value) }}
            />
            
        </label>
        
        <label>
          Choose Category:
          <select 
            name="category" 
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
            >
            <option>Weather</option>
            <option>Selling</option>
            <option>Entertainment</option>
            <option>Events</option>
            <option>Traffic</option>
            <option>Social</option>
            <option>Jobs</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </label>
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default HomePage;
